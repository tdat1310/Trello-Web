import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCorners, defaultDropAnimationSideEffects, useSensor, useSensors } from "@dnd-kit/core"
import ListColumn from "./ListColumn/ListColumn"
import {Box} from "@mui/material"
import { mapOrder } from "~/utils/Sorts"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
import Column from "./ListColumn/Column/Column"
import Card from "./ListColumn/Column/ListCard/Card/Card"
import { cloneDeep } from "lodash"
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN : 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({board}) {
  // const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}})
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance: 10}})
  const touchSensor = useSensor(TouchSensor, {activationConstraint: {delay: 250, tolerance: 500}})
  const sensors = useSensors( mouseSensor, touchSensor)

  const [orderColumns, setOrderColumns] = useState([])

  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState(null)

  useEffect(()=>{ 
  setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  },[board])
  const handleDragEnd = (e) => {
      const {active, over} = e
      if(!active || !over) return

      if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.CARD){
        const {id : activeDraggingCardId, data : {current : activeDraggingCardIdData}} = active
        const {id : overCardId} = over
        const activeColumn = findColumnByCardId(activeDraggingCardId)
        const overColumn = findColumnByCardId(overCardId)
        
        if(!activeColumn || !overColumn) return 

        if(oldColumnWhenDraggingCard._id !== overColumn._id){
            // console.log('Kéo thả card giữa 2 column khác nhau')
        }else{
          const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
          const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)
          const dnnOrderCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex)
          setOrderColumns(prevColumns => {
            const nextColumns = cloneDeep(prevColumns)
            const targetColumns = nextColumns.find(column => column._id === overColumn._id)
            targetColumns.cards = dnnOrderCards
            targetColumns.cardOrderIds = dnnOrderCards.map(card => card._id)
            console.log('targetColumn', targetColumns)
            return nextColumns
          })
        }
      }
      if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN){
        if(active.id != over.id) {
          const oldColumnIndex = orderColumns.findIndex(c => c._id === active.id)
          const newColumnIndex = orderColumns.findIndex(c => c._id === over.id)
          const dnnOrderColumns = arrayMove(orderColumns, oldColumnIndex, newColumnIndex)
          // const dnnOrderColumnsIds = dnnOrderColumns.map(c => c.id)
          setOrderColumns(dnnOrderColumns)
        }
      }
      setActiveDragItemId(null)
      setActiveDragItemType(null)
      setActiveDragItemData(null)
      setOldColumnWhenDraggingCard(null)
  }
  const handleDragStart = (e) => {
        setActiveDragItemId(e?.active?.id)
        setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(e?.active?.data?.current)

        if(e?.active?.data?.current?.columnId) {
          setOldColumnWhenDraggingCard(findColumnByCardId(e?.active?.id))
        }
  }
  const findColumnByCardId = (cardId) => {
    return orderColumns.find(column => column?.cards.map(card => card._id)?.includes(cardId))
  }
  const handleDragOver = (e) => {
      if(activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

      const {active, over} = e

      if(!active || !over) return

      const {id : activeDraggingCardId, data : {current : activeDraggingCardIdData}} = active
      const {id : oveCardId} = over
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(oveCardId)
      
      if(!activeColumn || !overColumn) return 

      if(activeColumn._id !== overColumn._id){
        setOrderColumns(prevColumns => {
          const overCardIdIndex = overColumn?.cards?.findIndex(card => card._id ===oveCardId)
          // console.log('overCardIdIndex : ', overCardIdIndex)
          let newCardIndex 
          const isBelowOverItem = active.rect.current.translated &&
           active.rect.current.translated.top > over.rect.top + over.rect.height;
          const modifier = isBelowOverItem ? 1 : 0;
          newCardIndex = overCardIdIndex >= 0 ? overCardIdIndex + modifier : overColumn?.cards?.length + 1;
          // console.log('newCardIndex : ', newCardIndex)
          const nextColumns = cloneDeep(prevColumns)
          const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
          const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

          if(nextActiveColumn){
            nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

            nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
          }
          if(nextOverColumn){
            nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

            nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0 , activeDraggingCardIdData)
            
            nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)
          }
          return nextColumns
        })
      }
  }
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {active: {opacity: '0.5',},},
    }),
  };
  return (
    <DndContext 
    onDragEnd={handleDragEnd} 
    sensors={sensors} 
    onDragStart={handleDragStart}
    onDragOver={handleDragOver}
    collisionDetection={closestCorners}
    >
    <Box
    sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      display: 'flex',
      alignItems: 'start',
      bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#34495e' : '#1976d2'),
      // py: '4px'
    }}>
      <ListColumn columns={orderColumns}/>
      <DragOverlay dropAnimation={customDropAnimation}>
        {!activeDragItemType && null}
        {activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemData}/>}
        {activeDragItemType===ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData}/>}
      </DragOverlay>
    </Box>
    </DndContext>
  )
}

export default BoardContent
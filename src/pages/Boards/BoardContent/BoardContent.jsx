import { DndContext, DragOverlay, MouseSensor, TouchSensor, defaultDropAnimationSideEffects, useSensor, useSensors } from "@dnd-kit/core"
import ListColumn from "./ListColumn/ListColumn"
import {Box} from "@mui/material"
import { mapOrder } from "~/utils/Sorts"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"
import Column from "./ListColumn/Column/Column"
import Card from "./ListColumn/Column/ListCard/Card/Card"
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

  useEffect(()=>{ 
  setOrderColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  },[board])
  const handleDragEnd = (e) => {
      const {active, over} = e
      if(!over) return
      if(active.id != over.id) {
        const oldIndex = orderColumns.findIndex(c => c._id === active.id)
        const newIndex = orderColumns.findIndex(c => c._id === over.id)
        const dnnOrderColumns = arrayMove(orderColumns, oldIndex, newIndex)
        // const dnnOrderColumnsIds = dnnOrderColumns.map(c => c.id)
        setOrderColumns(dnnOrderColumns)
      }
      setActiveDragItemId(null)
      setActiveDragItemType(null)
      setActiveDragItemData(null)
  }
  const handleDragStart = (e) => {
        setActiveDragItemId(e?.active?.id)
        setActiveDragItemType(e?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
        setActiveDragItemData(e?.active?.data?.current)
  }
  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {active: {opacity: '0.5',},},
    }),
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors} onDragStart={handleDragStart}>
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
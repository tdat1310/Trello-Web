import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import ListColumn from "./ListColumn/ListColumn"
import {Box} from "@mui/material"
import { mapOrder } from "~/utils/Sorts"
import { useEffect, useState } from "react"
import { arrayMove } from "@dnd-kit/sortable"

function BoardContent({board}) {
  // const pointerSensor = useSensor(PointerSensor, {activationConstraint: {distance: 10}})
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance: 10}})
  const touchSensor = useSensor(TouchSensor, {activationConstraint: {delay: 250, tolerance: 500}})
  const sensors = useSensors( mouseSensor, touchSensor)
  const [orderColumns, setOrderColumns] = useState([])
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
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
    </Box>
    </DndContext>
  )
}

export default BoardContent
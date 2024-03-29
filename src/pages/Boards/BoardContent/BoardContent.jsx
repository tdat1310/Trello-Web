import ListColumn from "./ListColumn/ListColumn"
import {Box} from "@mui/material"
import { mapOrder } from "~/utils/Sorts"
function BoardContent({board}) {
  const orderColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
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
  )
}

export default BoardContent
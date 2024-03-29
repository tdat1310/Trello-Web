import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
function ListColumn({columns}) {
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
    <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        mb: '5px'
        }}>
          {columns.map(column=><Column key={column._id} column={column}/>)}  
        {/* add new column button */}
        <Box sx={{
          mt: 2,
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          height: 'fit-content',
          bgcolor: '#ffffff3d'
          }}>
          <Button 
          startIcon={<LibraryAddIcon/>}
          sx={{color: "white", border: '1px solid white', p: '5px 10px', width: '100%'}}
          >Add new column</Button>
        </Box>
    </Box>
    </SortableContext>
  )
}

export default ListColumn
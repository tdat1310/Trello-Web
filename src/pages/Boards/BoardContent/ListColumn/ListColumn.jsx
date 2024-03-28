import { Box, Button } from "@mui/material"
import Column from "./Column/Column"
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
function ListColumn() {
  return (
    <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        mb: '5px'
        }}>
            <Column/>
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
  )
}

export default ListColumn
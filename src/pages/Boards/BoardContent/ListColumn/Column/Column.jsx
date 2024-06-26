import { Box, Button, Tooltip, Typography } from "@mui/material"
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import ContentCut from '@mui/icons-material/ContentCut'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContentCopy, ContentPaste } from "@mui/icons-material"
import ArticleIcon from '@mui/icons-material/Article';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListCard from "./ListCard/ListCard"
import { mapOrder } from "~/utils/Sorts"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
function Column({column}) {
    const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({
      id: column._id,
      data: {...column}
    });
    const dndKitColumnStyles = {
       touchAction: 'none',
      transform: CSS.Translate.toString(transform),
      transition,
      height: '100%',
      opacity : isDragging ? 0.5 : undefined
    }; 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };   
    const cardOrders = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
    <Box 
        {...listeners}
        sx={{
          minWidth: '330px',
          maxWidth: '330px',
          mx: 2,
          mt: 2,
          pb: 1,
          borderRadius: '6px',
          bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#333643' : '#ebecf0'),
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
        }}>
       {/* Header box */}
       <Box sx={{
         height : (theme) => theme.trello.BOARD_CONTENT_HEADER,
         display: "flex",
         alignItem: 'center',
         justifyContent: 'space-between',
         p: 2
       }}>
         <Typography sx={{fontWeight: 'bold', cursor: 'pointer', fontSize: '18px'}}>
          {column?.title}
          </Typography>
         <Box>
       <ExpandMoreIcon
       id="basic-button-workspace"
       aria-controls={open ? 'basic-menu-workspace' : undefined}
       aria-haspopup="true"
       aria-expanded={open ? 'true' : undefined}
       onClick={handleClick}
       sx={{cursor: 'pointer'}}
       />
       <Menu
         id="basic-menu-workspace"
         anchorEl={anchorEl}
         open={open}
         onClose={handleClose}
         MenuListProps={{
           'aria-labelledby': 'basic-button-workspace',
         }}
       >
         <MenuItem>
         <ListItemIcon>
           <ArticleIcon fontSize="small" />
         </ListItemIcon>
         <ListItemText>Add new cart</ListItemText>
       </MenuItem>
         <MenuItem>
         <ListItemIcon>
           <ContentCut fontSize="small" />
         </ListItemIcon>
         <ListItemText>Cut</ListItemText>
       </MenuItem>
         <MenuItem>
         <ListItemIcon>
           <ContentCopy fontSize="small" />
         </ListItemIcon>
         <ListItemText>Copy</ListItemText>
       </MenuItem>
         <MenuItem>
         <ListItemIcon>
           <ContentPaste fontSize="small" />
         </ListItemIcon>
         <ListItemText>Paste</ListItemText>
       </MenuItem>
       <Divider />
       <MenuItem>
         <ListItemIcon>
           <DeleteIcon fontSize="small" />
         </ListItemIcon>
         <ListItemText>Remove this column</ListItemText>
       </MenuItem>
       <MenuItem>
         <ListItemIcon>
           <Cloud fontSize="small" />
         </ListItemIcon>
         <ListItemText>Archive this column</ListItemText>
       </MenuItem>
       </Menu>
     </Box>
       </Box>
         <ListCard cards={cardOrders}/>
       {/* Footer box */}
       <Box sx={{
           height : (theme) => theme.trello.BOARD_CONTENT_FOOTER,
           display: "flex",
           alignItem: 'center',
           justifyContent: 'space-between',
           px: 2,
           pt: 1
       }}>
         <Button startIcon={<ArticleIcon/>} sx={{}}>Add new cart</Button>
         <Tooltip title='Drag to move'>
           <DragHandleIcon sx={{cursor: 'pointer', transform: 'translateY(8px)'}}/>
         </Tooltip>
       </Box>
     </Box> 
    </div>
  )
}

export default Column
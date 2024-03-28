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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';
function BoardContent() {
  const BOARD_CONTENT_HEADER = "50px"
  const BOARD_CONTENT_FOOTER = "56px"
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
    sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      display: 'flex',
      alignItems: 'start',
      bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#34495e' : '#1976d2'),
      py: '4px'
    }}>
      <Box sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        mb: '5px'
        }}>
      {/* Box column 1*/}
      <Box sx={{
         minWidth: '330px',
         maxWidth: '330px',
         mx: 2,
         mt: 2,
         borderRadius: '6px',
         bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#333643' : '#ebecf0'),
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}>
        {/* Header box */}
        <Box sx={{
          height : BOARD_CONTENT_HEADER,
          display: "flex",
          alignItem: 'center',
          justifyContent: 'space-between',
          p: 2
        }}>
          <Typography sx={{fontWeight: 'bold', cursor: 'pointer', fontSize: '18px'}}>Column title</Typography>
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
        {/* Content box */}
        <Box sx={{
          display : 'flex',
          flexDirection: 'column',
          gap: 1,
          px: '5px',
          mx: '5px',
          overflowX: 'hidden',
          overflowY: 'auto',
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} -  
            ${BOARD_CONTENT_FOOTER} - ${BOARD_CONTENT_HEADER} - ${theme.spacing(5)})`
        }}>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1711539924834-06816347ff2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent sx={{p: 1.5, '&:last-child':{p: 1.5}}}>
                <Typography>DatDev</Typography>
              </CardContent>
              <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupsIcon/>}>20</Button>
                <Button size="small" startIcon={<QuestionAnswerIcon/>}>15</Button>
                <Button size="small" startIcon={<VisibilityIcon/>}>15</Button>
              </CardActions>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
        </Box>
        {/* Footer box */}
        <Box sx={{
            height : BOARD_CONTENT_FOOTER,
            display: "flex",
            alignItem: 'center',
            justifyContent: 'space-between',
            py: 1,
            px: 2
        }}>
          <Button startIcon={<ArticleIcon/>} sx={{py: 2}}>Add new cart</Button>
          <Tooltip title='Drag to move'>
            <DragHandleIcon sx={{cursor: 'pointer', transform: 'translateY(8px)'}}/>
          </Tooltip>
        </Box>
      </Box>
      {/*  Box column 2 */}
      <Box sx={{
         minWidth: '330px',
         maxWidth: '330px',
         mx: 2,
         mt: 2,
         borderRadius: '6px',
         bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#333643' : '#ebecf0'),
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}>
        {/* Header box */}
        <Box sx={{
          height : BOARD_CONTENT_HEADER,
          display: "flex",
          alignItem: 'center',
          justifyContent: 'space-between',
          p: 2
        }}>
          <Typography sx={{fontWeight: 'bold', cursor: 'pointer', fontSize: '18px'}}>Column title</Typography>
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
        {/* Content box */}
        <Box sx={{
          display : 'flex',
          flexDirection: 'column',
          gap: 1,
          px: '5px',
          mx: '5px',
          overflowX: 'hidden',
          overflowY: 'auto',
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#ced0da",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "white",
          },
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} -  
            ${BOARD_CONTENT_FOOTER} - ${BOARD_CONTENT_HEADER} - ${theme.spacing(5)})`
        }}>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
           }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://images.unsplash.com/photo-1711539924834-06816347ff2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"
              />
              <CardContent sx={{p: 1.5, '&:last-child':{p: 1.5}}}>
                <Typography>DatDev</Typography>
              </CardContent>
              <CardActions sx={{p: '0 4px 8px 4px'}}>
                <Button size="small" startIcon={<GroupsIcon/>}>20</Button>
                <Button size="small" startIcon={<QuestionAnswerIcon/>}>15</Button>
                <Button size="small" startIcon={<VisibilityIcon/>}>15</Button>
              </CardActions>
           </Card>
           <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px rgba(0,0,0,0.2)'
           }}>
            <CardContent sx={{p: 1.5, '&:last-child':{p:1.5}}}>
              <Typography>Card 01</Typography>
            </CardContent>
           </Card>
          
        </Box>
        {/* Footer box */}
        <Box sx={{
            height : BOARD_CONTENT_FOOTER,
            display: "flex",
            alignItem: 'center',
            justifyContent: 'space-between',
            py: 1,
            px: 2
        }}>
          <Button startIcon={<ArticleIcon/>} sx={{py: 2}}>Add new cart</Button>
          <Tooltip title='Drag to move'>
            <DragHandleIcon sx={{cursor: 'pointer', transform: 'translateY(8px)'}}/>
          </Tooltip>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
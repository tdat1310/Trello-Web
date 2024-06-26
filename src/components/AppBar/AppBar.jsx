import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import TrelloIcon from '~/assets/trello.svg?react'
import { SvgIcon, Tooltip, Typography } from '@mui/material';
import WorkSpace from './Menus/WorkSpace';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Template from './Menus/Template';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  const searchValueHandle = (e) => {
       let value = e.substring(0, e.length - 1)
        setSearchValue(value)
  }
  return (
    <Box
    px={2}
    sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#2c3e50' : '#1565c0')
    }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <AppsIcon sx={{color: 'white'}}/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0.7}}>
        <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color : 'white'}}/>
        <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color:'white'}} >Trello</Typography>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
        <WorkSpace/>
        <Recent/>
        <Starred/>
        <Template/>
        <Button variant="outlined" sx={{fontWeight: 'bold', textTransform: 'none', fontSize: '18px', color: 'white', '&&:hover':{border: 'none'}}} startIcon={<NoteAddIcon/>}>Create</Button>
        </Box>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
      <TextField id="outlined-search" label="Search..." type="text" size='small' 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{color: 'white'}}/>
          </InputAdornment>
        ),
        endAdornment: (    
          <CloseIcon fontSize='small' sx={{color: 'white', cursor: 'pointer', display: (searchValue==''?'none':'block')}}
          onClick = {() => searchValueHandle(searchValue)}
          />
        )
      }}
      sx={{
        minWidth: '120px',
        maxWidth: '170px',
        "& label": {color: 'white'},
        "& input": {color: 'white'},
        "& label.Mui-focused": {color: 'white'},
        "& .MuiOutlinedInput-root": {
          "& fieldset": {borderColor: 'white'},
          "&:hover fieldset": {borderColor: 'white'},
          "&.Mui-focused fieldset": {borderColor: 'white'},
        }
      }}
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      />
        <ModeSelect sx={{minWidth: '120px'}}/>
        <Tooltip title="Notifications">
        <Badge color="secondary" variant="dot" 
          sx={{cursor: 'pointer',
                '& .MuiSvgIcon-root': {
                  color: 'white'
                }
              }}>
          <NotificationsNoneIcon />
        </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon 
          sx={{cursor: 'pointer',
              '&.MuiSvgIcon-root': {
                color: 'white'
              }
          }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
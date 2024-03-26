
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect';
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
function AppBar() {
  return (
    <Box
    px={2}
    sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflowX: 'auto'
    }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <AppsIcon sx={{color: 'primary.main'}}/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0.7}}>
        <SvgIcon component={TrelloIcon} inheritViewBox sx={{ color : 'primary.main'}}/>
        <Typography variant='span' sx={{fontSize: '1.2rem', fontWeight: 'bold', color:'primary.main'}} >Trello</Typography>
        </Box>
        <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center'}}>
        <WorkSpace/>
        <Recent/>
        <Starred/>
        <Template/>
        <Button variant="outlined" sx={{fontWeight: 'bold', textTransform: 'none', fontSize: '18px'}} >Create</Button>
        </Box>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
      <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{minWidth: '120px'}}/>
        <ModeSelect sx={{minWidth: '120px'}}/>
        <Tooltip title="Notifications">
        <Badge color="secondary" variant="dot" sx={{cursor: 'pointer'}}>
          <NotificationsNoneIcon />
        </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
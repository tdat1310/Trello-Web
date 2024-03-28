import { Box, Button, Tooltip } from "@mui/material"
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PublicIcon from '@mui/icons-material/Public'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
const ChipStyle = {
      color: 'white',
      bgcolor: 'transparent',
      fontSize: '15px',
      border: 'none',
      padding : '20px 15px',
      borderRadius: '4px',
      '& .MuiSvgIcon-root': {
        color: 'white'
      },
      '&&:hover': {
        bgcolor: 'primary.45'
      },
}
function BoardBar() {
  return (
    <Box
    sx={{
     width: '100%',
     height: (theme) => theme.trello.boardBarHeight,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-between',
     overflowX: 'auto',
     borderBottom: '1px solid white',
     px: 2,
     fontWeight: 'bold',
     bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#34495e' : '#1976d2')
   }}>
    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
    <Chip 
    icon={<DashboardIcon />} 
    label="DatDEV Mern Stack Board"
    variant="outlined" 
    clickable
    sx={ChipStyle}
    />
    <Chip 
    icon={<PublicIcon />} 
    label="Public/Private Workspace"
    variant="outlined" 
    clickable
    sx={ChipStyle}
    />
    <Chip 
    icon={<AddToDriveIcon />} 
    label="Add To Google Drive"
    variant="outlined" 
    clickable
    sx={ChipStyle}
    />
    <Chip 
    icon={<ElectricBoltIcon />} 
    label="Automation"
    variant="outlined" 
    clickable
    sx={ChipStyle}
    />
    <Chip 
    icon={<FilterAltIcon />} 
    label="Filter"
    variant="outlined" 
    clickable
    sx={ChipStyle}
    />
    </Box>
    <Box sx={{display: 'flex', alignItems: 'center', gap: 2,
     '& .MuiAvatar-root': {
        width: '34px',
        height: '34px',
        fontSize: 2,
        cursor: 'pointer'
     }
     }}>
      <Button variant="outlined" 
      sx={{fontWeight: 'bold', textTransform: 'none', fontSize: '18px', color: 'white',
          '&:hover' : {borderColor: 'white'}
      }} startIcon={<PersonAddAltIcon/>}>Invite</Button>
    <AvatarGroup max={5}
    sx={{
      display: "flex",
      alignItems: 'center',
      gap: 2
    }}
    >
      <Tooltip title='DatDEV'>
      <Avatar alt="DatDEV" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1711461752~exp=1711462352~hmac=956a9df5b4795eeeffbf84bc169d57cd9af00ef81813299f52db6f29711a9b82" />
      </Tooltip>
      <Tooltip title='HuyDEV'>
      <Avatar alt="HuyDEV" src="https://img.freepik.com/free-photo/3d-illustration-cute-cartoon-boy-with-backpack-his-back_1142-40542.jpg?t=st=1711461828~exp=1711465428~hmac=e830678e7df85c1ef7f55face8bfcf6a407f1e239cade438a713df9701ba8a61&w=740" />
      </Tooltip>
      <Tooltip title='HungDEV'>
      <Avatar alt="HungDEV" src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1711461918~exp=1711462518~hmac=2ae5030620fdc19affe0f7f9da0f4c94db00a2bd92a6ce5ed0d4d2e973329380" />
      </Tooltip>
      <Tooltip title='TruongDEV'>
      <Avatar alt="TruongDEV" src="https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?t=st=1711461968~exp=1711465568~hmac=a05d1330b3817dc6e438bd9ffc5a4dbbb46717e2c84437586b610fb5f03d5443&w=740" />
      </Tooltip>
    </AvatarGroup>
    </Box>
   </Box>
  )
}

export default BoardBar
import { Box, IconButton, Tooltip } from '@mui/material'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar';
import { Logout, PersonAdd, Settings } from '@mui/icons-material'
function Profile() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <Box>
       <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ padding : 0}}
            aria-controls={open ? 'basic-button-Profile' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqn01HH1Pt7r0icJ8r0r-cmAN1o6490LZQV8ua3EIr4w&s'>M</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          id="basic-menu-Profile"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button-Profile',
          }}
        >
          <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 32, height: 32, mr: 2 }}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 32, height: 32, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Menu>
      </Box>
    );
}

export default Profile
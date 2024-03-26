import {useColorScheme} from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
function ModeSelect() {
    const {Mode, setMode} = useColorScheme();
  
    const handleChange = (event) => {
      const modeValue = event.target.value
      setMode(modeValue);
    };
  
    return (
      <FormControl sx={{minWidth: 120 }} size="small">
        <InputLabel 
        id="label-select-light-dark"
        sx={{
          color: 'white',
          '&.Mui-focused': {
            color: 'white'
          }
        }}
        >Mode</InputLabel>
        <Select
          labelId="label-select-light-dark"
          id="demo-select-small"
          value={Mode}
          label="Mode"
          defaultValue=""
          onChange={handleChange}
          sx={{
            color: 'white',
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white'
            },
            '.MuiSvgIcon-root' : {
              color: 'white'
            }
          }}
        >
          <MenuItem value="light"
          >
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
              <LightModeIcon/> Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeOutlinedIcon/> Dark
          </Box>
          </MenuItem>
          <MenuItem value="system">
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <SettingBrightnessIcon/> System
          </Box>
          </MenuItem>
        </Select>
      </FormControl>
    );
  }

export default ModeSelect
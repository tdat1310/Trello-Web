import { Box } from "@mui/material"
import Card from "./Card/Card"
function ListCard() {
  return (
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
          ${theme.trello.BOARD_CONTENT_FOOTER} - ${theme.trello.BOARD_CONTENT_HEADER} - 
          ${theme.spacing(5)})`
      }}>
        <Card/>
      </Box>
  )
}

export default ListCard
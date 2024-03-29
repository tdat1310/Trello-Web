import { Box } from "@mui/material"
import Card from "./Card/Card"
function ListCard({cards}) {
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
          ${theme.trello.boardContentHeader} - ${theme.trello.boardContentFooter} - 
          ${theme.spacing(6)})`
      }}>
        {cards.map((card)=>( <Card key={card._id} card={card}/>))}
      </Box>
  )
}

export default ListCard
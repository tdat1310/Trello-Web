import { Box } from "@mui/material"
import Card from "./Card/Card"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
function ListCard({cards}) {
  return (
    <SortableContext  items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
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
    </SortableContext>
  )
}

export default ListCard
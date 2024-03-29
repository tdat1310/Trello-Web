import {Button, Card as MuiCard, Typography} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Card({card}) {
  const showCardAction = () => {
      return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (
    <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
     }}>
        {card?.cover && 
        <CardMedia sx={{ height: 140 }} image={card?.cover} title="green iguana"/>
        }
        <CardContent sx={{p: 1.5, '&:last-child':{p: 1.5}}}>
          <Typography>{card?.title}</Typography>
        </CardContent>
        {showCardAction() && 
        <CardActions sx={{p: '0 4px 8px 4px'}}>
          {!!card?.memberIds?.length && <Button size="small" startIcon={<GroupsIcon/>}
          >{card?.memberIds?.length}</Button>}
          {!!card?.comments?.length && <Button size="small" startIcon={<QuestionAnswerIcon/>}
          >{card?.comments?.length}</Button>}
          {!!card?.attachments?.length && <Button size="small" startIcon={<VisibilityIcon/>}>{card?.attachments?.length}</Button>}
        </CardActions>
        }
     </MuiCard>
  )
}

export default Card
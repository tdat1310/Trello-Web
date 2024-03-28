import {Button, Card as MuiCard, Typography} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VisibilityIcon from '@mui/icons-material/Visibility';
function Card() {
  return (
    <MuiCard sx={{
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
     </MuiCard>
  )
}

export default Card
import React from "react"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardCompo= ({title,details})=>{
  return (<>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {title}        
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {details}
      </Typography>
    </CardContent>
  </>)
}

export default CardCompo
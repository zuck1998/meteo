import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { style } from '@mui/system';




const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MyCard({name, icon, localtime, stato,zona} ) {
  const [expanded, setExpanded] = React.useState(false);
console.log(zona);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={name}
        subheader={localtime}
      />
      <CardMedia
        component="img"
        height="194"
        image={icon}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {stato}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Giorni Successivi</Typography>
          {zona.forecast.forecastday.map((item) => {
              console.log(item.date)
              return (
            <div>
                <CardHeader
                title={item.date}
                
              />
              <CardMedia
                component="img"
                height="194"
                image={item.day.condition.icon}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.day.condition.text}
                </Typography>
              </CardContent>
            </div>
              )
            })}
        </CardContent>
      </Collapse>
    </Card>
  );
}


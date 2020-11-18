import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import aman from './aman.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="aman chopra"
          height="175"
          src={aman}
          title="aman chopra"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Aman Chopra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            He is in 2nd year. A frontend developer , cloud computing skilled (AWS) knows devOps git etc etc hhhjdvbbvjh jvbjbxccbj cvbvjxbjvx xcjbvxhzb nxcjvbjhxb jx kjijxcb jxbjiuxhbi xc b jkcxib pxic 
            lorem
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

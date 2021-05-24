import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 300
  },
  media: {
    height: 400
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));


export default function Show(props) {
  const selectedShow = props.selectedShow
  const handlePreviousClick = () => {
    if (selectedShow > 0)
      props.setSelectedShow(selectedShow - 1)
  }
  
  const handleNextClick = () => {
    if (selectedShow < props.numShows - 1)
      props.setSelectedShow(selectedShow + 1)
  }

  const classes = useStyles()

  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.product_image_url}
            title={props.title}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Episodes: {props.episodes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handlePreviousClick}>
            Previous
          </Button>
          <Button size="small" color="primary" onClick={handleNextClick}>
            Next
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

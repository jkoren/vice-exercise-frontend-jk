import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 400
  },
  media: {
    height: 550
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));


export default function Show(props) {
  const show = props.show
  const title = show.title
  const episodes = show.episodes
  const product_image_url = show.product_image_url
  const selectedShow = props.selectedShow
  const numShows = props.numShows

  const handlePreviousClick = () => {
    if (selectedShow > 0)
      props.setSelectedShow(selectedShow - 1)
  }
  
  const handleNextClick = () => {
    if (selectedShow < numShows - 1)
      props.setSelectedShow(selectedShow + 1)
  }

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product_image_url}
          title={title}
          />
        <CardContent>
          <Typography  align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            Episodes: {episodes}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Box p={2} display="flex" justifyContent="center">
        <Button size="small" color="primary" onClick={handlePreviousClick} align="left">
          Previous
          {/* <ArrowBackIosIcon/> */}
        </Button>
        <Button size="small" color="primary" onClick={handleNextClick} align="right">
          Next
        </Button>
      </Box>

    </Card>
  )
}

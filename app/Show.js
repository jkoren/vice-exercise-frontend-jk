import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 250
  },
  media: {
    height: 350
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

      <Box display="flex" justifyContent="center">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Button href={props.prevShowUrl} size="small" color="primary" align="left">
          Previous
        </Button>

        <Button href={props.nextShowUrl} size="small" color="primary" align="right">
          Next
        </Button>
      </Box>

    </Card>
  )
}

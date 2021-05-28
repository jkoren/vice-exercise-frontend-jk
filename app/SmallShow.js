import React from "react";
import Grid from '@material-ui/core/Grid';

export default function SmallShow(props) {
  const show = props.show
  const product_image_url = show.product_image_url
  const border = props.selected ? 5 : 1

  const handleClick = () => {
    props.setSelectedShow(props.index)
  }

  return (
    <Grid item>
      <img src={product_image_url} height="80" border={border} onClick={handleClick}/>
    </Grid>
  )
}

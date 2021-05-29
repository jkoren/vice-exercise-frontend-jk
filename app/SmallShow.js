import React from "react";
import Grid from '@material-ui/core/Grid';

export default function SmallShow(props) {
  const show = props.show
  const productImageUrl = show.product_image_url
  const border = props.selected ? 5 : 0
  const showUrl = "/?id="+show.id

  return (
    <Grid item>
      <a href={showUrl}>
        <img src={productImageUrl} height="80" border={border}/>
      </a>
    </Grid>
  )
}

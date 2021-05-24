import { Typography } from '@material-ui/core'
import React, { useState, useEffect} from 'react'
import Show from "./Show"
import Grid from '@material-ui/core/Grid';

export const Main = (props) => {

const [shows, setShows] = useState([])

  const fetchShows = () => {
    const apiURL = 'http://localhost:3000/shows';
    fetch(apiURL, {credentials: "same-origin"})
    .then(function(response){
      if (response.ok) {
        return response.json();
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw (error);
      }
    })
    .then((shows)=> {
      setShows(shows)
      console.log("shows")
      console.log(shows)
    })
    .catch((error) => console.error(`Error in Main.js fetch (GET):fetchShows ${error.message}`))
  }

  useEffect(() => {
    fetchShows()
  }, [])

const showtiles =  
  shows.map(show => {
    return (
      <Show 
        id={show.id}
        episodes={show.episodes}
        product_image_url={show.product_image_url}
      />
    )
  })

  return (
    <div>
      <Typography>
        Vice shows
      </Typography>
        <Grid container spacing={3}>
          {showtiles}
        </Grid>
    </div>
  )
}


export default Main
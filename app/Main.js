import { Typography } from '@material-ui/core'
import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import Grid from '@material-ui/core/Grid';

export const Main = (props) => {

const [shows, setShows] = useState([])
const [selectedShow, setSelectedShow] = useState(0)

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
  })
  .catch((error) => console.error(`Error in Main.js fetch (GET):fetchShows ${error.message}`))
}

useEffect(() => {
  fetchShows()
}, [])

// const showtiles =  
// shows.map(show => {
//   return (
//     <Show 
//     id={show.id}
//     episodes={show.episodes}
//     product_image_url={show.product_image_url}
//     />
//     )
//   })
  
  const showsFetched = (shows.length > 0)
  // console.log("shows.length")
  // console.log(shows.length)
  // console.log("showsFetched")
  // console.log(showsFetched)
  const showtile = 
    !showsFetched ? "" :
    <Show
      id={shows[selectedShow].id}
      episodes={shows[selectedShow].episodes}
      product_image_url={shows[selectedShow].product_image_url}
      selectedShow={selectedShow}
      setSelectedShow={setSelectedShow}
      numShows={shows.length}
    />

  return (
    <div>
      <header>
        <AppBar />
      </header>

        <Grid container spacing={3}>
          {/* {showtiles} */}
          {showtile}
        </Grid>

      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}


export default Main
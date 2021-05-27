import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import SideShow from "./SideShow"
import Helloworld from "./Helloworld"
// import { Typography } from '@material-ui/core'
// import Grid from '@material-ui/core/Grid';

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

  const showsFetched = (shows.length > 0)
  const show = shows[selectedShow]

  const leftShowIndex = (selectedShow == 0 ? null : selectedShow - 1)
  const rightShowIndex = (selectedShow == shows.length ? null : selectedShow + 1)
  const leftShow = leftShowIndex != null ? shows[leftShowIndex] : null 
  const rightShow = rightShowIndex != null ? shows[rightShowIndex] : null

  const showtile = !showsFetched ? "" :
    <Show
      show={show}
      selectedShow={selectedShow}
      setSelectedShow={setSelectedShow}
      numShows={shows.length}
    />

  const rightShowtile = 
    !showsFetched || !rightShow ? "" :
    <SideShow
      show={rightShow}
      selectedShow={rightShowIndex}
      numShows={shows.length}
    />

  const leftShowtile = !showsFetched || !leftShow ? "" :
    <SideShow
      show={leftShow}
      selectedShow={leftShowIndex}
      numShows={shows.length}
    />

  return (
    <div>
      <header>
        <AppBar />
      </header>

      {/* <Grid container spacing={3}>
        <Grid item xs={4}>
          {leftShowtile}
        </Grid>
        <Grid item xs={4}>
          {showtile}
        </Grid>
        <Grid item xs={4}>
          {rightShowtile}
        </Grid>
      </Grid> */}
<Helloworld />
      {showtile}

      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}

export default Main
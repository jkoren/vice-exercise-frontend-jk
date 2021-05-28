import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SmallShow from './SmallShow';

export const Main = (props) => {
  const [shows, setShows] = useState([])
  const [selectedShow, setSelectedShow] = useState(0)

  const fetchShows = () => {
    const apiURL = `http://localhost:3000/shows`;
    fetch(apiURL, 
      {credentials: "same-origin"
    }) .then(function(response){
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
  
  const showtile = !showsFetched ? "" :
    <Show
      show={show}
      selectedShow={selectedShow}
      setSelectedShow={setSelectedShow}
      numShows={shows.length}
    />
  
  const startShow = showsFetched ? Math.max(0, selectedShow - 2) : null
  const endShow = showsFetched ? Math.min(selectedShow + 2, shows.length - 1) : null

  const showTiles = !showsFetched ? "" :
    shows.map((show, index) =>
      (index >= startShow && index <= endShow) ?
      <SmallShow 
        key={show.id} 
        show={show} 
        selected={index==selectedShow}
      />
      :
      ""
    )

  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Box p={2} display="flex" justifyContent="center">
        <Grid container spacing={1} justify="center">
          {showTiles}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        {showtile}
      </Box>

      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}

export default Main
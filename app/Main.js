import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import SmallShow from './SmallShow';

export const Main = () => {
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
  
  // show 5 shows
  const numShows = showsFetched ? shows.length : 0
  const lowEnd = [0,1].includes(selectedShow)
  const highEnd = [numShows - 2, numShows - 1].includes(selectedShow)
  const startShow = lowEnd ? 0 : (highEnd ? numShows - 5 : selectedShow - 2)
  const endShow = lowEnd ? 4 : (highEnd ? numShows - 1 : selectedShow + 2)

  const showTiles = !showsFetched ? "" :
    shows.map((show, index) =>
      (index >= startShow && index <= endShow) ?
      <SmallShow 
        key={show.id} 
        show={show} 
        index={index}
        selected={index==selectedShow}
        setSelectedShow={setSelectedShow}
      />
      :
      ""
    )

  return (
    <div>
      <header>
        <AppBar />
      </header>

      <Hidden smDown>
        <Box p={2} display="flex" justifyContent="center">
          <Grid container spacing={1} justify="center" >
            {showTiles}
          </Grid>
        </Box>
      </Hidden>

      <Box p={1} display="flex" justifyContent="center">
        {showtile}
      </Box>

      <Hidden mdUp>
        <Box p={2} display="flex" justifyContent="center">
          <Grid container spacing={1} justify="center" >
            {showTiles}
          </Grid>
        </Box>
      </Hidden>

      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}

export default Main
import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import SmallShow from './SmallShow'
import PropTypes from 'prop-types'

export const Main = (props) => {
  const [shows, setShows] = useState([])
  const [selectedShow, setSelectedShow] = useState(0)

  const apiURL = "http://localhost:3000/shows"

  const fetchShows = () => {
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
      const urlShowIndex = shows.map(object => object.id).indexOf(props.showId) // update show from URL query sring if included
      setSelectedShow(urlShowIndex == -1 ? 0 : urlShowIndex)
    })
    .catch((error) => console.error(`Error in Main.js fetch (GET):fetchShows ${error.message}`))
  }

  useEffect(() => {
    fetchShows()
  }, [])

  const showsFetched = (shows.length > 0)
  const show = shows[selectedShow]

  const prevShowIndex = selectedShow == 0 ? 0 : selectedShow - 1
  const lastShowIndex = shows.length - 1
  const nextShowIndex = selectedShow == lastShowIndex ? lastShowIndex : selectedShow + 1

  const myUrl = document.location.href.split('?')[0]  // if there is a query string in the URL, remove it
  const prevShowUrl = showsFetched ? myUrl + "?id=" + shows[prevShowIndex].id : ""
  const nextShowUrl = showsFetched ? myUrl + "?id=" + shows[nextShowIndex].id : ""

  const showtile = !showsFetched ? "" :
    <Show
      show={show}
      setSelectedShow={setSelectedShow}
      numShows={shows.length}
      prevShowUrl={prevShowUrl}
      nextShowUrl={nextShowUrl}
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
        selected={index == selectedShow}
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

      <Hidden only={['xs', 'sm']}>
        <Box p={2} display="flex" justifyContent="center">
          <Grid container spacing={1} justify="center" >
            {showTiles}
          </Grid>
        </Box>
      </Hidden>

      <Box p={1} display="flex" justifyContent="center">
        {showtile}
      </Box>

      <Hidden only={['md', 'lg', 'xl']}>
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
Main.propTypes = {
  showId: PropTypes.string.isRequired
}

export default Main
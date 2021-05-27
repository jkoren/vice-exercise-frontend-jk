import React, { useState, useEffect} from 'react'
import AppBar from "./AppBar"
import FooterBar from "./FooterBar"
import Show from "./Show"
import Box from "@material-ui/core/Box";

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

  const showtile = !showsFetched ? "" :
    <Show
      show={show}
      selectedShow={selectedShow}
      setSelectedShow={setSelectedShow}
      numShows={shows.length}
    />

  return (
    <div>
      <header>
        <AppBar />
      </header>

      <Box p={2} display="flex" justifyContent="center">
        {showtile}
      </Box>

      <footer>
        <FooterBar />
      </footer>
    </div>
  )
}

export default Main
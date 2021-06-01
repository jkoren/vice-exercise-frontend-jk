import React from "react"
import ReactDOM from "react-dom"
import Show from '../Show'
function returnInput(inputString) {
  return inputString+"!"
}

it("renders without crashing",() => {
  const div = document.createElement("div")
  const testshow = 
  {
    id: "a1",
    product_image_url: "test.com"
  }
  const prevShowUrl = "prevshowurl.com"
  const nextShowUrl = "nextshowurl.com"

  ReactDOM.render(
    <Show
      show={testshow}
      setSelectedShow={returnInput()}
      numShows={5}
      prevShowUrl={prevShowUrl}
      nextShowUrl={nextShowUrl}
    />
    , div)
})

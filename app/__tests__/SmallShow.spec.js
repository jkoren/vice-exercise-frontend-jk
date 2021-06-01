import React from "react"
import ReactDOM from "react-dom"
import SmallShow from '../SmallShow'

function returnInput(inputString) {
  return inputString+"!"
}

describe("testing a jest test", () => {
  test("it should return the input", () => {
    const input = "React rocks"
    const expectedOutput = "React rocks!"
    expect(returnInput(input)).toEqual(expectedOutput)
  })
})

// React unit testing with Jest & React-testing-library
// https://www.youtube.com/watch?v=3e1GHCA3GP0
// 10 minutes 20 seconds

it("renders without crashing",() => {
  const div = document.createElement("div")
  const testshow = 
  {
    id: "a1",
    product_image_url: "test.com"
  }
  ReactDOM.render(
    <SmallShow
      key={1}
      show={testshow}
      index={1}
      selected={false}
      setSelectedShow={returnInput()}
    />
    , div)
})

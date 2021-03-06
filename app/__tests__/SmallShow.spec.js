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

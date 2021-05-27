test('test', () => {
  expect(true).toBe(true)
})

import React from 'react'
import {render, screen, cleanup} from '@testing-library/react'
import Helloworld from '../Helloworld'

test('should render hello world component', () => {
  render(<Helloworld/>)  // something wrong with the render
  const todoElement = screen.getByTestId('')
  expect(todoElement).toBeInTheDocument()
  }
)
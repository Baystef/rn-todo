import * as React from "react"
import { render, screen } from "@testing-library/react-native"
import TodoList from "../TodoList"
import { todos } from "../../constants/todos"

it(`renders Input Label`, () => {
  render(<TodoList todos={todos} />)

  expect(screen.getByText("Todo List")).toBeTruthy()
})

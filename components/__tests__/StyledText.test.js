import * as React from "react"
import renderer from "react-test-renderer"
import { render, screen } from "@testing-library/react-native"

import { MonoText } from "../StyledText"

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON()
  render(<MonoText>Snapshot test!</MonoText>)
  expect(tree).toMatchSnapshot()
  expect(tree.children).toHaveLength(1)
  expect(screen.getByText("Snapshot test!")).toBeTruthy()
})

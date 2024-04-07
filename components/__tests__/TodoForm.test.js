import * as React from 'react';
import { render, screen } from "@testing-library/react-native";

import TodoForm from '../TodoForm';

it(`renders Input Label`, () => {
  render(<TodoForm />);

  expect(screen.getByText('What Todo?')).toBeTruthy();
  expect(screen.getByText('Add')).toBeTruthy();
});
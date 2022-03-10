import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ColorButton from './ColorButton';
import CamelCaseColorButton from './CamelCaseColorButton';
import {replaceCamelWithSpaces} from './CamelCaseColorButton';

test('button has correct initial color and text', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name:'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
});

test('button turns blue when clicked', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name:'Change to blue'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial checkbox conditions', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
})

test('button disabled when checked', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
})

test('button disabled when checked and button is blue', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  fireEvent.click(colorButton);
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
})

test('button enabled when checked twice', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});
})

test('button disabled when checked twice and button is blue', () => {
  render(<ColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  fireEvent.click(colorButton);
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
})

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  });
});

// camelCase button component testing:

test('button has correct initial color and text: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
});

test('button turns MidnightBlue when clicked: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial checkbox conditions: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
})

test('button disabled when checked: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
})

test('button disabled when checked and button is blue: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  fireEvent.click(colorButton);
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
})

test('button enabled when checked twice: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
})

test('button disabled when checked twice and button is blue: camelCase', () => {
  render(<CamelCaseColorButton />)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  fireEvent.click(colorButton);
  const checkbox = screen.getByRole('checkbox', {label:'checkbox'});
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
})


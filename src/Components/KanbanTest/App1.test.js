import React from 'react';
import { render, screen } from '@testing-library/react';
import App1 from './App1';

describe('App1', () => {
  test('renders columns', () => {
    const { getByTestId } = render(<App1 />);
    const draggable = getByTestId('draggable-1');
    const box = getByTestId('box-1');
    expect(draggable).toBeInTheDocument();
    expect(box).toBeInTheDocument();
  });
});

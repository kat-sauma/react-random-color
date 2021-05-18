import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorGenerator from './ColorGenerator';

describe('Color Generator', () => {
  it('generates a color', async () => {
    render(<ColorGenerator />);

    const color = screen.findByRole('ul', { name: 'color' });
    expect(color).toMatchInlineSnapshot(`Promise {}`);
  });
});

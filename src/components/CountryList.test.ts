import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import React from 'react';
import CountryList from './CountryList';


describe('CountryList', () => {
  it('renders a list of countries', () => {
    render(React.createElement(CountryList));
    expect(screen.findByText('United States'));
    expect(screen.findByText('Canada'));
    expect(screen.findByText('Japan'));
  });
});

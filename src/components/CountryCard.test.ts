import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import CountryCard from './CountryCard';
import { Country } from '../types/country';

const mockCountry: Partial<Country> = {
  name: {
    common: 'Test Country',
    official: '',
    nativeName: {}
  },
  flag: '🇺🇸',
};

describe('CountryCard Component', () => {
  it('should render the country name and flag', () => {
    render(React.createElement(CountryCard, { country: mockCountry, onClick: () => {} }));
    const nameElement = screen.getByText(/Test Country/i);
    const flagElement = screen.getByAltText(/🇺🇸/i);

    expect(nameElement).toBeInTheDocument();
    expect(flagElement).toBeInTheDocument();
  });

  //need to refactor this to respect the modal when that is implemented
  it('should call onClick handler when clicked', () => {
    let clicked = false;
    render(React.createElement(CountryCard, { country: mockCountry, onClick: () => {
        clicked = true;
    } }));
    const cardElement = screen.getByText(/Test Country/i).closest('div');
    fireEvent.click(cardElement as Element);
    const modalElement = screen.getByTestId('modal-element-test-id'); // replace with actual test id
    expect(modalElement).toBeInTheDocument();
  });
});

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import CountryCard from './CountryCard';
import { Country } from '../types/country';

const mockCountry: Partial<Country> = {
  name: {
    common: 'Test Country',
    official: '',
    nativeName: {
      eng: {
        official: '',
        common: ''
      }
    },
  },
  flag: '🇺🇸', 
  subregion: 'Test Subregion',
  timezones: ['UTC+0'],
  currencies: {
    TEST: {
      name: 'Test Currency',
      symbol: '$'
    }
  },
  languages: {
    test: 'Test Language'
  },
  borders: ['ABC', 'DEF']
};

describe('CountryCard Component', () => {
  it('should render the country name and flag', () => {
    render(React.createElement(CountryCard, { country: mockCountry as Country, onClick: () => {} }));
    const nameElement = screen.getByText(/Test Country/i);
    const flagElement = screen.getByText(/🇺🇸/i);

    expect(nameElement).toBeInTheDocument();
    expect(flagElement).toBeInTheDocument();
  });

  it('should open the modal when clicked', () => {
    const onClick = vi.fn();
    render(React.createElement(CountryCard, { country: mockCountry as Country, onClick: onClick }));
    const cardElement = screen.getByTestId(/card-element-test-id/i);
    fireEvent.click(cardElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

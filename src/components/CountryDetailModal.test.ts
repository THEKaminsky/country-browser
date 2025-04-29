import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Country } from '../types/country';
import CountryDetailModal from './CountryDetailModal'; // Adjust path as necessary

// Mock data for the test
const mockCountryDetails: Partial<Country> = {
  name: {
    common: 'Test Country',
    nativeName: {
      common: 'Test Native Name',
      official: 'Testland',
    },
  },
  flag: '🇺🇸',
  subregion: 'Test Subregion',
  timezones: ['UTC+1', 'UTC+2'],
  currencies: {
    TST: { name: 'Test Dollar' },
  },
  languages: {
    eng: 'English',
    tst: 'Testish',
  },
  borders: ['Neighbor 1', 'Neighbor 2'],
};

describe('CountryDetailModal Component', () => {
  it('should render detailed country information correctly', () => {
    render(React.createElement(CountryDetailModal {country={mockCountryDetails}}));

    expect(screen.getByText(/Test Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Testland/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Capital/i)).toBeInTheDocument();
    expect(screen.getByText(/Population:/i)).toBeInTheDocument();
    expect(screen.getByText(/1,000,000/i)).toBeInTheDocument(); // Adjust format if necessary
    expect(screen.getByText(/🇺🇸/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Subregion/i)).toBeInTheDocument();
    expect(screen.getByText(/UTC\+1/i)).toBeInTheDocument();
    expect(screen.getByText(/UTC\+2/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Dollar/i)).toBeInTheDocument();
    expect(screen.getByText(/English/i)).toBeInTheDocument();
    expect(screen.getByText(/Testish/i)).toBeInTheDocument();
    expect(screen.getByText(/Neighbor 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Neighbor 2/i)).toBeInTheDocument();
  });

  it('should not render when isOpen is false', () => {
    render(<CountryDetailModal country={mockCountryDetails} isOpen={false} />);
    
    expect(screen.queryByText(/Test Country/i)).not.toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    render(<CountryDetailModal country={mockCountryDetails} isOpen={true} />);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    expect(screen.queryByText(/Test Country/i)).not.toBeInTheDocument();
  });
});
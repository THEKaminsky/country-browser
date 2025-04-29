import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { Country } from '../types/country';
import CountryDetailModal from './CountryDetailModal';

const mockCountryDetails: Partial<Country> = {
  name: {
    common: 'Test Country',
    official: 'Test Official',
    nativeName: {
      official: 'Test Native Name Official',
      common: 'Test Native Name Common',
    },
  },
  capital: ['Test Capital'],
  population: 1000000,
  flag: '🇺🇸',
  subregion: 'Test Subregion',
  timezones: ['UTC+1', 'UTC+2'],
  currencies: {
    TST: { name: 'Test Dollar', symbol: '$' },
  },
  languages: {
    eng: 'English',
    tst: 'Testish',
  },
  borders: ['Neighbor 1', 'Neighbor 2'],
};

describe('CountryDetailModal Component', () => {
  it('should render detailed country information correctly', () => {
    const onClose = vi.fn();
    render(React.createElement(CountryDetailModal, { country: mockCountryDetails, onClose: onClose }));

    expect(screen.getByText(/Test Country/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Official/i)).toBeInTheDocument();
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

  it('should not render when no country is provided', () => {
    const onClose = vi.fn();
    render(React.createElement(CountryDetailModal, { country: null as unknown as Partial<Country>, onClose: onClose }));
    expect(screen.queryByTestId(/modal-element-test-id/i)).not.toBeInTheDocument();
  });

  it('should close the modal when the close button is clicked', () => {
    const onClose = vi.fn();
    render(React.createElement(CountryDetailModal, { country: mockCountryDetails, onClose: onClose }));
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

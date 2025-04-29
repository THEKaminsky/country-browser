import React, { useEffect, useRef } from 'react';
import { Country } from '../types/country';

interface CountryDetailModalProps {
  country: Partial<Country>;
  onClose: () => void;
}

type NativeName = {
  official: string;
  common: string;
}

const CountryDetailModal: React.FC<CountryDetailModalProps> = ({ country, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!country) return null;

  return (
    <div data-testid="modal-element-test-id" className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={onClose}>
      <div ref={modalRef} className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3 p-6" onClick={(e) => e.stopPropagation()}>
        <button className="float-right text-gray-500 hover:text-black" onClick={onClose}>
          Close X
        </button>
        <div className="flex flex-col items-start justify-space-between">
          <h2 className="text-xl md:text-2xl font-bold pb-2 md:pb-4">{(country.name?.common && country.flag) ? `${country.name?.common} ${country.flag}` : 'No common name available'}</h2>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Official Name: {country.name?.official ? `${country.name?.official}` : 'No native official name available'}</p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Subregion: {country.subregion ?? 'No subregion available'}</p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Timezones: {country.timezones?.join(', ') ?? 'No timezones available'}</p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Currencies: {country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'No currencies available'}</p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Languages: {country.languages ? Object.values(country.languages).join(', ') : 'No languages available'}</p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">
              Native Names:{' '}
              {country.name?.nativeName ? (
                <ul className="list-disc list-inside">
                  {Object.entries(country.name.nativeName).map(([lang, nativeName]: [string, NativeName]) => (
                    <li key={lang}>
                      {lang}: {nativeName.official ?? 'No official name available'} ({nativeName.common ?? 'No common name available'})
                    </li>
                  ))}
                </ul>
              ) : (
                'No native names available'
              )}
            </p>
          <p className="pb-1 md:pb-2 text-sm md:text-base">Borders: {country.borders?.join(', ') ?? 'No borders available'}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailModal;

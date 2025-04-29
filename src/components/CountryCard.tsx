import { useState } from 'react';
import { Country } from '../types/country';

interface CountryCardProps {
    country: Partial<Country>;
    onClick: () => void;
}

const CountryCard = ({ country }: CountryCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mt-4 p-2 border border-gray-200 rounded-md shadow-sm hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
            <h2>{country.name?.common} {country.flag}</h2>
        </div>
    );
};

export default CountryCard;
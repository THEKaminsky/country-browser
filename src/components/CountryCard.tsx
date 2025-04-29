import { Country } from '../types/country';

interface CountryCardProps {
    country: Partial<Country>;
    onClick: () => void;
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
    return (
        <div data-testid="card-element-test-id" className="mt-4 p-2 border border-gray-200 rounded-md shadow-sm hover:bg-gray-100" onClick={() => onClick()}>
            <h2>{country.name?.common} {country.flag}</h2>
        </div>
    );
};

export default CountryCard;
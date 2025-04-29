import { Country } from '../types/country';

interface CountryCardProps {
    country: Partial<Country>;
    onClick: () => void;
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
    return (
        <div data-testid="card-element-test-id" className="mt-4 p-2 border border-gray-200 rounded-md shadow-sm hover:bg-gray-100" onClick={() => onClick()}>
            <h2 className="flex flex-row justify-between py-1 text-md font-bold">
              <span>{country.name?.common} {country.flag}</span>
              <span>{country.region}</span>
            </h2>
            <p className="text-sm">Capital: {country.capital?.[0]}</p>
            <p className="text-sm">Pop:{country.population}</p>
        </div>
    );
};

export default CountryCard;
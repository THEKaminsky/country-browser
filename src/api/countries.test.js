import { expect, describe, it } from 'vitest';
import getCountries from './countries';

describe('Countries API', () => {
  it('should fetch data correctly from the REST Countries API', async () => {
    const countries = await getCountries();
    expect(Array.isArray(countries)).toBe(true);
  });
});
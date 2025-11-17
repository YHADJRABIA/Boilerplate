import { capitaliseFirstLetter } from "./string";

describe('capitaliseFirstLetter', () => {
  it('capitalises the first letter of a lowercase word', () => {
    expect(capitaliseFirstLetter('hello')).toBe('Hello');
  });

  it('returns the same string if first letter is already capitalised', () => {
    expect(capitaliseFirstLetter('Hello')).toBe('Hello');
  });

  it('works with a single character', () => {
    expect(capitaliseFirstLetter('h')).toBe('H');
  });

  it('returns empty string when given empty string', () => {
    expect(capitaliseFirstLetter('')).toBe('');
  });

  it('does not modify the rest of the string', () => {
    expect(capitaliseFirstLetter('hELLO')).toBe('HELLO');
  });

  it('handles strings starting with non-letters', () => {
    expect(capitaliseFirstLetter('1test')).toBe('1test');
    expect(capitaliseFirstLetter('-abc')).toBe('-abc');
  });
});
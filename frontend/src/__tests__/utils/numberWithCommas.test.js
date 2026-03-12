import { numberWithCommas } from '../../Component/DetailView/DetailBanner';

describe('numberWithCommas Utility Function', () => {
  test('formats positive numbers with commas', () => {
    expect(numberWithCommas(1000000)).toBe('1,000,000');
  });

  test('formats zero', () => {
    expect(numberWithCommas(0)).toBe('0');
  });

  test('formats small numbers', () => {
    expect(numberWithCommas(100)).toBe('100');
  });

  test('formats numbers with thousands', () => {
    expect(numberWithCommas(10000)).toBe('10,000');
  });

  test('formats large numbers', () => {
    expect(numberWithCommas(100000000)).toBe('100,000,000');
  });
});

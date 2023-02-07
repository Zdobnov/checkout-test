import { chartDataFormatter } from './dataFormatter';

describe('chartDataFormatter', () => {
  test('returns initial array with empty data argument', () => {
    const data = [];
    const result = [{
      counter: 0,
      rate: 1,
    }, {
      counter: 0,
      rate: 2,
    }, {
      counter: 0,
      rate: 3,
    }, {
      counter: 0,
      rate: 4,
    }, {
      counter: 0,
      rate: 5,
    }];

    expect(chartDataFormatter(data)).toStrictEqual(result);
  });

  test('returns updated array with new counter value for every rate', () => {
    const data = [{
      rate: 2,
    }, {
      rate: 3,
    }, {
      rate: 3,
    }, {
      rate: 2,
    }, {
      rate: 3,
    }];

    const result = [{
      counter: 0,
      rate: 1,
    }, {
      counter: 2,
      rate: 2,
    }, {
      counter: 3,
      rate: 3,
    }, {
      counter: 0,
      rate: 4,
    }, {
      counter: 0,
      rate: 5,
    }];

    expect(chartDataFormatter(data)).toStrictEqual(result);
  });
});
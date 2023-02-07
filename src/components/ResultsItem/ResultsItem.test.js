import moment from 'moment/moment';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ResultsItem from './ResultsItem';

const mockedDate = '18 April 2023, 12:00:00';

jest.mock('moment/moment', () => {
  const mockMoment = () => {
    return {
      format: () => mockedDate,
    };
  };
  return mockMoment;
});

describe('ResultsItem', () => {
  afterEach(cleanup);

  const item = {
    name: 'John Brown',
    date: '2023-04-18T12:00:00Z',
    email: 'john.brown@example.com',
    rate: 5,
    message: 'This is a test message',
  };

  it('renders correctly', () => {
    const { getByText } = render(
      <ResultsItem
        item={item}
      />
    );

    expect(getByText(item.name)).toBeInTheDocument();
    expect(getByText(mockedDate)).toBeInTheDocument();
    expect(getByText(item.email)).toBeInTheDocument();
    expect(getByText(item.rate)).toBeInTheDocument();
    expect(getByText(item.message)).toBeInTheDocument();
  });
});
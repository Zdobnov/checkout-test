import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter  } from 'react-router-dom';
import { FeedbackListContext } from '../../state/context';

import Results from './Results';

jest.mock('../../components/Chart/Chart', () => () => <div>Chart component</div>);
jest.mock('../../components/ResultsItem/ResultsItem', () => ({ item }) => <li>{item.name}</li>);

describe('Results', () => {
  afterEach(cleanup);

  const feedbacks = [
    { id: 1, name: 'John Brown', date: '2022-12-25T12:00:00Z', email: 'john.brown@example.com', rate: 5, message: 'This is a test message' },
    { id: 2, name: 'Jane Brown', date: '2022-12-26T12:00:00Z', email: 'jane.brown@example.com', rate: 4, message: 'This is another test message' },
  ];

  it('renders correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <FeedbackListContext.Provider value={{ feedbacks }}>
          <Results />
        </FeedbackListContext.Provider>
      </MemoryRouter >
    );

    expect(getByText('Feedback Results')).toBeInTheDocument();
    expect(getByText('Back')).toBeInTheDocument();
    expect(getByText('Chart component')).toBeInTheDocument();
    expect(getByText('Latest Comments')).toBeInTheDocument();
    expect(getByText(feedbacks[0].name)).toBeInTheDocument();
    expect(getByText(feedbacks[1].name)).toBeInTheDocument();
  });

  it('renders the feedbacks in reversed order', () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <FeedbackListContext.Provider value={{ feedbacks }}>
          <Results />
        </FeedbackListContext.Provider>
      </MemoryRouter>
    );
  
    const feedbackElements = getAllByRole('listitem');
    const feedbackNames = feedbackElements.map(el => el.textContent);
  
    expect(feedbackNames).toEqual([feedbacks[1].name, feedbacks[0].name]);
  });
});
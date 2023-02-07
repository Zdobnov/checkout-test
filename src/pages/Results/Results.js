import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FeedbackListContext } from '../../state/context';
import Wrapper from '../../components/Wrapper/Wrapper';
import ResultsItem from '../../components/ResultsItem/ResultsItem';
import Chart from '../../components/Chart/Chart';

import './Results.scss';

const Results = () => {
  const { feedbacks } = useContext(FeedbackListContext);

  return (
    <Wrapper className='results'>
      <header className='results__header'>
        <h1 className='results__title'>
          Feedback Results
        </h1>
        <Link to="/" className='results__back'>
          Back
        </Link>
      </header>
      <Chart />
      <h2 className='results__subtitle'>
        Latest Comments
      </h2>
      <ul className='results__list'>
        {feedbacks.map(item => (
          <ResultsItem
            key={item.id}
            item={item}
          />
        )).reverse()}
      </ul>
    </Wrapper>
  );
}

export default Results;
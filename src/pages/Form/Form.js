import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FeedbackListContext } from '../../state/context';
import Wrapper from '../../components/Wrapper/Wrapper';

import './Form.scss';

const Form = () => {
  const { addFeedbackItem } = useContext(FeedbackListContext);
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    const [name, email, rate, message] = Array.from(event.target);

    addFeedbackItem({
      name: name.value,
      email: email.value,
      rate: rate.value,
      message: message.value,
    });

    navigate('/results');
  };

  return (
    <Wrapper className='form'>
      <h1 className='form__title'>
        Feedback Form
      </h1>
      <form onSubmit={handleSubmit} className="form__wrapper">
        <div className='form__container'>
          <div className='form__inputs'>
            <input type="text" className='form__input' name='name' placeholder='Name' required minLength="1"/>
            <input type="email" className='form__input' name='email' placeholder='Email' required/>
            <input type="number" className='form__input' name='rating' placeholder='Rating 1 - 5' required min="0" max="5"/>
          </div>
          <textarea className='form__textarea' name="message" placeholder='Feedback message' required minLength="10" maxLength="300"/>
        </div>
        <button type='submit' className='form__cta'>
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

export default Form;
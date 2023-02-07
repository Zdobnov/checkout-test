import { v4 as uuid } from 'uuid';

import actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_FEEDBACK_ITEM:
      return {
        feedbacks: [
          ...state.feedbacks,
          {
            id: uuid(),
            date: new Date(),
            ...action.feedback,
          }
        ]
      };
    default:
      return state;
  }
};

export default reducer;
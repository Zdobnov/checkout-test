import { createContext, useReducer } from "react";
import { v4 as uuid } from "uuid";

import actions from "./actions";
import reducer from "./reducer";

const initialState = {
  feedbacks: [{
    id: uuid(),
    name: 'Billy Joe',
    email: 'billy.joe@gmail.com',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget imperdiet elit, eu feugiat nisi. Vivamus ornare euismod dolor, cursus tristique justo ornare eu. Sed non enim leo. Integer mi odio, viverra id sem quis, pellentesque iaculis nunc. Sed hendrerit pellentesque iaculis. Sed id felis risus. Pellentesque tincidunt erat eu elit eleifend ultrices. Nunc facilisis accumsan massa eget malesuada. Aliquam erat volutpat. Aliquam malesuada lobortis orci vitae malesuada. Duis tempor dignissim mi non sollicitudin. Vestibulum porta non libero sit amet condimentum. Nunc sed elit diam. Nulla convallis mauris at neque sodales imperdiet. Pellentesque urna neque, pellentesque quis ligula ac, interdum euismod lectus. Nam porttitor mattis massa quis vehicula.',
    rate: 5,
    date: new Date(),
  }, {
    id: uuid(),
    name: 'Mike Dirnt',
    email: 'mike.dirnt@gmail.com',
    message: 'Mauris aliquet congue mauris ac rutrum. Nam in gravida mauris, elementum imperdiet orci. Cras massa ex, faucibus quis commodo a, molestie eu enim. Etiam tristique nisl eget turpis ultricies, id euismod ligula accumsan. Ut euismod accumsan tortor sed blandit. Quisque mauris ante, ultricies non metus non, pulvinar facilisis risus. Aliquam mollis tincidunt est a ultricies. Aliquam id nisi in nulla vulputate luctus in in tellus. Maecenas non lectus dui. Vestibulum tempor sagittis justo eget fringilla. Integer facilisis nulla viverra, lobortis enim sed, iaculis lectus. Fusce eros elit, sodales eget elementum non, cursus sit amet ante. Ut odio nisl, ullamcorper quis erat a, semper viverra arcu. Nam rutrum turpis quis ultrices posuere. Aliquam interdum mi sit amet nunc eleifend, sed vestibulum nisi varius.',
    rate: 3,
    date: new Date(),
  }, {
    id: uuid(),
    name: 'Tre Cool',
    email: 'tre.cool@gmail.com',
    message: 'Curabitur elementum, nibh eget dignissim iaculis, urna risus porttitor libero, a maximus urna massa id lacus. Suspendisse potenti. Praesent ultrices ultrices mollis. Nunc venenatis massa vitae aliquam lacinia. Etiam nibh nulla, placerat et nisi quis, iaculis euismod ipsum. Proin sit amet lorem et felis suscipit iaculis sit amet vel est. Morbi condimentum metus quis iaculis consectetur. Etiam molestie nulla quis orci rutrum, quis dapibus mauris consectetur. Nulla convallis molestie erat, ut volutpat tellus gravida a. Ut sed felis eget nibh pulvinar ornare. Praesent vehicula nisl metus, vel dictum purus mattis id. Sed ac sapien auctor, malesuada nunc at, suscipit diam. Donec sed augue a nisi bibendum lobortis quis ut nisl. Duis at tristique enim, vitae fringilla sem.',
    rate: 5,
    date: new Date(),
  }],
};

export const FeedbackListContext = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    feedbacks: state.feedbacks,
    addFeedbackItem: feedback => {
      dispatch({
        type: actions.ADD_FEEDBACK_ITEM,
        feedback,
      });
    },
  };

  return (
    <FeedbackListContext.Provider
      value={value}
    >
      {children}
    </FeedbackListContext.Provider>
  );
};

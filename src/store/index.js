import { createStore } from 'redux';

const initialState = {
  lists: [
    {
      name: 'ブログを確認',
      complete: false,
    },
    {
      name: 'メールの返信',
      complete: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;

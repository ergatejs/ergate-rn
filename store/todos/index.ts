import produce from 'immer';

const initialState: InitialState = {
  todos: [],
};

export const model = (state: InitialState = initialState, action: Action) => {
  if (action.type === 'ADD_TODO') {
    return produce(state, (draftState: InitialState) => {
      draftState.todos = draftState.todos.concat(action.payload);
    });
  }
  return state;
};

interface InitialState {
  todos: Array<string>;
}

interface Action {
  type: string;
  payload: any;
}

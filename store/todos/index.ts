const initialState: InitialState = {
  todos: [],
};

export const model = (state: InitialState, action: Action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...initialState,
        todos: state.todos.concat([action.payload]),
      };
    default:
      return state;
  }
};

interface InitialState {
  todos: Array<string>;
}

interface Action {
  type: string;
  payload: any;
}

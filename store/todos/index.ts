interface Action {
  type: string;
  text: string;
}

interface InitialState {
  todos: Array<string>;
}

const initialState: InitialState = {
  todos: [],
};

const todos = (state: InitialState, action: Action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...initialState,
        todos: state.todos.concat([action.text]),
      };
    default:
      return state;
  }
};

export default todos;

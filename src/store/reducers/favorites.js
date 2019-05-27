const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces',
          url: 'https://github.com/facebook/react',
        }];
    default:
      return state;
  }
}


/* const INITIAL_STATE = [
  { id: 1, text: 'Fazer Café' },
  { id: 2, text: 'Estudar React' },
  { id: 3, text: 'Entrar para o grupo' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];

    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);

    default:
      return state;
  }
} */

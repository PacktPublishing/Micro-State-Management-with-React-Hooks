const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    default:
      throw new Error('unknown action type');
  }
};

const Component = () => {
  const [state, dispatch] = useReducer(
    reducer,
    { count: 0, text: 'hi' },
  );
  return (
    <div>
      {state.count}
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increment count
      </button>
      <input
        value={state.text}
        onChange={(e) =>
          dispatch({ type: 'SET_TEXT', text: e.target.value })}
      />
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_TEXT':
      if (!action.text) {
        // bail out
  return state
      }
      return { ...state, text: action.text };
    default:
      throw new Error('unknown action type');
  }
};

const reducer = (count, delta) => {
  if (delta < 0) {
    throw new Error('delta cannot be negative');
  }
  if (delta > 10) {
    // too big, just ignore
    return count
  }
  if (count < 100) {
    // add bonus
    return count + delta + 10
  }
  return count + delta
}

const init = (count) => ({ count, text: 'hi' });

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    default:
      throw new Error('unknown action type');
  }
};

const Component = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div>
      {state.count}
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Increment count
      </button>
      <input
        value={state.text}
        onChange={(e) =>
          dispatch({ type: 'SET_TEXT', text: e.target.value })}
      />
    </div>
  );
};

const useState = (initialState) => {
  const [state, dispatch] = useReducer(
    (prev, action) =>
      typeof action === 'function' ? action(prev) : action,
    initialState,
  );
  return [state, dispatch];
};

const reducer = (prev, action) =>
  typeof action === 'function' ? action(prev): action;

const useState = (initialState) =>
  useReducer(reducer, initialState);

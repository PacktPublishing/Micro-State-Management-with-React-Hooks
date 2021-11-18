const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  const dispatch = (action) =>
    setState(prev => reducer(prev, action));
  return [state, dispatch];
};

const useReducer = (reducer, initialArg, init) => {
  const [state, setState] = useState(
    init ? () => init(initialArg) : initialArg,
  );
  const dispatch = useCallback(
    (action) => setState(prev => reducer(prev, action)),
    [reducer],
  );
  return [state, dispatch];
};

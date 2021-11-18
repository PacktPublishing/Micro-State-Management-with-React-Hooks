const useScore = (bonus) =>
  useReducer((prev, delta) => prev + delta + bonus, 0)

const initialState = {
  people: null,
  loading: false,
  error: "",
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case "setPeople":
      return { ...state, loading: false, error: "", people: action.payload };
    case 'setLoading':
        return {...state, loading: action.payload }
    case 'setError':
        return {...state, error: action.payload}
    default:
      return state;
  }
};

export default people;
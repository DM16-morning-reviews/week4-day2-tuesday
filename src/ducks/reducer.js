const initialState = {
  name: "Jarid"
};

const GET_NAME = "GET_NAME";

export function getName() {
  return {
    type: GET_NAME,
    payload: initialState.name
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_NAME:
      return {
        ...state,
        payload: `My name is ${state.name}`
      };
    default:
      return state;
  }
}

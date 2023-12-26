//get dom elements
const counter = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//action identifier
const INCREMENT = "increment";
const DECREMENT = "decrement";

//action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: {
      value,
    },
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: {
      value,
    },
  };
};

//initial state
const initialState = {
  value: 0,
};

//create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      value: state.value + action.payload.value,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      value: state.value - action.payload.value,
    };
  } else {
    return {
      ...state,
    };
  }
};

//create the store
const store = Redux.createStore(counterReducer);

//UI render function
const render = () => {
  const state = store.getState();
  counter.innerText = state.value;
};
render();

//subscribe to store
store.subscribe(render);

//events
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});
decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(10));
});

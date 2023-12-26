//get dom elements
const counter = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

//initial state
const initialState = {
  value: 0,
};

//create reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      value: state.value - 1,
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
  console.log("state", state);
};
render();

//subscribe to store
store.subscribe(render);

//events
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});
decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});

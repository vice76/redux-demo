const redux = require("redux");
const createStore = redux.createStore; // to createstore
const combineReducers = redux.combineReducers; //for combining reducers


const BUY_CAKE = "BUY_CAKE"; //to avoid spelling mistakes
const BUY_ICECREAM = "BUY_ICECREAM";

function buycake() {
  //action creator simply creates a
  // action generally its a function that returns actions
  return {
    type: BUY_CAKE,
    info: "demo redux guide",
  };
}

function buyicecream() {
  //action creator simply creates a
  // action generally its a function that returns actions
  return {
    type: BUY_ICECREAM,
    info: "demo redux guide",
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 10
// };

const initialCakeState = {
  //example of multiple reducer and their separate store
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIcecream: 20,
};

const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //spread operator so that only numOfCakes property gets updated.
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

const icecreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, //spread operator so that only numOfCakes property gets updated.
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};

//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case BUY_CAKE:
//         return {
//           ...state, //spread operator so that only numOfCakes property gets updated.
//           numOfCakes: state.numOfCakes - 1,
//         };

//         case BUY_ICECREAM:
//         return {
//           ...state, //spread operator so that only numOfCakes property gets updated.
//           numOfIcecream: state.numOfIcecream - 1,
//         };

//       default:
//         return state;
//     }
//   };
const rootReducer = combineReducers({
    cake : cakereducer,
    icecream : icecreamreducer
})

const store = createStore(rootReducer); //responsbility 1 holding application state
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buycake());
store.dispatch(buycake()); //anytime the store updates it prints
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
store.dispatch(buyicecream());
unsubscribe();

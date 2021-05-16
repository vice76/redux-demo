const redux = require('redux')
const createStore = redux.createStore // to createstore

const BUY_CAKE = 'BUY_CAKE' //to avoid spelling mistakes

function buycake(){ //action creator simply creates a
                    // action generally its a function that returns actions
   return {
        type : BUY_CAKE,
        info : 'demo redux guide'
    }
    
}

const initialState = {
    numOfCakes : 10
};

const reducer = (state = initialState , action) => {
    switch(action.type) {
        case BUY_CAKE : return {
            ...state, //spread operator so that only numOfCakes property gets updated.
            numOfCakes : state.numOfCakes -1
        }

        default : return state
    }
}

const store = createStore(reducer) //responsbility 1 holding application state
console.log('initial state' , store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state' , store.getState()))
store.dispatch(buycake());
store.dispatch(buycake());//anytime the store updates it prints 
store.dispatch(buycake());
store.dispatch(buycake());
unsubscribe();
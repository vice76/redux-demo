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
const BUY_CAKE = 'BUY_CAKE' //to avoid spelling mistakes

function buycake(){ //action creator simply creates a
                    // action generally its a function that returns actions
   return {
        type : BUY_CAKE,
        info : 'demo redux guide'
    }
    
}


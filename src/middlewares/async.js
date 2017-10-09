
export default function({dispatch}) {
    return next => action => {
        // console.log(action);
        if(!action.payload || !action.payload.then){
            return next(action);
        }
        
        action.payload.then(function(response) {
            const newAction = { ...action, payload: response }
            dispatch(newAction); // the reason we don't use next is because we want the response to go through *ALL* middlewares, not just the next one
        });
    }
}
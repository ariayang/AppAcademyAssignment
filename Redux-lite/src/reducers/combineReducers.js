// function combineReducers(obj) {
//     function singleReducer(prevState, action) {
//         // find the key of prevState in obj, find the corresponding reducer
//         // perform that action
//         //const {key, state} = prevState;
//         for (const prevStateKey in prevState) {
//             if (prevStateKey in obj) {
//                 return obj[prevStateKey](prevState, action);
//             } 
//         } 
//         return prevState;
//     }
//     return singleReducer;
// }

// export default combineReducers;

const combineReducers = (reducers) => {
  return (prevState, action, subscriptions = []) => {
    const newState = {};
    let stateChanged = false;

    Object.keys(reducers).forEach((key) => {
      if (!action) {
        const args = [, { type: "__initialize" }];
        newState[key] = reducers[key](...args);
      } else {
        newState[key] = reducers[key](prevState[key], action);
      }

      if (prevState[key] !== newState[key]) {
        stateChanged = true;
      }
    });

    if (stateChanged) {
      subscriptions.forEach((cb) => {
        cb(newState);
      });
    }

    return newState;
  };
};

export default combineReducers;
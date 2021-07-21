import combineReducers from "../reducers/combineReducers";
import Store from "../store/store";

function testStore() {
// define a reducer for user:
const userReducer = (oldUser = null, action) => {
  if (action.type === "new user") {
    return action.user;
  }
  return oldUser;
};

// create a rootReducer:
const rootReducer = combineReducers({
  user: userReducer,
});

// create a store using the rootReducer:
const store = new Store(rootReducer);

// get the state:
store.getState(); // => {}

// invoke the dispatch function to update the user key:
const action = {
  type: "new user",
  user: "Jeffrey Fiddler",
};

store.dispatch(action);
//console.log(store.getState()); // => { user: "Jeffrey Fiddler" }
}

export default testStore;
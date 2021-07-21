import React from "react";

import testCombineReducers from "./testCombineReducers";
import testStore from "./testStore";
import testSubscriptions from "./testSubscriptions";

function App() {

  testCombineReducers();
  testStore();
  testSubscriptions();

  return (
      <div>
          Not sure what to render

      </div>
  )

}

export default App;
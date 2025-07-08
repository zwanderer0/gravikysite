import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer/reducer";
import App from "./App";

const store = createStore(Reducer, applyMiddleware(thunk));

test("renders without crashing", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

import React from "react";
import { render as RTLRender } from "@testing-library/react";
import { Provider } from "react-redux";

import { createStore } from "../redux/store";

export function render(
  ui,
  {
    preloadedState = {},
    store = createStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...RTLRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

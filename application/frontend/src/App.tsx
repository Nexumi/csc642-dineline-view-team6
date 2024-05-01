import type { Component } from "solid-js";

import Root from "./Root";
import { Toaster } from "solid-toast";

const App: Component = () => {
  return (
    <>
      <Root />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
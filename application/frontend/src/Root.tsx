import { Route, Router } from "@solidjs/router";
import HomePage from "./pages/HomePage";

export default function Root() {
  return (
    <>
      <Router>
        <Route path="/" component={HomePage} />
      </Router>
    </>
  );
}
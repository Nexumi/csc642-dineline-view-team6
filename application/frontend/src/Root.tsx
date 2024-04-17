import { Route } from "@solidjs/router";
import HomePage from "./pages/HomePage";

export default function Root() {
  return (
    <>
      <Route path="/" component={HomePage} />
    </>
  );
}
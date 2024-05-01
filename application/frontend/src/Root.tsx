import { Route, Router } from "@solidjs/router";
import HomePage from "./pages/HomePage";

export default function Root() {
  return (
    <>
      <div class="min-h-screen bg-gray-400">
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </div>
    </>
  );
}
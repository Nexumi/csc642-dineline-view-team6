import { Route, Router } from "@solidjs/router";

import NotFoundPage from "./pages/NotFoundPage";

import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import MenuPage from "./pages/MenuPage";

export default function Root() {
  return (
    <>
      <div class="min-h-screen bg-gray-400">
        <Router>
          <Route path="/*" component={NotFoundPage} />
          <Route path="/" component={HomePage} />
          <Route path="/info/:id" component={InfoPage} />
          <Route path="/menu/:id" component={MenuPage} />
        </Router>
      </div>
    </>
  );
}
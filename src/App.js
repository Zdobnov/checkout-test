import { Routes, Route } from "react-router-dom";

import Form from "./pages/Form/Form";
import Results from "./pages/Results/Results";
import { Provider } from "./state/context";

import "./App.scss";

const App = () => (
  <Provider>
    <Routes>
      <Route
        index
        element={<Form />}
      />
      <Route
        path="/results"
        element={<Results />}
      />
    </Routes>
  </Provider>
);

export default App;

import { Provider } from "react-redux";
import AppRouter from "./router";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;

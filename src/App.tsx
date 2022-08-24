import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import AppRouter from "./router";
import { store } from "./store";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
};

export default App;

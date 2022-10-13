import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import App from "./App";
import { unregister } from "./registerServiceWorker";
import axios from "axios";

const store = createStore(rootReducer, applyMiddleware(thunk));

axios.defaults.baseURL = 'http://localhost:50006';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
unregister();

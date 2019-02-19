import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import cartReducer from "./reducers/cartReducer";
import App from "./App";
import Cart from "./components/Cart";

const store = createStore(cartReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/app" component={App} />
                    <Route exact path="/app" component={App} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>,
document.getElementById("root")
);

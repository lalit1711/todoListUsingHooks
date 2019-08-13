import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Conference from "../components/conference.js";

export function Routes() {
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={App}>
                        <Route path="/" exact component={Conference}></Route>
                        <Route path="/conference" component={Conference}></Route>
                    </Route>
                </div>
            </BrowserRouter>
        );
    }

export default Routes;
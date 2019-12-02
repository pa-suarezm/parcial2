import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import * as serviceWorker from './serviceWorker';

import App from './App.js';

let choose = () => {
    if(navigator.language === "es")
        return localeEsMessages;
    else
        return localeEnMessages;
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} key={navigator.language} messages={choose()}>
        <App locale={navigator.language}/>
    </IntlProvider>
    , document.getElementById("root")
);

serviceWorker.register();

import ReactDOM from "react-dom";
import {App} from "./app/App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import i18n from "../config/i18n/i18n";

const rootNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , rootNode);

import React from "react";
import App from "./App";
const { TextEncoder, TextDecoder } = require("util");

// Here we are NOT using ReactDOM anymore
// import ReactDOM from "react-dom";

// Switched to createRoot instead of ReactDOM
import { createRoot } from 'react-dom/client';

import { expect } from "chai";
const { JSDOM } = require("jsdom");


describe("App Component Testing", () => {
    it("Renders Hello World Title", () => {
        const dom = new JSDOM(`<div id="test"></div>`);
        global.window = dom.window;
        const element = dom.window.document.getElementById("test");                        

        // Here we are NOT using ReactDOM anymore
        // ReactDOM.render(<App />, element); 

        // Switched to createRoot instead of ReactDOM
        createRoot(element).render(<App />);
                     
        expect(element.innerHTML).equals("<h1>Hello World</h1>");
    });
});
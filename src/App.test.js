import React from "react";


import ReactDOM from "react-dom";


import { expect } from "chai";
const { JSDOM } = require("jsdom");


import App from "./App";

describe("App Component Testing", () => {
    it("Renders Hello World Title", () => {
        const dom = new JSDOM(`<div id="test"></div>`);
        global.window = dom.window;
        const element = dom.window.document.getElementById("test");                        

        
        ReactDOM.render(<App />, element); 

                
                     
        expect(element.innerHTML).equals("<h1>Hello World</h1>");
    });
});
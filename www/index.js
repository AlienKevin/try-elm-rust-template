import * as wasm from "try-elm-rust";
import "./elm.js"

var app = Elm.Main.init({ node: document.querySelector('main') });
app.ports.calculateFibonacci.subscribe(function(nth) {
  app.ports.receiveFibonacci.send(wasm.fibonacci(nth));
});

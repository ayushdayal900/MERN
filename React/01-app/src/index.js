import React from "react";
import ReactDom from "react-dom/client"

const root = ReactDom.createRoot(document.getElementById('root'))


function HelloWorld() {
    return <h1>Hello World !!!</h1>
}
root.render(<HelloWorld />)
import React from "react";
import ReactDom from "react-dom/client"

const root = ReactDom.createRoot(document.getElementById('root'))




const user = {
    fname: 'Ayush',
    lname: 'Dayal'
}

function formatName (user) {
    return user.fname + " " + user.lname;
}


function HelloWorld() {
    const name = 'World';
    return <h1>Hello {formatName(user)}...!</h1>
}


root.render(<HelloWorld />)
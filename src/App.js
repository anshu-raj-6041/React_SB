import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";



// React.createElement => ReactElement(object) => HTML element(render)
// const heading = React.createElement("h1", { id: "heading" }, "React from App");
// console.log(heading);

// React Element
// JSX => HTML like syntax, not HTML in JS
// JSX => (transpiled before it reaches the JS) - Parcel - Babel(JS compiler)
// JSX => React.createElement => ReactElement - JS Object - HTMLElement(render)

// React Component
// 1> Class Based Component - OLD
// 2> Functional Component - NEW (is a fn that returns a piece of JSX code)
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>
// }

// JS Object
// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);    // to render React Element
root.render(<AppLayout />);  // to render React FC

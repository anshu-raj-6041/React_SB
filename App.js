// ReactElement(Object) => HTML(Browser understand)
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag"),
    ])
);

// we have to pass 3 attributes
// ("what type of tag", {id}, "what we have to write inside tag")
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
console.log(heading);   // object


// root is the place where all react codes run
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
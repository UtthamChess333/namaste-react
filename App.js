// const heading = React.createElement("h1",{},"I am Uttham Naresh");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//<div id="parent">
//    <div id="child">
//      <h1>I am Uttham Naresh FIVE STAR CODER AND FULL STACK WEBDEVELOPER</h1>
//    </div>
//</div>

//CREATE THIS USING REACT


// const heading = React.createElement("div",
//     {id:"parent"},
//     React.createElement("div",
//     {id:"child"},
//     React.createElement("h1",{},"I am heading tag inside of child and parent")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


//<div id="parent">
//    <div id="child">
//      <h1>I am Uttham Naresh FIVE STAR CODER AND FULL STACK WEBDEVELOPER</h1>
//      <h1>I am Sibling of h1 tag</h1>
//    </div>
//</div>

//Creating Siblings in child 

// const heading = React.createElement("div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//         [
//             React.createElement("h1",{},"I am h1 tag1"),
//             React.createElement("h1",{},"I am h1 tag2"),
//         ]
//     )
// );

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

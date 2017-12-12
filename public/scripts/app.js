console.log('App.js is running!');

var template = React.createElement(
  "h1",
  {
    id: "someid"},
    "Something new"
  }
);
var appRoot = document.getElementById('app');
ReactDom.render(template, appRoot);

const App = require('./app.js');

window.onload = () => {
    const main = document.querySelector('main');
    new App(main).init();
};

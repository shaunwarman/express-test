const Express = require('express');
const Session = require('express-session');

const App = Express();

App.use(Session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

App.get('/', (req, res) => {
    res.send('Hello World!');
});

App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
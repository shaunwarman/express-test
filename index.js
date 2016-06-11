const Express = require('express');
const Session = require('express-session');

const App = Express();

App.use(Session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

const index = `
    <iframe src="http://localhost:3000/content" width="400" height="300">
        <p>Your browser does not support iframes.</p>
    </iframe>
`;

App.get('/', (req, res) => {
    res.send(index);
});

App.get('/content', (req, res) => {
    res.send('Iframe response');
});

App.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
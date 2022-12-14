const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const sequelize = require('./config/connection')
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'super secret secret',
    cookie: {},
    resave: false,
    saveUninitalized: true,
    store: new SequelizeStore ({
        db: sequelize
    })
};

app.use(session(sess));
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})
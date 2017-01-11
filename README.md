# express react views

This is an Express view engine which renders React components on server. It renders static markup and does not support mounting those views on the client.

This is intended to be used as a replacement for existing server-side view solutions, like jade, ejs, or handlebars.

Getting Started
---------------

```sh
# clone it
git clone https://github.com/shellyjindal10/express-react-views.git
cd express-react-views

# Make it your own
rm -rf .git && git init && npm init

# Install dependencies
npm install

# Start development:
PORT=3000 npm run start

```

# Dependency

```sh
npm install express-react-views react react-dom
```

### Add it to your app.
```js
// app.js

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
```

### Views
The view is like a module to export the React components
Create a file index.jsx under views folder
```js
var React = require('react');

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

module.exports = HelloMessage;
```

### Routes
Basic express routes

```js
// app.js

app.get('/', require('./routes').index);
```

```js
// routes/index.js

exports.index = function(req, res){
  res.render('index', { name: 'John' });
};
```




License
-------

MIT

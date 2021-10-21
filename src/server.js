import express from 'express'

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

//Routes
app.get('/', (req, res) => res.send("Welcome to my APIREST"));

export default app;
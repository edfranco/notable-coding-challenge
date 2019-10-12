const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes');

const corsOptions = {
    origin: ['http://localhost:3000'],
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));


// routes
app.use(`/api/test`, routes.test);
app.use(`/api/doctors`, routes.doctors);

app.listen(4000, console.log('server is live at port 4000'));

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import secrets from './secrets/secrets.js';

import itemRoutes from './routes/items.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/items', itemRoutes);

const CONNECTION_URL = `mongodb+srv://${secrets.mongoDB.login}:${secrets.mongoDB.password}@cluster0.anro0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

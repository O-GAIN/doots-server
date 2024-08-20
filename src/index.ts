import express from 'express';
import loginHandler from './handlers/login';
import signupHandler from './handlers/signup';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.post('/login', loginHandler);
app.post('/signup', signupHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todosRouter = require('./todo-app-backend/routes/todos')

const app = express();

app.use(cors());
app.use(express.json());
app.use('./todos',todosRouter);


mongoose.connect('mongodb://localhost/todo-app',{
    useNewUrlParser : true,
    useUnifiedTopology : true
})


const db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error : '))
db.once('open',()=>{
    console.log('Conencted to MongoDB');
    
});

app.listen(5000,()=>{
    console.log('Server running with 5000 ');
    
})
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

//root api
app.get('/', (req, res)=>{
    res.send('Responding from MediPlus server')
})

//listen
app.listen(port, () =>{
    console.log(`Listening to port, ${port}`);
})
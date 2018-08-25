const express   = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const app  = express();
const  items = require('./routes/api/items');






//body Parser
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to MOngo
mongoose.connect(db,{ useNewUrlParser: true })
   .then(()=> console.log('MOngoDB Connected.. '))
   .catch(err => console.log(err));

app.use('/api/items', items);   
   
app.listen(port, ()=> console.log(`Server Started On Port ${port}`));

   
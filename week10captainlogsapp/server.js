require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Log = require('./models/logs');
const methodOverride = require('method-override');

//Port number and test app
port =3001;
app.get('/',(req, res)=>{
    res.send('Welcome to CaptainLogsApp')
})

// Middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

//Connect to Mongoose/ removed deprication warning
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', ()=>{
    console.log('connected to mongoDB')
});

//Index
app.get('/logs',(req, res) =>{
    Log.find({}, (err, allLogs)=>{
        res.render('Index', {
            logs:allLogs
        })

    })
})

// New route
app.get('/logs/new',(req, res)=>{
    res.render('New');
})

//POST
app.post('/logs', (req, res)=>{
    if (req.body.shipIsBroken ==="on"){
        req.body.shipIsBroken = true;
    }else{
        req.body.shipIsBroken = false;
    }
    Log.create(req.body, (err, createLog)=>{
        res.redirect('/logs')
    })
})

app.get('/logs/new',(req, res)=>{
    res.render('New');
})

//SHOW ROUTe
app.get('/logs/:id', (req, res) => {
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render('Show', {
            log: foundLog
        })
    })
})

//EDIT
app.get('/logs/:id/edit',(req, res)=>{
    Log.findById(req.params.id, (err, foundLog)=>{
        res.render("Edit",{
            log: foundLog

        })
        
    })
})

//PUT
app.put('/logs/:id', (req, res) =>{
    if (req.body.shipIsBroken ==="on"){
        req.body.shipIsBroke = true;
    }else{
        req.body.shipIsBroken = false;
    }
    Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog)=>{
        console.log(updatedLog);
        res.redirect(`/logs/${req.params.id}`)
    })
})
//DELETE

app.delete("/logs/:id",(req, res)=>{
    Log.findByIdAndRemove(req.params.id, (err, deletedLog)=>{
        res.redirect("/logs");
    });
});



app.listen(port, ()=>{
    console.log(`${port}----listening`)
} )
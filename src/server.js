const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
// mediaWare
app.use([morgan('dev'), cors(), express.json()])

app.get('/health', (_req, res)=>{
    res.status(200).json({message: 'Success'})
})

// Error medalware 
app.use((_req, _res, next)=>{
    const error = new Error('Resource Not Found')
    error.status = 404;
    next(error)
})

// Error checker 
app.use((error, _req, res, _next)=>{
    if(error.status){
        return res.status(error.status).json({message: error.message});
    }

    res.status(500).json({message: 'Something went wrong'});
})

// create server 
app.listen(port, ()=> {
    console.log('server is listening on PORT', port)
})


const ticketCollection = require('./tickets')

// ticket selling controllers

exports.sellSingleTricket = (req, res)=>{
    const {username, price} = req.body
    const ticket = ticketCollection.create(username, price)
    res.status(201).json({
        message: 'Ticket created successfully',
        ticket
    })
}

exports.sellBulkTicket = (req, res) => {
    const {username, price, quantity } = req.body
    const tickets = ticketCollection.createBulk(username, price, quantity);
    res.status(201).json({
        message: 'Ticket created successfully',
        tickets
    })
}


// find tickets controller

exports.findAll = (req, res) => {
    const tickets = ticketCollection.find()
    console.log(tickets);
    res.status(200).json({
        total: tickets.length,
        items: tickets
    })
    
}


exports.findById = (req, res)=>{
    const id = req.params.id;
    const ticket = ticketCollection.findById(id);
    if(!ticket){
        return res.status(404).json({message: '404 not found' })
    }
    res.status(200).json(ticket);
}

exports.findByUsername = (req, res) =>{
    const username = req.params.username;
    const tickets = ticketCollection.findByUsername(username)
    res.status(200).json({
        total: tickets.length,
        items: tickets
    })
}

// updata controllers

exports.updateById = (req, res)=> {
    const id = req.params.id;
    const ticket = ticketCollection.updateById(id, req.body)
    if(!ticket){
        return res.status(404).json({message: '404 not found' })
    }
    res.status(200).json(ticket);
}

exports.updateByUsername = (req, res)=>{
    const username = req.params.username;
    const tickets = ticketCollection.updateBulk(username, req.body)
    res.status(200).json({
        total: tickets.length,
        items: tickets
    })
}


// delete controllers

exports.deleteById = (req, res)=>{
    const id = req.params.id;
    const isDeleted = ticketCollection.deletById(id)
    if(isDeleted){
        res.status(204).json({message: 'Delete oparation success'})
    }
    res.status(400).json({message: 'Delete oparation failed'})
}

exports.deleteByUsername = (req, res) =>{
    const username = req.params.username;
    ticketCollection.deleteBulk(username)
    res.status(204).send("User Delete Successfull");
}

exports.drawWinners = (req, res) => {
    const wc = req.query.wc ?? 3
    const winners = ticketCollection.drow(wc)
    res.status(200).json(winners)
}




const Ticket = require('./Ticket')
const {readFile, writeFile} = require('./utils')

// simple security 
const tickets = Symbol('tickets')

class TicketCollection {
    constructor(){
        this[tickets] = []
    }

    /**
     * 
     * @param {string} username 
     * @param {number} price 
     * @return {Ticket}
     */
    create(username, price){
        const ticket = new Ticket(username, price)
        this[tickets].push(ticket)
        return tickets;
    }

    /**
     * return all tickets from db
     */
    find(){
        return this[tickets];
    }

    /**
     * single ticket by id
     * @param {*} id 
     * @return {Ticket}
     */
    findById(id){
        const ticket = this[tickets].find(
            /**
             * 
             * @param {Ticket} ticket 
             * @returns 
             */
            (ticket) => ticket.id == id
        );
        return ticket;
    }

    /**
     * single ticket by username
     * @param {*} id 
     * @return {Ticket}
     */
     findByUsername(username){
        const tickets = this[tickets].filter(
            /**
             * 
             * @param {Ticket} ticket 
             * @returns 
             */
            (ticket) => ticket.username == username
        );
        return tickets;
    }

    /**
     * update by id
     * @param {string} ticketId 
     * @param {{username: string, price: number}} TicketBody 
     * @return {Ticket}
     */
    updateById(ticketId, TicketBody){
        const ticket = this.findById(ticketId)
        ticket.username = TicketBody.username ?? ticket.username
        ticket.price = TicketBody.price ?? ticket.price

        return ticket;
    }

    /**
     * 
     * @param {string} ticketId 
     * @return {boolean}
     */
    deletById(ticketId){
        const index = this[tickets].findIndex(
        /**
         * 
         * @param {Ticket} ticket 
         */
            (ticket) => ticket.id === ticketId 
        )
        if(index === -1){
            return false;
        }else {
            this[tickets].splice(index, 1)
            return true;
        }
    }
}

const collection = new TicketCollection()



const router = require('express').Router()
const {sellBulkTicket, sellSingleTricket} = require('./controllers')

// ticket route
router.route('/t/:id').get().put().delete()
// user route
router.route('/u/:username').get().put().delete()

router.post('/bulk', sellBulkTicket)
router.get('/draw')

// root route 
router.route('/').get().post(sellSingleTricket)


module.exports = router

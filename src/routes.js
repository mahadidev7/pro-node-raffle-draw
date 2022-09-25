const router = require('express').Router()
const {
    sellBulkTicket,
    sellSingleTricket,
    findAll,
    findById,
    findByUsername,
    updateById,
    updateByUsername,
    deleteById,
    deleteByUsername
} = require('./controllers')

// ticket route
router.route('/t/:id').get(findById).put(updateById).delete(deleteById)
// user route
router.route('/u/:username').get(findByUsername).put(updateByUsername).delete(deleteByUsername)

router.post('/bulk', sellBulkTicket)
router.get('/draw')

// root route 
router.route('/').get(findAll).post(sellSingleTricket)


module.exports = router

const router = require('express').Router()
// ticket route
router.route('/t/:id').get().put().delete()
// user route
router.route('/u/:username').get().put().delete()

router.post('/bulk')
router.get('/draw')

// root route 
router.route('/').post().get()


module.exports = router

const router = require('express').Router();

// create
router.post('/', function _create(req, res, next) {
    const newuserObj =  { password: '' }
    const newUser = new User(newuserObj);
    // const data = await user.save();

});

// list
router.post('/list', function _list(req, res, next) {
    
});

// get
router.get('/:id', function _create(req, res, next) {
    
});

// delete
router.delete('/:id', function _create(req, res, next) {
    
});
module.exports = router;
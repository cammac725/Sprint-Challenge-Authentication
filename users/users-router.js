const router = require('express').Router();

const Users = require('./users-model')
const { authenticate } = require('../auth/authenticate')

router.get('/', authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(error => {
      res.send(error)
    })
})

router.get('/:id', authenticate, (req, res) => {
  Users.findById(req.params.id)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      res.send(error)
    })
})

module.exports = router;
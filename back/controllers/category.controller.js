const express = require('express');
const service = require(`../services/category.service`);
const passport = require('passport');
const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    service.getAll
);
router.get('/:id', service.getById);
router.delete('/:id', service.remove);
router.post('/', service.create);
router.patch('/:id', service.update);

module.exports = router;

const express = require('express');
const passport = require('passport');
const upload = require('../middleware/upload');
const service = require(`../services/category.service`);
const router = express.Router();

router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    service.getAll
);

router.get(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    service.getById
);

router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    service.remove
);

router.post(
    '/',
    upload.single('image'),
    passport.authenticate('jwt', { session: false }),
    service.create
);

router.patch(
    '/:id',
    upload.single('image'),
    passport.authenticate('jwt', { session: false }),
    service.update
);

module.exports = router;

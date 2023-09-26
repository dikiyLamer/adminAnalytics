const express = require('express');
const service = require(`../services/position.service`);

const router = express.Router();

router.get(
    '/:category',
    passport.authenticate('jwt', { session: false }),
    service.getByCategoryId
);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    service.create
);
router.patch(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    service.update
);
router.delete(
    '/:id',
    passport.authenticate('jwt', { session: false }),
    service.remove
);

module.exports = router;

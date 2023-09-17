const express = require('express');
const service = require(`../services/position.service`);

const router = express.Router();

router.get('/:category', service.getByCategoryId);
router.post('/', service.create);
router.patch('/:id', service.update);
router.delete('/:id', service.remove);

module.exports = router;

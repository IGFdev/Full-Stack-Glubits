const express = require('express');
const controllers = require('../../controllers/api/userControllers');

const router = express.Router();

// @GET /api/users
router.get('/', controllers.getAll);

// @POST /api/users
router.post('/', controllers.createUser);

// @PUT /api/users/:id/edit
router.put('/:id/edit', controllers.updateUser);

module.exports = router;
"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const department = require('../controllers/department.controller')
const permissions = require('../middlewares/permissions')

// URL: /departments

router.route('/')
    .get(permissions.isLogin,department.list)
    .post(permissions.isAdmin,department.create)

router.route('/:id')
    .get(permissions.isAdminOrOwner,department.read)
    .put(permissions.isAdminOrOwner,department.update)
    .patch(permissions.isAdminOrOwner,department.update)
    .delete(permissions.isAdminOrOwner,department.delete)

router.get('/:id/personnels',permissions.isAdminOrOwner, department.personnels)

/* ------------------------------------------------------- */
module.exports = router
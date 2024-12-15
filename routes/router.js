const express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// add-project
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.addProjectController)

// home-project
router.get('/home-projects',projectController.getHomeProjectsController)

// user-project
router.get('/user-projects',jwtMiddleware,projectController.getUserProjectsController)

// all-project
router.get('/all-projects',jwtMiddleware,projectController.getallProjectsController)

// edit-project
router.put('/projects/:id/edit',jwtMiddleware,multerMiddleware.single('projectImage'),projectController.editProjectController)

// remove-project
router.delete('/projects/:id/remove',jwtMiddleware,projectController.removeProjectController)

// edit user
router.put('/user/edit',jwtMiddleware,multerMiddleware.single('profilePic'),userController.editUserController)

module.exports = router
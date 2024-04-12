import express from 'express';

import { signin, signup, google } from '../controllers/authController.js'

const router = express.Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/google',google)

export default router

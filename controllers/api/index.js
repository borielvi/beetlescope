const router = require('express').Router();

const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const taskRoutes = require('./task-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/tasks', taskRoutes);
router.use('/commemts', commentRoutes);

module.exports = router;
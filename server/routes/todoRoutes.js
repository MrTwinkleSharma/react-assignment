//3rd Party Modules
const router = require('express').Router();

//Local Modules
const { getTasks, postTask, patchTask, deleteTask } = require('../controllers/taskController');

//Routes Setup
router.route('/')
    .get(getTasks)
    .post(postTask);

router.route('/:taskId')
    .patch(patchTask)
    .delete(deleteTask);

//Export
module.exports = router;
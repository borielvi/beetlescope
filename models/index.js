const User = require('./users');
const Project = require('./Projects');
const Task = require('./Tasks');
const Comment = require('./Comments')

// module associations

User.hasMany(Project, {
    foreignKey: 'user_id'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

Project.hasMany(Task, {
    foreignKey: 'project_id'
});

Task.belongsTo(Project, {
    foreignKey: 'project_id'
});

User.hasMany(Task, {
    foreignKey: 'user_id'
});

Task.belongsTo(User, {
    foreignKey: 'user_id'
});

Task.hasMany(Comment, {
    foreignKey: 'task_id'
});

Comment.belongsTo(Task, {
    foreignKey: 'task_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project, Task, Comment };

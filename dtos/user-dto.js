module.exports = class UserDto {
    email
    todos
    id

    constructor(model) {
        this.email = model.email
        this.todos = model.todos
        this.id = model._id
    }
}
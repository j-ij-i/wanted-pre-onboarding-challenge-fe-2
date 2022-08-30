/**
 * Represents a Todos.
 * @typedef Todo
 * @type {Object}
 * @property {string} id - To do id.
 * @property {string} contents - To do Contents.
 * @property {boolean} isCompleted - To do Completed.
 * @property {string} categorys - To do categorys.
 * @property {string} tags - To do tags.
 */

/**
 * Create todo.
 * @function createTodo
 * @param {string} id
 * @param {string} contents
 * @param {string} categorys
 * @param {string} tags
 */
function CreateTodo(id, contents, categorys, tags) {}

/**
 * Read todo.
 * @function readTodo
 * @param {string} id
 */
function ReadTodo(id) {}

/**
 * Update todo.
 * @function updateTodo
 * @param {string} id
 * @param {string} contents
 * @param {boolean} isCompleted
 * @param {string} categorys
 * @param {string} tags
 */
function UpdateTodo(id, contents, isCompleted, categorys, tags) {}

/**
 * Update Delete.
 * @param {string} id
 * @function deleteTodo
 */
function DeleteTodo(id) {}

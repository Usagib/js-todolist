class Todo {
  constructor(title, dueDate, priority, description) {
    this.constructor.counter = (this.constructor.counter || 0) + 1;
    this.id = this.constructor.counter;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}

export default Todo;

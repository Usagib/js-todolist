Class Todo {
  constructor(title, dueDate, pripority, description) {
    this.contructor.counter = (this.constructor.counter || 0) +1;
    this.id = this.constructor.counter;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
  }
}

export default Todo;

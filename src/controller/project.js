Class Project {
  constructor(title, todos =[]) {
    this.contructor.counter = (this.constructor.counter || 0) +1;
    this.id = this.constructor.counter;
    this.title = title;
    this.todos = todos;
  }
}

export default Project

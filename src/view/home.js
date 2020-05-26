const home =

  `
<div class='jumbotron m-3 p-3'>
  <h1 class='display-4'>todo-list-js-webpack</h1>
  <p class='lead'>this is a simple todo-list-js-webpack app</p>
</div>
<!-- dinamic content -->
<div class="container">
  <div class="row ">
    <div class="col col-sm-5">
      <div class='row justify-content-between p-3'>
        <h3>projects</h3>
        <button class='btn btn-info' data-toggle="modal" data-target="#modelProject">new project</button>
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">edit</th>
            <th scope="col">remove</th>
          </tr>
        </thead>
        <tbody id="project-table">
          <!-- js fill -->
        </tbody>
      </table>
    </div>
    <div class="col col-sm-7">
      <div class='row justify-content-between p-3'>
        <h3>todos</h3>
        <button class='btn btn-info' data-toggle="modal" data-target="#modalTodo">new todo</button>
      </div>
      <table class="table table-striped table-hover" id='todo-table-header' style="display:none">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">dueDate</th>
            <th scope="col">priority</th>
            <th scope="col">description</th>
          </tr>
        </thead>
        <tbody id="todo-table">
          <!-- js fill -->
        </tbody>
      </table>
    </div>
  </div>
</div>
<!-- modal project -->
<div class="modal fade" id="modelProject" tabindex="-1" role="dialog" aria-labelledby="modelProjectLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modelProjectLabel">add new project</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group row">
            <div class="col">
              <input id="new-project-title" required="true" type="text" class="form-control" placeholder="project title">
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <input type="button" class="btn btn-secondary" id="addProject" value="add project" data-dismiss="modal">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- modal todo -->
<div class="modal fade" id="modalTodo" tabindex="-1" role="dialog" aria-labelledby="modalTodoLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTodoLabel">add new todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group row">
            <div class="col">
              <input id="new-todo-title" required="true" type="text" class="form-control" placeholder="todo title">
            </div>
            <div class="col">
              <input id="new-todo-dueDate" required="true" type="text" class="form-control" placeholder="todo due date">
            </div>
            <div class="col">
              <input id="new-todo-priority" required="true" type="text" class="form-control" placeholder="todo priority">
            </div>
            <div class="col">
              <input id="new-todo-description" required="true" type="text" class="form-control" placeholder="todo description">
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <input type="button" class="btn btn-secondary" id="addTodo" value="add todo" data-dismiss="modal">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<!-- modal edit project -->
<div class="modal fade" id="modalEditProject" tabindex="-1" role="dialog" aria-labelledby="modalEditLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalEditLabel">Edit Poject</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group row">
            <div class="col">
              <input id="edit-project-title" required="true" type="text" class="form-control" placeholder="todo title">
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <input type="button" class="btn btn-secondary" id="editProject" value="edit" data-dismiss="modal">
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
`

export default home;

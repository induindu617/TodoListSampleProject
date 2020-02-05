import { Injectable } from '@angular/core';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  lastId: number = 0;
  todos: Todo[] = [];

  constructor() {
  }

  // Add /todos
  addTodo(todo: Todo): TodoListService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // DELETE /todos/:id
  deleteTodoById(id: number): TodoListService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  //PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  //todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}

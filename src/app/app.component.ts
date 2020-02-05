import { Component } from '@angular/core';
import { TodoListService } from './services/todo-list.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoListService]
})
export class AppComponent {
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoListService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo: any) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  updateTodo(todo: any){
    this.todoDataService.updateTodoById(todo.id);
  }
  removeTodo(todo: any) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

}

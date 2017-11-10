import { Component } from '@angular/core';

class Todo {
    constructor(public title: string, public completed: boolean = false){};
}

const todos: Todo[] = [
    {
        title: 'Вывучыць JS',
        completed: true
    },
    {
        title: 'Вывучыць Angular2',
        completed: false
    },    
    {
        title: 'Напісаць прыкладанне',
        completed: true
    }
];

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'angular 2do';
    todos: Todo[] = todos;

    create(event: Event, input: HTMLInputElement){
        event.preventDefault();         // no relod page
 
        console.log('title from DOM=', input.value);
        
        let todo: Todo = new Todo(input.value);

        this.todos.push(todo);
        
        console.log('title from DOM=', input.value);
        console.log('todo=', todo);

        input.value = '';
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
        console.log('toggle', todo);
    }

    delete(todo: any){
        let index = todos.indexOf(todo);
        
        if (index > -1) {
            todos.splice(index, 1);
        }
        
        console.log('index = ', index, ' element=', todo);        
    }
}
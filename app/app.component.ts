import { Component } from '@angular/core';

class Todo {
    completed: boolean;
    title: string;
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
export class Todo {
    completed = false;
    title: string;

    constructor( { title, completed = false } ) {
        this.completed = completed;
        this.title = title;
    }
}

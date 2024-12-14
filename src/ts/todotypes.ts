export interface MyTodo {
    name:string;
    title:string;
}
export interface NewList extends MyTodo {
   id:number
}

export interface Props {
    todolist:MyTodo;
    toDelete : () => void;
}
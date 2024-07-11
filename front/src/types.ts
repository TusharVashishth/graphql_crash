export interface Todo {
  __typename: string;
  id: number;
  completed: boolean;
  todo: string;
  created_at: string;
}

export type TodoType = {
  todos: Array<Todo>;
};

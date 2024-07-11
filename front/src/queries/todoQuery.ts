import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  #graphql

  query GET_TODOS {
    todos {
      id
      completed
      todo
      created_at
    }
  }
`;

export const CREATE_TODO = gql`
  #graphql

  mutation CREATE_TODO($todo: String!) {
    createTodo(todo: $todo) {
      id
      completed
      todo
      created_at
    }
  }
`;

export const TOGGLE_TODO = gql`
  #graphql
  mutation ToggleComplete($id: Int!, $data: Boolean) {
    toggleComplete(id: $id, data: $data) {
      message
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      name
      description
      createdAt
      updatedAt
      userReviewsId
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      name
      description
      createdAt
      updatedAt
      userReviewsId
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      name
      description
      createdAt
      updatedAt
      userReviewsId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      email
      hobby
      reviews {
        items {
          name
          description
          createdAt
          updatedAt
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      email
      hobby
      reviews {
        items {
          name
          description
          createdAt
          updatedAt
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      email
      hobby
      reviews {
        items {
          name
          description
          createdAt
          updatedAt
          userReviewsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

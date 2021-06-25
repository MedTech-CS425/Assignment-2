export interface IError {
  error?: {
    field: string;
    message: string;
  };
}

export type PasswordEmailInput = {
  email: string;
  password: string;
};

export interface IUser {
  id: string;
  email: string;
}

export interface AddItemInputs {
  name: string;
  image?: string;
  note?: string;
  categoryName?: string;
}

export type Item = {
  name: string;
  id: string;
  categoryId: string;
};

export interface ICategory {
  name: string;
  id: string;
  categoryId: string;
}

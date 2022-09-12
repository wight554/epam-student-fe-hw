export interface File {
  content: string;
  extension: string;
  filename: string;
  message: string;
  uploadedDate: Date;
}

export interface User {
  email: string;
  name: string;
}

export interface FileFormBody {
  filename: string;
  password?: string;
  content: string;
  type: string;
}

export interface AuthFormBody {
  name: string;
  email: string;
  password: string;
}

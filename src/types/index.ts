export interface IFile {
  content: string;
  extension: string;
  filename: string;
  message: string;
  uploadedDate: Date;
}

export interface IFileFormBody {
  filename: string;
  password?: string;
  content: string;
  type: string;
}

export interface IAuthFormBody {
  name: string;
  email: string;
  password: string;
}

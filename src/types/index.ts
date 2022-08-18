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

export type File = {
  content: string;
  extension: string;
  filename: string;
  message: string;
  uploadedDate: Date;
};

export type FileFormBody = {
  filename: string;
  password?: string;
  content: string;
  type: string;
};

declare global {
   type InputElemEvent = React.FormEvent<HTMLInputElement>;

   interface FileObj {
      uid: string;
      path: string;
      size: number;
   }
}

export {};

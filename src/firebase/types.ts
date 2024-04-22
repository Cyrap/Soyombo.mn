
export interface News {
  id: string;
  header: string;
  content: string;
  ownerId: string;
  imageURL: string;
  date: Date;
}
export interface Suggestion {
    id:string;
    category: string;
    about: string[];
}

export interface Message {
  id: number;
  icon: string;
  time: Date;
  author: string;
  content: string;
  like: boolean;
}

export interface Message {
  id: string;
  type: 'user' | 'system';
  content: string;
  timestamp: Date;
}
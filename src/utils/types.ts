export interface IEachAiDataUnit {
  title: string;
  description: string[];
  view_more: string;
}

export interface chatType {
  user: string;
  ai: string | IEachAiDataUnit[];
}

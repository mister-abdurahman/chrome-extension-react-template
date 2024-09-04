export interface IEachAiDataUnit {
  title: string;
  description: string[];
  view_more: string;
}
export interface IEachAiDataUnit2 {
  screenshot_matches_task: boolean;
  current_screen_description: string;
  guidance: { step: string; instruction: string }[];
  additional_notes: string;
}

export interface chatType {
  user?: string;
  ai?: string | IEachAiDataUnit[];
}
export interface chatType2 {
  user?: string;
  ai?: IEachAiDataUnit2 | string;
}

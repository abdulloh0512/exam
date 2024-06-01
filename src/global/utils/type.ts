import { ReactNode } from "react";

export interface IAc {
  url: string;
  icon: ReactNode;
  text: string;
}
export interface ICurMusic {
  id: string;
  index: number;
  url: string;
  status: string;
  author: string[];
  name: string;
  image: string;
}

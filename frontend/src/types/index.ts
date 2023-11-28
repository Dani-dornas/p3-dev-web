export interface ColorsProps {
  id?: number;
  red: number;
  blue: number;
  green: number;
}

export interface ResultProps {
  count: number;
}

export interface ConextProps {
  cores: ColorsProps[];
  save: (r:string, g:string, b:string) => void;
}
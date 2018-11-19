export interface IStyle {
  code: string;
  label: string;
  cssStyle: string;
}

export class Style implements IStyle{
  code: string;
  cssStyle: string;
  label: string;

  constructor(style:IStyle){
    this.code = style.code;
    this.label = style.label;
    this.cssStyle = style.cssStyle;
  }
}

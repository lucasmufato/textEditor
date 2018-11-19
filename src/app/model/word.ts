import {IStyle} from '../style';

export interface IWord {
  letters: string;
  index: number;
  styles?: IStyle[];
}


export class Word implements IWord {

  index: number;
  letters: string;
  styles: IStyle[];

  constructor( iWord: IWord ) {
    this.index = iWord.index;
    this.letters = iWord.letters;
    this.styles = iWord.styles ? iWord.styles :  [];
  }

  concatStyles(): string {
    let s = '';
    this.styles.forEach( style => s += ' ' + style.cssStyle);
    return s;
  }



}

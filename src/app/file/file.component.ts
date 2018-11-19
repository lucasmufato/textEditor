import { Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import {Word} from '../model/word';
import {ComponentInteractionService} from '../services/component-interaction.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  text = '';
  words: Word[];
  esta: Word;

  constructor(private textService: TextService, private componentInteraction: ComponentInteractionService) {
  }

  ngOnInit() {
    this.textService.getMockText().then((result) => this.textReceived(result));
    this.componentInteraction.styleChangesEvents.subscribe( styles => this.setStyles(styles));
    this.componentInteraction.replaceEvents.subscribe( replacement => this.replace(replacement))
  }

  replace(replacement){
    let word = this.words.find(w => w.index === replacement.word.index);
    word.letters = replacement.synonim;
    this.componentInteraction.announceWordChange(word);
  }

  seleccion(algo) {
    this.esta = this.words[algo];
    this.componentInteraction.announceWordChange(this.esta);
  }

  textReceived(text: string) {
    this.words = [];
    this.text = text;
    const texto = this.text.split(' ');
    texto.map( (word, index) => {
      this.words.push( new Word({letters: word, index: index}) );
    });
  }

  setStyles(styles) {
    this.esta.styles = styles;
  }

  looseSelect(){
    this.esta=undefined;
    this.componentInteraction.announceWordChange(undefined);
  }


}

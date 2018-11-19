import { Component, OnInit } from '@angular/core';
import {ComponentInteractionService} from '../services/component-interaction.service';
import {IStyle} from '../style';
import {IWord} from '../model/word';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements OnInit {

  styles: IStyle[];
  word: IWord;

  constructor(private componentInteraction: ComponentInteractionService) {
    this.styles = [];
    this.styles.push( {code: 'U', label: 'U', cssStyle: 'underline'} );
    this.styles.push( {code: 'B', label: 'B', cssStyle: 'bold'} );
    this.styles.push( {code: 'I', label: 'I', cssStyle: 'italic'} );
  }

  ngOnInit() {
    this.componentInteraction.wordChangesEvents.subscribe( wordStyles => {
      this.updateStyles(wordStyles);
    });
  }

  updateStyles(word) {
    this.word = word;
  }

  format(style) {
    let pos = this.word.styles.findIndex(s => s.code === style.code);
    if(pos > -1){
      this.word.styles.splice(pos, 1);
    }else{
      this.word.styles.push(style)
    }
    this.componentInteraction.announceStyleChange(this.word.styles);
  }

  activeStyle(code){
    if(this.word == null || this.word == undefined){
      return;
    }
    if(this.word.styles.findIndex(s=> s.code === code) >= 0){
      return "pressed";
    }

  }


}

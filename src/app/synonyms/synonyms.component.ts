import { Component, OnInit } from '@angular/core';
import {ComponentInteractionService} from '../services/component-interaction.service';
import {SynonimsFinderService} from '../services/synonims-finder.service';
import {IWord} from '../model/word';
import {Synonim} from '../model/synonim';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css']
})
export class SynonymsComponent implements OnInit {

  originalWord: IWord;
  synonimslist: Synonim[];
  searching=false;
  error=false;


  constructor(private componentInteraction: ComponentInteractionService, private synonimsFinderService: SynonimsFinderService) { }

  ngOnInit() {
    this.componentInteraction.wordChangesEvents.subscribe( word => this.setWord(word));
  }

  setWord(word) {
    console.log('escuche la palabra:', word);
    this.originalWord = word;

    this.findSynonims();
  }

  private findSynonims() {
    this.searching = true;
    this.error=false;
    this.synonimslist= [];

    this.synonimsFinderService.findSynonims(this.originalWord.letters).subscribe( rta => {
      if(rta.length>0){
        this.synonimslist = rta.slice(0,10);
      }else{
        this.error = true;
      }

      this.searching = false;
    },error => {
      this.searching = false;
      this.error=true;
    });
  }

  replaceFor(syn:Synonim){
    this.componentInteraction.announceReplace(this.originalWord, syn.word);
  }
}

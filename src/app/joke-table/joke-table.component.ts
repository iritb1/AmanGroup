import { Component, OnInit } from '@angular/core';
import * as Jokes from '../data/jokes-json.json';
import { Joke, JokeType, TwoPart } from './types/joke';
import {MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-joke-table',
  templateUrl: './joke-table.component.html',
  styleUrls: ['./joke-table.component.css']
})
export class JokeTableComponent implements OnInit {
  // title = 'test'
  jokes : Joke[] = [];
  twopart : TwoPart[] = [];
  single : string [] = [];

  constructor(public dialog: MatDialog) {
    this.jokes = (Jokes  as  any).default;
    this.jokes.forEach((joke) => {
      if (joke.type === JokeType.Twopart) this.twopart.push({setup: joke.setup, delivery:joke.delivery});
      if (joke.type === JokeType.Signle) this.single.push(joke.joke as string);
    })
  }

  ngOnInit(): void {
  }

  openDialog(joke: Joke , treeRandomJokes: string[] | TwoPart[]){
    this.dialog.open(PopupComponent, {
      width: '700px',
      height: '500px',
      data: {joke , treeRandomJokes},
    });
  }

  onClickJoke(joke: Joke): void {
    const treeRandomJokes: any[] = [];
    switch(joke.type) {
      case JokeType.Signle:
              for(let i = 0 ; i < 3 ; i ++){
                const index = Math.floor(Math.random() * (this.single.length)) + 1;
                treeRandomJokes.push(this.single[index]);
              }
              this.openDialog(joke,treeRandomJokes); 
              break;

      case JokeType.Twopart:
              for(let i = 0 ; i < 3 ; i ++){
                const index = Math.floor(Math.random() * (this.twopart.length)) + 1;
                treeRandomJokes.push(this.twopart[index]);
              }
              this.openDialog(joke,treeRandomJokes);
              break;
    }

  }

}

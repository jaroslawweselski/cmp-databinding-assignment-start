import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  lastNumber = 0;
  @Output() start = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.start.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }

}

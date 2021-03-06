import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  /*@Input() title: string;*/
  title: string | undefined;
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.title = '';
  }

  toggleContent(): void {
    this.visible = !this.visible;
  }
}

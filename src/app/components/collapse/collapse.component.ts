import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.sass']
})
export class CollapseComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }
  updateExpand(index){
    let content:any=this.content;
    content.content[index].expand=!content.content[index].expand;
  }
}

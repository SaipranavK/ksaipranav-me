import { Component, OnInit } from '@angular/core';
import TypeIt from "typeit";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new TypeIt(".greet", {
      strings: ["🙏 नमस्ते", "👋 Hej/Hey"],
      speed: 80,
      cursor: false
    }).go();
    
   
    new TypeIt(".about", {
      strings: ["I'm Saipranav Koyyada<br>", "Learning to build secure, scalable, reliable, high performance softwares addressing major challenges of the world.<br>", "🤗 Nice to have you here"],
      speed: 80,
      startDelay: 2700,
      cursor: true
    }).go();
  }

}


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
      strings: ["I'm Saipranav Koyyada<br>", "As a software engineer, I thrive to ship secure, scalable, reliable, high-performance software, addressing primary challenges of the society and creating real-time impact for people around. Software architecture, reusability, maintainability, design conformance, artificial intelligence, and machine learning are some of my areas of interest and research.  <br>", "🤗 Nice to have you here"],
      speed: 80,
      startDelay: 2700,
      cursor: true
    }).go();
  }

}


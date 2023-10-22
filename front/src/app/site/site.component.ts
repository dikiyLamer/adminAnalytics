import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
  animations: [
    trigger('expandedMenu', [
      state('initial', style({ width: '40px' })),
      state('expanded', style({ width: '300px' })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class SiteComponent implements OnInit, AfterViewInit {
  documentHeight: number = 0;
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.documentHeight = document.scrollingElement!.scrollHeight;
    });

    console.log(this.documentHeight);
  }
  ngOnInit(): void {
    console.log('init site');
  }
  menuExpanded = false;
  mouseEnterToMenu = false;
  state = 'initial';
  links = [
    { url: 'overview', name: 'Общее', icon: 'feed' },
    { url: 'todo', name: 'Задачи', icon: 'task' },
    { url: 'shop', name: 'Магазин', icon: 'storefront' },
    { url: 'canvas', name: 'Канвас', icon: 'image' },
  ];

  expandMenu() {
    this.menuExpanded = !this.menuExpanded;
    this.state = this.menuExpanded ? 'expanded' : 'initial';
  }

  onHoverMenu() {
    this.mouseEnterToMenu = true;
    this.state = 'expanded';
  }

  onBlurMenu() {
    this.mouseEnterToMenu = false;
    if (!this.menuExpanded) {
      this.state = 'initial';
    }
  }
}

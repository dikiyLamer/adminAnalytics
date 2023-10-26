import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('changeImg', [
      state('initial', style({ opacity: 1 })),
      state('changed', style({ opacity: 1 })),
      transition(
        'initial <=> changed',
        animate(
          '0.3s',
          keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0.5, offset: 0.5 }),
            style({ opacity: 1, offset: 1 }),
          ])
        )
      ),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @ViewChildren('bullets') bullets!: QueryList<ElementRef>;

  imgState = 'initial';
  path: string = '';
  images: string[] = [
    'clear',
    'iphone',
    'koshel',
    'modamica',
    'muxture',
    'northland',
    'propper',
    'remont',
  ];
  sliderIndex: number = Math.ceil(this.images.length / 2);
  constructor() {}
  ngOnInit(): void {
    this.path = `assets/${this.images[this.sliderIndex]}.webp`;
  }

  sliderNext() {
    this.sliderIndex = (this.sliderIndex + 1) % this.images.length;
    this.imgState = this.imgState === 'initial' ? 'changed' : 'initial';
    this.updatePath();
  }

  sliderPrev() {
    this.sliderIndex =
      this.sliderIndex === 0
        ? (this.sliderIndex = this.images.length - 1)
        : (this.sliderIndex - 1) % this.images.length;
    this.imgState = this.imgState === 'initial' ? 'changed' : 'initial';
    this.updatePath();
  }

  updatePath() {
    this.path = `assets/${this.images[this.sliderIndex]}.webp`;
  }

  clickedOnBullet(event: Event, i: number) {
    this.sliderIndex = i;
    this.updatePath();
  }
}

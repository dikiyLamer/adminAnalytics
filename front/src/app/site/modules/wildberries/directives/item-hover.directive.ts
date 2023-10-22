import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { Product } from 'src/app/shared/interfaces';

@Directive({
  selector: '[itemHover]',
})
export class ItemHoverDirective {
  @Input() product!: Product;
  button = this.renderer.createElement('button');

  slideshowInterval: any;
  slideshowCount: number = 0;

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onHoverToElement() {
    this.button.textContent = 'В корзину';

    this.renderer.addClass(this.button, 'hover-button');
    this.renderer.addClass(this.host.nativeElement, 'wrapper-hover');
    this.renderer.setStyle(
      this.host.nativeElement.children[0].children[1],
      'display',
      'block'
    );
    this.renderer.appendChild(this.host.nativeElement, this.button);

    this.slideshowInterval = setInterval(() => {
      this.slideshowCount =
        (this.slideshowCount + 1) % this.product.images.length;
      (
        this.host.nativeElement.children[0].children[0] as HTMLImageElement
      ).src = this.product.images[this.slideshowCount];
    }, 1000);
  }

  @HostListener('mouseleave')
  onBlurElement() {
    clearInterval(this.slideshowInterval);
    this.renderer.setStyle(
      this.host.nativeElement.children[0].children[1],
      'display',
      'none'
    );
    this.slideshowCount = 0;
    (this.host.nativeElement.children[0].children[0] as HTMLImageElement).src =
      this.product.images[this.slideshowCount];
    this.renderer.removeChild(this.host.nativeElement, this.button);
    this.renderer.removeClass(this.host.nativeElement, 'wrapper-hover');
  }
}

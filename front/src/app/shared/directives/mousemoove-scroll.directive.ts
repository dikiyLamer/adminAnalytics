import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMousemooveScroll]',
})
export class MousemooveScrollDirective {
  constructor(private host: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  mouseMooved(event: MouseEvent) {
    let offsetx =
      event.pageX -
      Math.floor(this.host.nativeElement.getBoundingClientRect().x);
    let offsety =
      event.pageY -
      Math.floor(this.host.nativeElement.getBoundingClientRect().y);
    let xMin = Math.min(1, offsetx / this.host.nativeElement.clientWidth);
    let yMin = Math.min(1, offsety / this.host.nativeElement.clientHeight);
    console.log(this.host.nativeElement.clientWidth);
    this.host.nativeElement.scrollTo({
      top:
        this.host.nativeElement.clientHeight -
        this.host.nativeElement.scrollHeight +
        this.host.nativeElement.clientHeight * yMin,
      left:
        (this.host.nativeElement.scrollWidth -
          this.host.nativeElement.clientWidth) *
        xMin,
    });
  }
}

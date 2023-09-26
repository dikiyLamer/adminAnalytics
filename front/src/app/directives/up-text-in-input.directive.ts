import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appUpTextInInput]',
})
export class UpTextInInputDirective implements OnInit {
  @Input()
  appUpTextInInput!: HTMLSpanElement;
  isFocused: boolean = false;
  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.appUpTextInInput.addEventListener('mouseenter', (event) => {
      this.renderer.setStyle(
        this.appUpTextInInput,
        'color',
        'rgba(0,128,0,0.3)'
      );
    });
  }

  @HostListener('focus', ['$event'])
  focused(event: Event) {
    this.isFocused = true;
    this.renderer.setStyle(this.appUpTextInInput, 'top', '-10px');
    this.renderer.setStyle(this.appUpTextInInput, 'color', 'rgba(0,0,0,0.2');
    this.renderer.setStyle(this.appUpTextInInput, 'top', '5px');
    this.renderer.setStyle(this.appUpTextInInput, 'font-size', '12px');
  }

  @HostListener('blur', ['$event'])
  unfocused(event: Event) {
    this.isFocused = false;
    if (!this.host.nativeElement.value) {
      this.renderer.removeStyle(this.appUpTextInInput, 'top');
      this.renderer.removeStyle(this.appUpTextInInput, 'color');
      this.renderer.removeStyle(this.appUpTextInInput, 'top');
      this.renderer.removeStyle(this.appUpTextInInput, 'font-size');
    }
  }

  @HostListener('mouseenter', ['$event'])
  mouseentered(event: Event) {
    if (!this.isFocused && !this.host.nativeElement.value) {
      this.renderer.setStyle(
        this.appUpTextInInput,
        'color',
        'rgba(0, 128, 0, 0.3)'
      );
    }
  }

  @HostListener('mouseleave', ['$event'])
  mouseleaved(event: Event) {
    this.renderer.setStyle(
      this.appUpTextInInput,
      'color',
      'rgba(0, 0, 0, 0.3)'
    );
  }
}

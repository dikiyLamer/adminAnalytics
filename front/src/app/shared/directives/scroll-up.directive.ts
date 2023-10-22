import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[scrollUp]',
})
export class ScrollUpDirective implements OnInit {
  isScrollChanged: boolean = false;
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {}

  @HostListener('document:scroll', ['$event'])
  pageScrolled(event: any) {
    console.log(this.template);

    if (window.scrollY === 0) {
      this.viewContainer.clear();
      this.isScrollChanged = false;
    } else {
      if (!this.isScrollChanged) {
        this.viewContainer.createEmbeddedView(this.template);
        let targetDiv = this.template.elementRef.nativeElement.previousSibling;
        this.renderer.listen(targetDiv, 'click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        this.isScrollChanged = true;
      }
    }
  }
}

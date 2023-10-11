import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[itemHover]'
})
export class ItemHoverDirective{
    constructor(private host: ElementRef,private renderer: Renderer2){        
    }

    @HostListener('hover')
    onHoverToElement(){
        this.renderer.setStyle(this.host, 'box-shadow','10px 5px 5px black;')
    }


}
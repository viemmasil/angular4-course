import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  ngOnInit() {
    
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue');
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}

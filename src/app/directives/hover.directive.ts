import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {
  originalColor: string;
  @Input('appHover') bgColor!: string;

  constructor(private elRef: ElementRef) {
    this.originalColor = elRef.nativeElement.style.backgroundColor;
   }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elRef.nativeElement.style.backgroundColor = this.bgColor ? this.bgColor : 'lightgrey';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = this.originalColor;
  }

}

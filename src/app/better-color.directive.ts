import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterColor]'
})
export class BetterColorDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
 // @HostBinding('style.border') border: string = '1px solid black';
 // @HostBinding('style.Color') Color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
   ngOnInit(): void {
       this.renderer.setStyle(this.elRef.nativeElement, 'text-align' , 'center')
      // this.renderer.setStyle(this.elRef.nativeElement, 'border' , '1px solid black')
       this.renderer.setStyle(this.elRef.nativeElement, 'margin' , '0 auto')
       this.renderer.setStyle(this.elRef.nativeElement, 'margin-top' , '3pc')
      // this.renderer.setStyle(this.elRef.nativeElement, 'display' , 'flex')
      
      }

     // @HostListener('mouseenter') mouseover(eventData : Event) {
       // this.backgroundColor = 'orange'
       // this.Color = 'white'
    //  }

     // @HostListener('mouseleave') mouseleave(eventData : Event) {
      // this.backgroundColor = ''
      // this.Color = ''
    //  }
}
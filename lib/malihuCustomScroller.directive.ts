import { Directive, ElementRef, Renderer ,OnInit ,AfterViewInit} from '@angular/core';
declare var $:any;
@Directive({
  selector: '[malihuCustomScroller]'
})
export class MalihuCustomScrollerDirective implements OnInit, AfterViewInit{
  element : Element;
  constructor(private _ele : ElementRef,
              private _renderer : Renderer
              ) {   }

  ngOnInit(){
        this.element = $(this._ele.nativeElement);
  }

  ngAfterViewInit(){
    this.initCustomScroll();
  }

  initCustomScroll(){
    this._renderer.invokeElementMethod(this.element,'mCustomScrollbar',[{
          theme: "dark-thick",
            axis: "y"
        }]);
  }
}

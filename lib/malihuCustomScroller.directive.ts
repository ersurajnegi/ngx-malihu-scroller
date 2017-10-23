import { Directive, ElementRef, Renderer, EventEmitter, OnInit, AfterViewInit, Input, Output } from '@angular/core';
declare var $: any;
@Directive({
  selector: '[malihuCustomScroller]'
})
export class MalihuCustomScrollerDirective implements OnInit, AfterViewInit {
  @Input() scrollOptions: any;
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  @Output() onInit: EventEmitter<any> = new EventEmitter();
  @Output() onScrollStart: EventEmitter<any> = new EventEmitter();
  @Output() onScroll: EventEmitter<any> = new EventEmitter();
  @Output() whileScrolling: EventEmitter<any> = new EventEmitter();
  @Output() onTotalScroll: EventEmitter<any> = new EventEmitter();
  @Output() onTotalScrollBack: EventEmitter<any> = new EventEmitter();
  element: Element;
  constructor(private _ele: ElementRef,
    private _renderer: Renderer
  ) { }

  ngOnInit() {
    this.generateOptions();
    this.element = $(this._ele.nativeElement);
  }
  ngAfterViewInit() {
    this.initCustomScroll();
  }
  generateOptions() {
    this.scrollOptions ? '' : this.scrollOptions = {};
    this.scrollOptions.callbacks = this.getCallbackOptions();
  }
  getCallbackOptions() {
    return {
      onCreate: this.onCreateCallback.bind(this),
      onInit: this.onInitCallback.bind(this),
      onScrollStart: this.onScrollStartCallback.bind(this),
      onScroll: this.onScrollCallback.bind(this),
      whileScrolling: this.whileScrollingCallback.bind(this),
      onTotalScroll: this.onTotalScrollCallback.bind(this),
      onTotalScrollBack: this.onTotalScrollBackCallback.bind(this),
    };
  }
  initCustomScroll() {
    this._renderer.invokeElementMethod(this.element, 'mCustomScrollbar', [this.scrollOptions]);
  }

  destroyCustomScroll() {
    this._renderer.invokeElementMethod(this.element, 'mCustomScrollbar', ['destroy']);
  }
  onTotalScrollCallback() {
    this.onTotalScroll.emit();
  }
  onCreateCallback() {
    this.onCreate.emit();
  }
  onInitCallback() {
    this.onInit.emit();
  }
  onScrollStartCallback() {
    this.onScrollStart.emit();
  }
  onScrollCallback() {
    this.onScroll.emit();
  }
  whileScrollingCallback() {
    this.whileScrolling.emit();
  }
  onTotalScrollBackCallback() {
    this.onTotalScrollBack.emit();
  }
  ngOnDestroy() {
    this.destroyCustomScroll();
  }
}

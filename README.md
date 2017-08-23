# ngx-malihu-scroller

Custom wrapper for malihu custom srcoller for Angular.

## Getting Started

### Dependencies

1. Jquery
2. Malihu Custom Scroller

### Installing
`npm i ngx-malihu-scroller`

## Usage:

### With angular-cli:

=> Update the  `styles` and `Scripts` arrays in `angular-cli.json`:
```
  "styles": [
        "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css",
        "styles.css"
      ],
  "scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/jquery-mousewheel/jquery.mousewheel.js",
    "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"
  ]
```
=> Import `MalihuCustomScrollerModule` into your `Angular Module` : 

```
  import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
```
=> Add `MalihuCustomScrollerModule' to 'imports' array :

```
imports: [    MalihuCustomScrollerModule  ]
```
=> Then Use directive `malihuCustomScroller` to the DOM element where you need the scroller :
  
      a. With Default Options :
      ```
        <div  malihuCustomScroller></div>
      ```
      b. With your Custom Options :       
      You need to pass `scrollOptions` as an `@Input` to the `malihuCustomScroller` as below :
      ```
        <div  malihuCustomScroller [scrollOptions]="customOptions"></div>
      ```

For full Customization options, [click here](http://manos.malihu.gr/jquery-custom-content-scroller/#configuration-section).

## Events Handlers
=> You can subcribe to the below events of the directive:

 `Event Name` | `Usage` | `Event trigggers`
--- | --- | ---
*onCreate* | `malihuCustomScroller [scrollOptions]="customOptions" (onCreate)="yourFunction()"` | **when plugin markup is created**
*onInit* | `malihuCustomScroller [scrollOptions]="customOptions" (onInit)="yourFunction()"` | **when scrollbars have initialized**
*onScrollStart* | `malihuCustomScroller [scrollOptions]="customOptions" (onScrollStart)="yourFunction()"` | **the moment a scroll event starts**
*onScroll* | `malihuCustomScroller [scrollOptions]="customOptions" (onScroll)="yourFunction()"` | **when a scroll event completes**
*whileScrolling* | `malihuCustomScroller [scrollOptions]="customOptions" (whileScrolling)="yourFunction()"` | **while scroll event is running**
*onTotalScroll* | `malihuCustomScroller [scrollOptions]="customOptions" (onTotalScroll)="yourFunction()"` | **when content has scrolled all the way to bottom or right**
*onTotalScrollBack* | `malihuCustomScroller [scrollOptions]="customOptions" (onTotalScrollBack)="yourFunction()"` | **triggers when content has scrolled all the way back to top or left**

 
## Demo
Please [click here](https://ersurajnegi.github.io/ngxMalihuScrollerDemo/) for Demo.

## Contributors

* [Suraj Negi](https://github.com/ersurajnegi)

## Repository
* [Ngx Malihu Scroller](https://github.com/ersurajnegi/ngx-malihu-scroller)


## Acknowledgments

* [Malihu](http://manos.malihu.gr/jquery-custom-content-scroller)

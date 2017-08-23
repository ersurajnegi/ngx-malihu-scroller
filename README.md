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

1. Update the  `styles` and `Scripts` arrays in `angular-cli.json`:
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
2. Import `MalihuCustomScrollerModule` into your `Angular Module` : 

```
  import { MalihuCustomScrollerModule } from 'ngx-malihu-scroller';
```
3. Add `MalihuCustomScrollerModule' to 'imports' array :

```
imports: [    MalihuCustomScrollerModule  ]
```
4. Then Use directive `malihuCustomScroller` to the DOM element where you nedd the scroller :

```
  <div  malihuCustomScroller > </div>
```

## Demo
Please [click here](https://ersurajnegi.github.io/ngxMalihuScrollerDemo/) for Demo.

## Contributors

* [Suraj Negi](https://github.com/ersurajnegi)

## Repository
* [Ngx Malihu Scroller](https://github.com/ersurajnegi/ngx-malihu-scroller)


## Acknowledgments

* [Malihu](http://manos.malihu.gr/jquery-custom-content-scroller)

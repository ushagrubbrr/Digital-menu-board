(self["webpackChunkmdb_angular_free"] = self["webpackChunkmdb_angular_free"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _templatefour_templatefour_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templatefour/templatefour.component */ 631);
/* harmony import */ var _templateone_templateone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templateone/templateone.component */ 3161);
/* harmony import */ var _templatetwo_templatetwo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templatetwo/templatetwo.component */ 2274);
/* harmony import */ var _templatethree_templatethree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templatethree/templatethree.component */ 7132);





class AppComponent {
    constructor() {
        this.title = 'mdb-angular-free';
        this.successAlert = false;
    }
    copyToClipboard(value) {
        const tempInput = document.createElement("input");
        tempInput.value = value;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        this.successAlert = true;
        setTimeout(() => {
            this.successAlert = false;
        }, 900);
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "wrapper"], ["id", "main"], ["id", "slider"], ["id", "layerslider_4", 1, "ls-wp-container", 2, "width", "100%", "height", "1080px", "max-width", "1920px", "margin", "0 auto", "margin-bottom", "0px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](4, "app-templatefour");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](5, "app-templateone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](6, "app-templatetwo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](7, "app-templatethree");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
    } }, directives: [_templatefour_templatefour_component__WEBPACK_IMPORTED_MODULE_0__.TemplatefourComponent, _templateone_templateone_component__WEBPACK_IMPORTED_MODULE_1__.TemplateoneComponent, _templatetwo_templatetwo_component__WEBPACK_IMPORTED_MODULE_2__.TemplatetwoComponent, _templatethree_templatethree_component__WEBPACK_IMPORTED_MODULE_3__.TemplatethreeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ 8881);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _templateone_templateone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templateone/templateone.component */ 3161);
/* harmony import */ var _templatetwo_templatetwo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templatetwo/templatetwo.component */ 2274);
/* harmony import */ var _templatethree_templatethree_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templatethree/templatethree.component */ 7132);
/* harmony import */ var _templatefour_templatefour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templatefour/templatefour.component */ 631);
/* harmony import */ var _templatefive_templatefive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templatefive/templatefive.component */ 707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);












class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__.MDBBootstrapModule.forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _templateone_templateone_component__WEBPACK_IMPORTED_MODULE_1__.TemplateoneComponent,
        _templatetwo_templatetwo_component__WEBPACK_IMPORTED_MODULE_2__.TemplatetwoComponent,
        _templatethree_templatethree_component__WEBPACK_IMPORTED_MODULE_3__.TemplatethreeComponent,
        _templatefour_templatefour_component__WEBPACK_IMPORTED_MODULE_4__.TemplatefourComponent,
        _templatefive_templatefive_component__WEBPACK_IMPORTED_MODULE_5__.TemplatefiveComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__.MDBRootModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


/***/ }),

/***/ 707:
/*!********************************************************!*\
  !*** ./src/app/templatefive/templatefive.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatefiveComponent": function() { return /* binding */ TemplatefiveComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplatefiveComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplatefiveComponent.??fac = function TemplatefiveComponent_Factory(t) { return new (t || TemplatefiveComponent)(); };
TemplatefiveComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TemplatefiveComponent, selectors: [["app-templatefive"]], decls: 0, vars: 0, template: function TemplatefiveComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 631:
/*!********************************************************!*\
  !*** ./src/app/templatefour/templatefour.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatefourComponent": function() { return /* binding */ TemplatefourComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplatefourComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplatefourComponent.??fac = function TemplatefourComponent_Factory(t) { return new (t || TemplatefourComponent)(); };
TemplatefourComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TemplatefourComponent, selectors: [["app-templatefour"]], decls: 5, vars: 0, consts: [[1, "ls-slide", "introslide", 2, "z-index", "220", "margin-left", "0px", "margin-top", "0px", "width", "460px", "height", "460px", "left", "730px", "top", "310px", "transform", "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)", "transform-origin", "50% 50% 0px", "opacity", "1", "display", "none"], ["src", "../../assets/images/burger/banner.jpg", "alt", "Slide background", 1, "ls-bg", 2, "width", "100% !important", "top", "-100px", "left", "0"], ["src", "../../assets/images/burger/logo.svg", "alt", "", "data-ls", "delayin:1000;easingin:easeOutQuint;fadein:false;scalexin:1.75;scaleyin:1.75;offsetxout:-120;durationout:2000;startatout:slidechangeonly + ;easingout:easeInQuint;rotateout:-15;", "data-ls-slidein", "1", "data-ls-slideout", "1", 1, "ls-layer", "logo", 2, "z-index", "auto", "top", "310px", "left", "30px", "width", "460px", "height", "460px", "margin", "0px", "background", "#fcd920 !important", "padding", "45px 24px 30px", "border-width", "0px", "border-radius", "0px", "filter", "none"], ["data-ls", "delayin:1500; offsetxin: 0; offsetyin:-10%; easingin:easeOutElastic; durationin:2500; offsetxout:0; offsetyout: -100%;", 1, "ls-l", 2, "font-weight", "bold", "border-radius", "0 0 50% 50%", "font-size", "4rem", "font-family", "ConduitITCStd", "width", "25%", "color", "white", "left", "31%", "top", "75%", "text-align", "center", "text-transform", "uppercase"]], template: function TemplatefourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Best Burger in Town");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".introslide[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background: #fcd920;\n  padding: 45px 24px 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlZm91ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUFBUiIsImZpbGUiOiJ0ZW1wbGF0ZWZvdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9zbGlkZXtcclxuICAgIC5sb2dve1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmY2Q5MjA7XHJcbiAgICAgICAgcGFkZGluZzogNDVweCAyNHB4IDMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3161:
/*!******************************************************!*\
  !*** ./src/app/templateone/templateone.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateoneComponent": function() { return /* binding */ TemplateoneComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplateoneComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplateoneComponent.??fac = function TemplateoneComponent_Factory(t) { return new (t || TemplateoneComponent)(); };
TemplateoneComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TemplateoneComponent, selectors: [["app-templateone"]], decls: 164, vars: 0, consts: [["data-ls", "slidedelay:7000; transition2d: all;", 1, "ls-slide"], ["src", "../assets/images/bg1.jpg", "alt", "Slide background", 1, "ls-bg"], [1, "row", "ls-l", 2, "left", "50% !important", "width", "27% !important", "height", "100vh", "padding", "0 !important", "background", "#000"], ["data-ls", "durationin: 2000; delayin: 20; offsetxout:0; ", 1, "row", "position-relative", "align-items-center", "overflow-hidden", "h-100", "w-100"], ["src", "../../assets/images/burger/coffeesmoke.gif", "data-ls", "durationin: 2000; ", 1, "w-auto", "h-100vh"], [1, "row", "ls-l", 2, "left", "19% !important", "width", "38% !important", "background", "#f4f4f4"], ["data-ls", "durationin: 2000; delayin: 20; offsetxout:0; ", 2, "top", "20%", "font-size", "250%", "height", "100vh", "left", "0%", "color", "#000", "text-align", "center", "padding", "0"], [1, "heading"], [1, "sub-heading"], [1, "row", "position-relative", "align-items-center", "whole", "p-5"], [1, "col-4", "text-right", "row"], ["src", "../assets/images/beverage.png", 1, "w-50"], ["src", "../assets/images/water-glass.png", 1, "w-50"], [1, "col-7", "offset-1", "text-left"], [1, "row"], [1, "col-4", "price", "p-0"], [1, "border"], [1, "col-12", "menus"], [1, "row", "ls-l", 2, "left", "81% !important", "width", "38% !important", "background", "#f4f4f4", "height", "100vh", "padding", "0"], ["data-ls", "durationin: 2000; delayin: 200; offsetxout:0;", 2, "top", "20%", "font-size", "250%", "left", "0%", "color", "#000", "text-align", "center", "padding", "0"], [1, "sub-heading1"], [1, "menu-head"], [1, "row", "position-relative", "whole", "pl-3rem", "pt-1rem"], [1, "col-4", "text-right", "row", "mini-list"], [1, "border-line"], [1, "col-8", "text-right"], [1, "row", "font-size-2rem"], [1, "col-4", "offset-4"], [1, "col-4"], [1, "menu-head1"], [1, "row", "position-relative", "whole", "pl-3rem"], [1, "col-10", "text-right", "row", "mini-list"], [1, "text-left", "font-size-15rem"], [1, "col-2", "text-right"]], template: function TemplateoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "THIRSTY?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "CUSTOM FROZEN BLENDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "20 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "$3.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "16 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "$2.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "12 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "$2.79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Smoothies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Mango, Banana, Strawberry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Frappes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Mango, Banana, Strawberry, Cookies and Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Cold Brew");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Mango, Banana, Strawberry, Cookies and Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Frozen Lemonade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Mango, Banana & Strawberry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Fruit Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Mango, Banana & Strawberry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Chocolate Cream");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Mango, Banana & Strawberry ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "THRISTY?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "CUSTOM COFFEE & TEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Espresso Specialty Drinks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Espresso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Cappuccino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Latte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Macchiato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "20 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "$3.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "16 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "$2.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "12 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "$2.79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](104, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, "Coffee & Hot Chocolate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "Specialty Cafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "Americano");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "Hot Chocolate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "20 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "$3.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "16 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "$2.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "12 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "$2.79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Organic Teas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](147, "16 oz.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](149, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](150, "$1.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](153, "Flabour Shots");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "First Shot Free, Second Shot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](159, "* Add custom flavours to all items: Vanilla, Sugar Free, Vanilla, Hazelnut, Caramel, Pure Came Syrub, Peanut, Butter, Cool Mint, Macha, Cookies & Cream, Seasonal Syrup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "$.49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7132:
/*!**********************************************************!*\
  !*** ./src/app/templatethree/templatethree.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatethreeComponent": function() { return /* binding */ TemplatethreeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplatethreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplatethreeComponent.??fac = function TemplatethreeComponent_Factory(t) { return new (t || TemplatethreeComponent)(); };
TemplatethreeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TemplatethreeComponent, selectors: [["app-templatethree"]], decls: 282, vars: 0, consts: [["data-ls", "slidedelay:7000; transition2d: all;", 1, "ls-slide", "t3", 2, "background", "#2d3436"], ["data-ls", "offsetxin:0;offsetyin:150;delayin:2000;easingin:swing;offsetxout:0;offsetyout:-150;parallaxlevel:3;", 1, "row", "ls-l", 2, "left", "35% !important", "width", "70% !important"], ["data-ls", "durationin: 2000; delayin: 200; offsetxout:0;    width: 100%;", 2, "top", "20%", "font-size", "250%", "padding-bottom", "13px !important", "border-bottom", "10px solid #fc0", "width", "100%", "left", "0%", "padding", "0", "color", "#000", "text-align", "center"], [1, "heading1-text", 2, "border-top", "10px solid #cf0306"], [1, "row", "position-relative", "align-items-center", "whole", "plr-10"], [1, "col-3", "text-right"], [1, "text-left"], [1, "col-3", "text-right", "row"], [1, "price", "text-left", "col-4", "fw-bold"], [1, "price", "text-left", "col-8"], [1, "text-left", "fw-bold", "item-name-font"], [1, "price", "text-left", "col-4", "fw-bold", "red-text"], [1, "heading1-text", "mt-3", 2, "border-top", "10px solid #cf0306", "padding-bottom", "36px"], [1, "col-4", "text-right", "row"], [1, "text-left", "col-6"], [1, "price", "text-right", "col-6"], [1, "text-left", "col-6", "fw-bold", "item-name-font"], ["data-ls", "offsetxin:0;offsetyin:80;delayin:500;offsetxout:0;offsetyout:-80;", 1, "row", "ls-l", 2, "left", "85% !important", "width", "30% !important", "height", "100%"], ["data-ls", "durationin: 2000; delayin: 200; offsetxout:0;    width: 100%;", 2, "top", "20%", "font-size", "250%", "height", "100%", "background", "#fcd920", "right", "0%", "color", "#000", "text-align", "center"], ["data-ls", "offsetxin:0;offsetyin:200;delayin:3500;offsetxout:0;offsetyout:150;", 1, "row", "position-relative", "align-items-center", "overflow-hidden", "h-100", "w-100"], ["src", "../assets/images/burger/choco.gif", 1, "w-auto", "h-100vh"]], template: function TemplatethreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "CREATE YOUR OWN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "LRG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "REG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "MED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Sundaes*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Concretes*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Shakes & Malts*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "TRIPLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "DOUBLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "SINGLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](100, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Cone or Dish*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Waffle Cone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "312-410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](146, "TOPPINGS & MIXINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Mini - lg Cals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](154, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "Mini - lg Cals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](158, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](159, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "Mini - lg Cals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Oreo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](172, "M&M's*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](173, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](178, "Butterfinger*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](179, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](181, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](182, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](185, "Hot Fudge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](186, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](188, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](190, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](191, "Strawberry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](194, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "Banana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](200, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](201, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "Marshmellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](207, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](208, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](209, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](210, "Rainbow sprinkles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](216, "Butterfinger*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](222, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](223, "Oreo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](225, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](226, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](227, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](229, "M&M's*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](230, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](232, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](234, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](235, "Butterfinger*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](236, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](238, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](242, "Oreo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](243, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](245, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](246, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](248, "M&M's*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](249, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Butterfinger*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](255, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](257, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](258, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](260, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](261, "Oreo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](262, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](264, "410 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](267, "M&M's*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](268, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](270, "342 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](271, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](273, "Butterfinger*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](274, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "123 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](277, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](279, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](280, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](281, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: [".t3[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRldGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoidGVtcGxhdGV0aHJlZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50MyBoM3tcclxuICAgIGNvbG9yOiNmZmYgO1xyXG59Il19 */"] });


/***/ }),

/***/ 2274:
/*!******************************************************!*\
  !*** ./src/app/templatetwo/templatetwo.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplatetwoComponent": function() { return /* binding */ TemplatetwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class TemplatetwoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TemplatetwoComponent.??fac = function TemplatetwoComponent_Factory(t) { return new (t || TemplatetwoComponent)(); };
TemplatetwoComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TemplatetwoComponent, selectors: [["app-templatetwo"]], decls: 316, vars: 0, consts: [["data-ls", "slidedelay:7000; transition2d: all;", 1, "ls-slide", "rev2"], ["src", "../assets/images/bg1.jpg", "alt", "Slide background", 1, "ls-bg", 2, "width", "100% !important", "top", "0", "left", "0"], [1, "row", "ls-l", 2, "left", "15% !important", "width", "30% !important"], ["data-ls", "durationin: 2000; delayin: 200; offsetxout:0;    width: 100%;", 2, "top", "20%", "font-size", "250%", "left", "0%", "color", "#000", "text-align", "center", "padding", "0"], [1, "heading1"], [1, "row", "position-relative", "align-items-center", "whole", "plr-10"], [1, "col-4", "text-right"], ["src", "../assets/images/burger.png", 1, "w-100"], [1, "col-8", "text-left"], [1, "item-name"], [1, "text-left", "item-name-font"], [1, "price"], ["src", "../assets/images/product-1.png", 1, "w-100"], [1, "heading1", "mt-3"], [1, "row", "position-relative", "align-items-center", "plr-20"], [1, "col-12"], [1, "text-left", "fw-bold", "item-name-font"], [1, "col-6", "text-left"], [1, "red-text"], [1, "col-6", "text-right"], ["src", "../assets/images/roll.png", 1, "w-100"], ["src", "../assets/images/onionrings.png", 1, "w-100"], [1, "col-7"], [1, "col-2"], [1, "price", "fw-bold"], [1, "col-3"], [1, "row", "ls-l", 2, "left", "85% !important", "width", "30% !important", "padding", "0"], [1, "col-6"], [1, "col-4"], [1, "heading1", "mt-5"], ["src", "../../assets/images/burger.png", 1, "w-60"], [1, "row", "ls-l", 2, "left", "50% !important", "width", "40% !important", "background", "#f8f7f2", "padding", "0"], [1, "heading2"], ["data-ls", "offsetxin:0;offsetyin:200;delayin:3500;offsetxout:0;offsetyout:150;", 1, "row", "position-relative", "align-items-center", "plr-20"], [1, "col-6", "position-relative"], [1, "row"], [1, "non-veg"], [1, "col-10", "text-left"], [1, "fw-bold", "item-name-font"], [1, "col-7", "text-right", "red-text"], [1, "col-5", "text-left", "price", "fw-bold"], ["src", "../assets/images/combo.png", "alt", ""], [1, "veg"], ["data-ls", "offsetxin:0;offsetyin:80;delayin:500;offsetxout:0;offsetyout:-80;", 1, "row", "position-relative", "align-items-center", "plr-20"], [1, "bg-black", "col-12"]], template: function TemplatetwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "FAVOURITES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Angus Beef");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Chicken Wings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "6Pcs 4.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "12Pcs 6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "410-620 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "SIDES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Chicken Cheese Wrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "LRG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "REG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, "6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Onion Rings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "LRG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "h4", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "REG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "6.99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Sweet Potato Fries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "6.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Styled Fries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "6.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Half & Half");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "6.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "KIDS COMBO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "5.09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "440-390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "Cheese Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "5.79");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](137, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](138, "390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](139, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](142, "Chicken Tenders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "5.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "270-390 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](151, "EXTRAS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, "Cheese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, ".70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "50 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](164, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](166, "Bacon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](167, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](168, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](169, ".90");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](170, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](171, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](172, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](173, "80 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](174, "h2", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](175, "DRINKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](176, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](177, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](178, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](179, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](180, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](181, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](182, "2.49");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](183, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](184, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](186, "0.490 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](187, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](188, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](189, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](190, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](191, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](192, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](193, "2.29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](194, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](195, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](197, "0.290 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](198, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](199, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](200, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](201, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](202, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](203, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](204, "1.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](205, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](206, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](208, "0.199 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](209, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](210, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](211, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](212, "h2", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](213, "COMBO DEALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](214, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](215, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](216, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](217, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](218, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](219, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](220, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](221, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](222, "Double Cheese Chicken Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](223, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](224, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](225, "Combo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](226, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](227, "9.29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](228, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](229, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](230, "Sandwich Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](232, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](234, "760 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](235, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](236, "6.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](237, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](238, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](239, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](240, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](241, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](242, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](243, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](244, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](245, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](246, "Double Cheese Veg Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](247, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](248, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](249, "Combo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](250, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](251, "9.29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](252, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](253, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](254, "Sandwich Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](256, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](257, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](258, "760 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](259, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](260, "6.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](261, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](262, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](263, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](264, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](265, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](266, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](267, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](268, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](269, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](270, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](271, "Double Cheese Beef Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](272, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](273, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](274, "Combo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](275, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](276, "9.29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](277, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](278, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](279, "Sandwich Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](280, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](281, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](282, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](283, "760 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](284, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](285, "6.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](286, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](287, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](288, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](289, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](290, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](291, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](292, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](293, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](294, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](295, "Double Cheese Bacon Burger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](296, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](297, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](298, "Combo*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](299, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](300, "9.29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](301, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](302, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](303, "Sandwich Only");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](304, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](305, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](306, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](307, "760 Cal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](308, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](309, "6.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](310, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](311, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](312, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](313, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](314, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](315, "2,000 Calories a day is used for general nutrition advice, but Calorie needs vary. Additional nutrition information available upon request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
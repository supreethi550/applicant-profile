"use strict";
(self["webpackChunkapplicant_profile_app"] = self["webpackChunkapplicant_profile_app"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _applicant_list_applicant_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicant-list/applicant-list.component */ 4208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const appRoutes = [{
  path: '',
  component: _applicant_list_applicant_list_component__WEBPACK_IMPORTED_MODULE_0__.AvatarListComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class AppComponent {
  constructor() {
    this.title = 'applicant-profile-app';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 19,
    vars: 0,
    consts: [[1, "header"], [1, "container"], ["href", "javascript:void(0)"], ["router-link", "/"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " INMAR Intelligence");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav")(5, "ul")(6, "li")(7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: white;\n  padding: 15px 0;\n}\n\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: flex;\n  gap: 15px;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  padding: 5px 10px;\n}\n\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #575757;\n  border-radius: 4px;\n}\n\n\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    margin-top: 10px;\n  }\n\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG4uaGVhZGVyIC5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgbmF2IHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgbmF2IHVsIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgbmF2IHVsIGxpIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NTc7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4vKiByZXNwb25zaXZlbmVzcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaGVhZGVyIC5jb250YWluZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBuYXYgdWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIgbmF2IHVsIGxpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhlYWRlciBuYXYgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _applicant_list_applicant_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applicant-list/applicant-list.component */ 4208);
/* harmony import */ var _applicant_profile_edit_modal_applicant_profile_edit_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applicant-profile-edit-modal/applicant-profile-edit-modal.component */ 984);
/* harmony import */ var _applicant_card_applicant_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applicant-card/applicant-card.component */ 3060);
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pop-over/pop-over.component */ 5994);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _applicant_list_applicant_list_component__WEBPACK_IMPORTED_MODULE_2__.AvatarListComponent, _applicant_profile_edit_modal_applicant_profile_edit_modal_component__WEBPACK_IMPORTED_MODULE_3__.ProfileEditModalComponent, _applicant_card_applicant_card_component__WEBPACK_IMPORTED_MODULE_4__.AvatarCardComponent, _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_5__.PopOverComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule]
  });
})();

/***/ }),

/***/ 3060:
/*!************************************************************!*\
  !*** ./src/app/applicant-card/applicant-card.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarCardComponent: () => (/* binding */ AvatarCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _applicant_profile_edit_modal_applicant_profile_edit_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../applicant-profile-edit-modal/applicant-profile-edit-modal.service */ 2624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function AvatarCardComponent_div_8_span_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AvatarCardComponent_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AvatarCardComponent_div_8_span_3_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", skill_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx_r2.avatar.skills == null ? null : ctx_r2.avatar.skills.length) > 1 && (ctx_r2.avatar.skills == null ? null : ctx_r2.avatar.skills.length) - i_r2 !== 1);
  }
}
function AvatarCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AvatarCardComponent_div_8_span_3_Template, 3, 2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.avatar.skills);
  }
}
class AvatarCardComponent {
  constructor(profileEditModalService) {
    this.profileEditModalService = profileEditModalService;
  }
  openEditModal() {
    this.profileEditModalService.openModal(this.avatar);
  }
  static #_ = this.ɵfac = function AvatarCardComponent_Factory(t) {
    return new (t || AvatarCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_applicant_profile_edit_modal_applicant_profile_edit_modal_service__WEBPACK_IMPORTED_MODULE_0__.ProfileEditModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AvatarCardComponent,
    selectors: [["app-applicant-card"]],
    inputs: {
      avatar: "avatar"
    },
    decls: 9,
    vars: 3,
    consts: [[1, "card"], ["alt", "Avatar", 3, "src"], [1, "container"], [1, "btn", "btn-outline-secondary", 3, "click"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
    template: function AvatarCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "h4")(4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AvatarCardComponent_Template_button_click_6_listener() {
          return ctx.openEditModal();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AvatarCardComponent_div_8_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.avatar.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.avatar.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.avatar.skills);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".card[_ngcontent-%COMP%] {\n  width: 300px;\n  min-height: 350px;\n  max-height: 450px;\n  height: auto;\n  margin: 15px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: 0.8s;\n  background-color: #f1f1f1;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  width: 60%;\n  height: auto;\n  border-radius: 50%;\n  border: #ffffff 8px solid;\n  margin: 1rem auto;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 2px;\n  padding-bottom: 10px;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  cursor: pointer;\n  text-align: center;\n  font-size: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwbGljYW50LWNhcmQvYXBwbGljYW50LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICBtYXgtaGVpZ2h0OiA0NTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiAwLjhzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6ICNmZmZmZmYgOHB4IHNvbGlkO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4208:
/*!************************************************************!*\
  !*** ./src/app/applicant-list/applicant-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvatarListComponent: () => (/* binding */ AvatarListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _applicant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../applicant.service */ 6045);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _applicant_profile_edit_modal_applicant_profile_edit_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../applicant-profile-edit-modal/applicant-profile-edit-modal.component */ 984);
/* harmony import */ var _applicant_card_applicant_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../applicant-card/applicant-card.component */ 3060);






function AvatarListComponent_app_applicant_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-applicant-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("skillsUpdated", function AvatarListComponent_app_applicant_card_1_Template_app_applicant_card_skillsUpdated_0_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.updateSkills(i_r2, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const avatar_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("avatar", avatar_r4);
  }
}
class AvatarListComponent {
  constructor(applicantService) {
    this.applicantService = applicantService;
    this.avatars = [];
    this.isOpenEditModal = false;
  }
  ngOnInit() {
    this.applicantService.getUserDetails().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).subscribe(data => {
      this.avatars = data.map(user => ({
        name: user.name,
        email: user.email,
        avatar: `https://api.dicebear.com/8.x/avataaars/svg?seed=${user.username}`
      }));
    });
  }
  updateSkills(index, skills) {
    this.avatars[index].skills = skills;
  }
  static #_ = this.ɵfac = function AvatarListComponent_Factory(t) {
    return new (t || AvatarListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_applicant_service__WEBPACK_IMPORTED_MODULE_0__.ApplicantService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AvatarListComponent,
    selectors: [["applicant-list"]],
    decls: 3,
    vars: 1,
    consts: [[1, "applicant-list"], [3, "avatar", "skillsUpdated", 4, "ngFor", "ngForOf"], [3, "skillsUpdated", "avatar"]],
    template: function AvatarListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AvatarListComponent_app_applicant_card_1_Template, 1, 1, "app-applicant-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-applicant-profile-edit-modal");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.avatars);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _applicant_profile_edit_modal_applicant_profile_edit_modal_component__WEBPACK_IMPORTED_MODULE_1__.ProfileEditModalComponent, _applicant_card_applicant_card_component__WEBPACK_IMPORTED_MODULE_2__.AvatarCardComponent],
    styles: [".applicant-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwbGljYW50LWxpc3QvYXBwbGljYW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcGxpY2FudC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 984:
/*!****************************************************************************************!*\
  !*** ./src/app/applicant-profile-edit-modal/applicant-profile-edit-modal.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileEditModalComponent: () => (/* binding */ ProfileEditModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _applicant_profile_edit_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applicant-profile-edit-modal.service */ 2624);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pop-over/pop-over.component */ 5994);






function ProfileEditModalComponent_tr_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.getSkillErrorMessages(i_r4, "name"), " ");
  }
}
function ProfileEditModalComponent_tr_40_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.getSkillErrorMessages(i_r4, "rating"), " ");
  }
}
function ProfileEditModalComponent_tr_40_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "app-pop-over", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("action", function ProfileEditModalComponent_tr_40_div_10_Template_app_pop_over_action_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onPopoverAction($event, i_r4));
    })("closePopover", function ProfileEditModalComponent_tr_40_div_10_Template_app_pop_over_closePopover_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.popoverIndex = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("skill", skill_r3);
  }
}
function ProfileEditModalComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 31)(1, "td")(2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function ProfileEditModalComponent_tr_40_Template_input_keypress_2_listener($event) {
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const skill_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onKeyUp($event, skill_r3, i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileEditModalComponent_tr_40_div_3_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td")(5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keypress", function ProfileEditModalComponent_tr_40_Template_input_keypress_5_listener($event) {
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const skill_r3 = ctx_r5.$implicit;
      const i_r4 = ctx_r5.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onKeyUp($event, skill_r3, i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProfileEditModalComponent_tr_40_div_6_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_tr_40_Template_button_click_8_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.popoverIndex = i_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProfileEditModalComponent_tr_40_div_10_Template, 2, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const skill_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ((tmp_4_0 = skill_r3.get("action")) == null ? null : tmp_4_0.value) === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.formSubmitted && ((tmp_5_0 = skill_r3.get("name")) == null ? null : tmp_5_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ((tmp_6_0 = skill_r3.get("action")) == null ? null : tmp_6_0.value) === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.formSubmitted && ((tmp_7_0 = skill_r3.get("rating")) == null ? null : tmp_7_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.popoverIndex === i_r4);
  }
}
class ProfileEditModalComponent {
  constructor(fb, profileEditModalService) {
    this.fb = fb;
    this.profileEditModalService = profileEditModalService;
    this.searchType = 'skill';
    this.searchText = '';
    this.formSubmitted = false;
    this.isFilteredSearch = false;
    this.popoverIndex = null;
    this.skillsForm = this.fb.group({
      skills: this.fb.array([])
    });
    this.subscription = this.profileEditModalService.openModal$.subscribe(avatar => {
      this.avatar = avatar;
      this.searchText = '';
      this.setSkills(avatar.skills || []);
      this.openModal();
    });
  }
  ngOnInit() {}
  get skills() {
    return this.skillsForm.get('skills');
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addSkill() {
    this.formSubmitted = true;
    const newSkill = this.skillsForm.get('skills');
    if (newSkill.valid) {
      this.addSkillToForm(newSkill);
      this.formSubmitted = false;
    }
  }
  addSkillToForm(skill) {
    const skillGroup = this.fb.group({
      name: [skill.value.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      rating: [skill.value.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(5)]],
      action: ['apply']
    });
    this.skills.push(skillGroup);
  }
  updateSkill(index) {
    const skill = this.skills.at(index);
    if (skill.valid) {
      if (skill.value.action === 'apply') {
        skill.patchValue({
          action: 'edit'
        });
      } else if (skill.value.action === 'edit') {
        skill.patchValue({
          action: 'update'
        });
      } else if (skill.value.action === 'update') {
        skill.patchValue({
          action: 'edit'
        });
      }
    } else {
      skill.markAllAsTouched();
      this.formSubmitted = true;
    }
  }
  deleteSkill(index) {
    this.skills.removeAt(index);
  }
  onApply() {
    if (this.skillsForm.valid) {
      if (!this.isFilteredSearch) {
        this.avatar.skills = this.skills.controls.map(control => control.value);
      }
      this.isFilteredSearch = false;
      this.closeModal();
    } else {
      this.skillsForm.markAllAsTouched();
    }
  }
  onCancel() {
    this.isFilteredSearch = false;
    this.closeModal();
  }
  openModal() {
    const modal = document.getElementById('profileEditModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
  closeModal() {
    const modal = document.getElementById('profileEditModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  setSkills(skills) {
    const skillsArray = this.skillsForm.get('skills');
    skillsArray.clear();
    skills.forEach(skill => {
      skillsArray.push(this.fb.group({
        name: [skill.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-zA-Z0-9s ]{2,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(50)]],
        rating: [skill.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('^[1-5]{1}'), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(5)]],
        action: [skill.action === 'apply' ? 'edit' : skill.action]
      }));
    });
    this.nonFilteredSkills = this.avatar.skills;
    // this.nonFilteredSkills.controls = this.skills.controls;
  }
  getFilteredSkills() {
    this.isFilteredSearch = true;
    if (this.searchText) {
      if (this.searchType === 'skill') {
        this.skills.controls = this.skills.controls.filter(control => {
          const name = control.value.name || '';
          return name.includes(this.searchText);
        });
      } else {
        const rating = parseInt(this.searchText, 10);
        this.skills.controls = this.skills.controls.filter(control => {
          return control.value.rating === rating;
        });
      }
    } else {
      this.setSkills(this.nonFilteredSkills || []);
    }
  }
  onKeyUp($event, skill, index) {
    // console.log(skill.con)
    if ($event?.key === 'Enter' && $event?.charCode === 13) {
      this.onPopoverAction(skill.value.action, index);
    }
  }
  getSkillErrorMessages(index, field) {
    const skill = this.skills.at(index);
    if (skill.get(field)?.hasError('required')) {
      return 'This field is required';
    } else if (skill.get(field)?.hasError('min') || skill.get(field)?.hasError('max')) {
      return 'Rating must be between 1 and 5';
    } else if (skill.get(field)?.hasError('pattern') || skill.get(field)?.hasError('minlengtn') || skill.get(field)?.hasError('maxlength')) {
      return 'Please enter valid values';
    }
    return '';
  }
  onPopoverAction(action, index) {
    switch (action) {
      case 'apply':
      case 'update':
        this.updateSkill(index);
        break;
      case 'edit':
        this.updateSkill(index);
        break;
      case 'remove':
        this.deleteSkill(index);
        break;
    }
    this.popoverIndex = null;
  }
  static #_ = this.ɵfac = function ProfileEditModalComponent_Factory(t) {
    return new (t || ProfileEditModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_applicant_profile_edit_modal_service__WEBPACK_IMPORTED_MODULE_0__.ProfileEditModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ProfileEditModalComponent,
    selectors: [["app-applicant-profile-edit-modal"]],
    decls: 49,
    vars: 5,
    consts: [["id", "profileEditModal", 1, "modal"], [1, "modal-dialog", "modal-xl", "modal-dialog-scrollable"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "d-flex"], ["alt", "Avatar", 1, "profile-image", "me-3", 3, "src"], [1, "flex-fill"], [1, "flex-row"], [1, "mb-3", "width-30", "mr-2"], ["for", "searchTypeSelect", 1, "form-label"], ["id", "searchTypeSelect", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "skill"], ["value", "rating"], [1, "mb-3", "mr-2"], ["for", "searchInput", 1, "form-label"], ["id", "searchInput", "type", "text", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mt-1.7"], [1, "btn", "btn-outline-secondary", "mb-3", 3, "click"], [1, "skill-table-container"], [3, "formGroup"], [1, "table"], ["formArrayName", "skills"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "mt-1.5"], [1, "btn", "btn-secondary", "mb-3", "add-skill-btn", 3, "click"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [3, "formGroupName"], ["type", "text", "formControlName", "name", "pattern", "[a-zA-Z0-9\\s ]{2,}", "minlength", "2", "maxlength", "50", 1, "form-control", 3, "keypress", "readonly"], ["class", "text-danger", 4, "ngIf"], ["type", "number", "formControlName", "rating", "min", "1", "max", "5", 1, "form-control", 3, "keypress", "readonly"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "popover", 4, "ngIf"], [1, "text-danger"], [1, "popover"], [3, "action", "closePopover", "skill"]],
    template: function ProfileEditModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_Template_button_click_6_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Search Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileEditModalComponent_Template_select_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchType, $event) || (ctx.searchType = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16)(22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileEditModalComponent_Template_input_ngModelChange_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19)(26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_Template_button_click_26_listener() {
          return ctx.getFilteredSkills();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21)(29, "form", 22)(30, "table", 23)(31, "thead")(32, "tr")(33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Skill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ProfileEditModalComponent_tr_40_Template, 11, 6, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 26)(42, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_Template_button_click_42_listener() {
          return ctx.addSkill();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Add Skill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 28)(45, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_Template_button_click_45_listener() {
          return ctx.onCancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditModalComponent_Template_button_click_47_listener() {
          return ctx.onApply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.avatar == null ? null : ctx.avatar.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.skillsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.skills.controls);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _pop_over_pop_over_component__WEBPACK_IMPORTED_MODULE_1__.PopOverComponent],
    styles: [".modal[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 1050;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.modal-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: auto;\n  margin: 1.75rem auto;\n  overflow: hidden;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 1rem 1rem;\n  border-bottom: 1px solid #dee2e6;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n  max-height: calc(100vh - 210px);\n  overflow-y: auto;\n}\n\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #dee2e6;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.width-30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 2rem;\n}\n\n.mt-1\\.7[_ngcontent-%COMP%] {\n  margin-top: 1.9rem;\n}\n\n.add-skill-btn[_ngcontent-%COMP%] {\n  width: 180px;\n}\n\n.profile-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  background: #cddbdc;\n  border-radius: 50%;\n}\n\n.profile-image-container[_ngcontent-%COMP%] {\n  background-color: #f5efef;\n  margin-right: 1rem;\n  border-radius: 50%;\n  max-height: 220px;\n}\n\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwbGljYW50LXByb2ZpbGUtZWRpdC1tb2RhbC9hcHBsaWNhbnQtcHJvZmlsZS1lZGl0LW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDUwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWFyZ2luOiAxLjc1cmVtIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuM3JlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zcmVtO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIxMHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uZmxleC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLndpZHRoLTMwIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4ubXItMiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4ubXQtMVxcLjcge1xyXG4gIG1hcmdpbi10b3A6IDEuOXJlbTtcclxufVxyXG5cclxuLmFkZC1za2lsbC1idG4ge1xyXG4gIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNjZGRiZGM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVmZWY7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiAyMjBweDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbFtyZWFkb25seV0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2624:
/*!**************************************************************************************!*\
  !*** ./src/app/applicant-profile-edit-modal/applicant-profile-edit-modal.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileEditModalService: () => (/* binding */ ProfileEditModalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ProfileEditModalService {
  constructor() {
    this.openModalSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.openModal$ = this.openModalSource.asObservable();
  }
  openModal(avatar) {
    this.openModalSource.next(avatar);
  }
  static #_ = this.ɵfac = function ProfileEditModalService_Factory(t) {
    return new (t || ProfileEditModalService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProfileEditModalService,
    factory: ProfileEditModalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6045:
/*!**************************************!*\
  !*** ./src/app/applicant.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicantService: () => (/* binding */ ApplicantService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ApplicantService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'https://jsonplaceholder.typicode.com/users';
  }
  getUserDetails() {
    return this.http.get(this.apiUrl);
  }
  static #_ = this.ɵfac = function ApplicantService_Factory(t) {
    return new (t || ApplicantService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApplicantService,
    factory: ApplicantService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5994:
/*!************************************************!*\
  !*** ./src/app/pop-over/pop-over.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PopOverComponent: () => (/* binding */ PopOverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function PopOverComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopOverComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAction("apply"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PopOverComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopOverComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAction("edit"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function PopOverComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopOverComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onAction("update"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class PopOverComponent {
  constructor() {
    // @Input() skillIndex: number;
    this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closePopover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onAction(action) {
    this.action.emit(action);
    this.closePopover.emit();
  }
  ngOnInit() {
    this.currentAction = this.skill.controls['action'].value;
  }
  static #_ = this.ɵfac = function PopOverComponent_Factory(t) {
    return new (t || PopOverComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PopOverComponent,
    selectors: [["app-pop-over"]],
    inputs: {
      skill: "skill"
    },
    outputs: {
      action: "action",
      closePopover: "closePopover"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "popover", "bs-popover-right", "show"], [1, "popover-body"], ["class", "btn btn-link", 3, "click", 4, "ngIf"], [1, "btn", "btn-link", 3, "click"]],
    template: function PopOverComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopOverComponent_button_2_Template, 2, 0, "button", 2)(3, PopOverComponent_button_3_Template, 2, 0, "button", 2)(4, PopOverComponent_button_4_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopOverComponent_Template_button_click_5_listener() {
          return ctx.onAction("remove");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentAction === "apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentAction === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentAction === "update");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".popover-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .popover-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n\n   .popover[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 1060;\n    display: block;\n    max-width: 276px;\n    padding: 1px;\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n    text-align: left;\n    white-space: normal;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  }\n\n  .popover-body[_ngcontent-%COMP%] {\n    padding: 8px 14px;\n    color: #333;\n  }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9wLW92ZXIvcG9wLW92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLGFBQWE7RUFDZjs7R0FFQztJQUNDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcG92ZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnBvcG92ZXItY29udGVudCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICB9XHJcblxyXG4gICAucG9wb3ZlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDYwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDI3NnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLnBvcG92ZXItYm9keSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/// <reference types="@angular/localize" />




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Preloader start -->\n<div class=\"site-preloader-wrap\">\n  <div class=\"sk-cube-grid\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n      <div class=\"sk-cube sk-cube3\"></div>\n      <div class=\"sk-cube sk-cube4\"></div>\n      <div class=\"sk-cube sk-cube5\"></div>\n      <div class=\"sk-cube sk-cube6\"></div>\n      <div class=\"sk-cube sk-cube7\"></div>\n      <div class=\"sk-cube sk-cube8\"></div>\n      <div class=\"sk-cube sk-cube9\"></div>\n  </div>\n</div>\n<!-- Preloader end -->\n\n<app-header></app-header>\n\n<!-- <app-default></app-default> -->\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Our Partners Area -->\n<section id=\"partners\" class=\"our-partners ptb-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\n                <div class=\"section-title\">\n                    <h2>Partnere</h2>\n                    <p></p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"partners-slides owl-carousel owl-theme\">\n                <div *ngFor=\"let p of partners\">\n                    <div class=\"single-partner-logo\">\n                        <a class=\"logo-preview\" href=\"{{p.link}}\" target=\"_blank\"><img src=\"assets/partners/{{p.img}}\" alt=\"Image\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        \n    </div>\n</section>\n<!-- End Our Partners Area -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Services Area -->\n<section id=\"services\" class=\"services ptb-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\n                <div class=\"section-title\">\n                    <h2>Kompetencer</h2>\n                    <p>Vi udfører alle former for opgaver, så hvis du ikke lige finder dine ønsker herunder så kontakt\n                        os for en uforpligtende samtale omkring dit projekt.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div *ngFor=\"let s of skills\" class=\"col-md-6 col-lg-4 text-center\">\n                <div class=\"service-item\">\n                    <div class=\"glyph\">\n                        <i class=\"big-icon {{s.icon}}\"></i>\n                    </div>\n                    <h3>{{s.title}}</h3>\n                    <p>{{s.content}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Services Area -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-member/team-member.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-member/team-member.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Our team Area -->\n<section id=\"team\" class=\"our-team ptb-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\n                <div class=\"section-title\">\n                    <h2>Teamet</h2>\n                    <p>Vores team består af udviklerer hvor kompetencerne overskygger diplomer. Vi gør en dyd ud af at\n                        finde de bedste udviklere uanset deres kvalifikationer.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"team-slides owl-carousel owl-theme\">\n                <div *ngFor=\"let m of members\" class=\"team-box\">\n                    <img src=\"{{m.img}}\" alt=\"Member\" onerror=\"this.src='../../../assets/cod3/profile.png';\" > \n                    <div class=\"box-content\">\n                        <div class=\"box-inner-content\">\n                            <h3 class=\"title\">{{m.firstName}} {{m.lastName}}</h3>\n                            <span class=\"post\">{{m.title}}</span>\n                            <ul class=\"icon\">\n                                <li><a class=\"fab fa-linkedin-in\" href=\"{{m.linkedIN}}\" target=\"_blank\"></a></li>\n                                <li><a class=\"fab fa-github\" href=\"{{m.github}}\" target=\"_blank\"></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End Our team Area -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/technologies/technologies.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/technologies/technologies.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start FAQ Area -->\n<section id=\"tech\" class=\"faq ptb-100\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\n                <div class=\"section-title\">\n                    <h2>Teknologier</h2>\n                    <p>Her er nogen af de teknologier vi anvender.</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"faq-content\">\n            <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <a href=\"#\">\n                        <div class=\"content-box color-effect-1\">\n                            <h3>Mangler du en specifik teknologi?</h3>\n                            <div class=\"box-icon-wrap box-icon-effect-1 box-icon-effect-1a\">\n                                <div class=\"box-icon\"><i class=\"far fa-share-square\"></i></div>\n                            </div>\n                            <p>Skriv til os, så finder vi en løsning på din udfordring.</p>\n                        </div>\n                    </a>\n                </div>\n\n                <div class=\"col-lg-8\">\n                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n                        <div *ngFor=\"let t of tech\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                                    <h4 class=\"panel-title\">\n                                        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                                            href=\"#collapse{{t.control}}\" aria-expanded=\"false\" aria-controls=\"'collapse{{t.control}'}\">\n                                            {{t.title}}\n                                        </a>\n                                    </h4>\n                                </div>\n                                <div id=\"collapse{{t.control}}\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\"\n                                    aria-labelledby=\"headingTwo\">\n                                    <div class=\"panel-body\">\n                                        <p>{{t.content}}</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- End FAQ Area -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog-details/blog-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog-details/blog-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Breadcumbs Area -->\r\n<div class=\"bread-cumbs-area bread-cumbs-bg\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\">\r\n                        <h1>Blog Details</h1>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Breadcumbs Area -->\r\n\r\n<!-- Start Our blog Area -->\r\n<section id=\"blog\" class=\"our-blog main-blog\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"blog-details\">\r\n                            <div class=\"post-img\">\r\n                                <img src=\"assets/img/blog-one.jpg\" alt=\"blog-one\">\r\n                            </div>\r\n\r\n                            <div class=\"blog-info\">\r\n                                <div class=\"date-box\">\r\n                                    28 <span class=\"month\">Jan</span>\r\n                                </div>\r\n                                <div class=\"title-meta\">\r\n                                    <h2>10 hot marketing trends you need.</h2>\r\n                                    <div class=\"post-meta\">\r\n                                        <ul>\r\n                                            <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                            <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                            <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"post-content\">\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\r\n\r\n                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\r\n\r\n                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\r\n\r\n                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\r\n\r\n                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>\r\n\r\n                                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>\r\n\r\n                                <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>\r\n                            </div>\r\n\r\n                            <div class=\"comments-area\">\r\n                                <h3 class=\"comments-title\">3 Comments</h3>\r\n                                <div class=\"single-comment\">\r\n                                    <img src=\"assets/img/comment_1.jpg\" alt=\"\" />\r\n                                    <h4>John Smith</h4>\r\n                                    <p class=\"date\">2 days ago</p>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                                    <a href=\"#\" class=\"reply\">Reply</a>\r\n                                </div>\r\n\r\n                                <div class=\"single-comment mrl-50\">\r\n                                    <img src=\"assets/img/comment_2.jpg\" alt=\"\" />\r\n                                    <h4>Michael Sheen</h4>\r\n                                    <p class=\"date\">2 days ago</p>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                                </div>\r\n\r\n                                <div class=\"single-comment\">\r\n                                    <img src=\"assets/img/comment_3.jpg\" alt=\"\" />\r\n                                    <h4>Idris Elba</h4>\r\n                                    <p class=\"date\">2 days ago</p>\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n                                    <a href=\"#\" class=\"reply\">Reply</a>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"comments-form\">\r\n                                <h3 class=\"comments-title\">Leave a Comments</h3>\r\n                                <form>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"email\" class=\"form-control\" id=\"email_address\" placeholder=\"Your Email\">\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control\" rows=\"5\" placeholder=\"Type here...\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"text-center\">\r\n                                        <div class=\"button\">\r\n                                            <a href=\"#\">Post a Comment</a>\r\n                                            <div class=\"mask\"></div>\r\n                                        </div>\r\n                                    </div>\r\n                                </form>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4\">\r\n                <!-- Search form -->\r\n                <div class=\"side-widget\">\r\n                    <div class=\"search-form\">\r\n                        <form>\r\n                            <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"Search\">\r\n                            <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <!-- End Search form -->\r\n\r\n                <!-- Recent posts -->\r\n                <div class=\"side-widget\">\r\n                    <h3>Recent posts</h3>\r\n                    <div class=\"single-post\">\r\n                        <a href=\"#\"><img src=\"assets/img/post_1.jpg\" alt=\"\" /></a>\r\n                        <h4><a href=\"#\">10 hot marketing trends you need.</a></h4>\r\n                        <div class=\"post-meta\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur</p>\r\n                            <ul>\r\n                                <li><i class=\"fa fa-calendar\"></i> Date: 01 Jan</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"single-post\">\r\n                        <a href=\"#\"><img src=\"assets/img/post_2.jpg\" alt=\"\" /></a>\r\n                        <h4><a href=\"#\">10 hot Themes trends you need.</a></h4>\r\n                        <div class=\"post-meta\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur</p>\r\n                            <ul>\r\n                                <li><i class=\"fa fa-calendar\"></i> Date: 22 Feb</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"single-post\">\r\n                        <a href=\"#\"><img src=\"assets/img/post_3.jpg\" alt=\"\" /></a>\r\n                        <h4><a href=\"#\">10 hot Template trends you need.</a></h4>\r\n                        <div class=\"post-meta\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur</p>\r\n                            <ul>\r\n                                <li><i class=\"fa fa-calendar\"></i> Date: 19 Jan</li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- End Recent posts -->\r\n\r\n                <!-- Categories -->\r\n                <div class=\"side-widget\">\r\n                    <h3>Categories</h3>\r\n                    <ul class=\"list-group\">\r\n                        <li class=\"list-group-item\"><a href=\"#\">Business</a></li>\r\n                        <li class=\"list-group-item\"><a href=\"#\">Technology</a></li>\r\n                        <li class=\"list-group-item\"><a href=\"#\">Food</a></li>\r\n                        <li class=\"list-group-item\"><a href=\"#\">Family</a></li>\r\n                    </ul>\r\n                </div>\r\n                <!-- End Categories -->\r\n\r\n                <!-- Categories -->\r\n                <div class=\"side-widget\">\r\n                    <h3>Tags</h3>\r\n                    <ul class=\"list-tags\">\r\n                        <li><a href=\"#\">Business</a></li>\r\n                        <li><a href=\"#\">Family</a></li>\r\n                        <li><a href=\"#\">Technology</a></li>\r\n                        <li><a href=\"#\">Family</a></li>\r\n                        <li><a href=\"#\">Food</a></li>\r\n                        <li><a href=\"#\">Business</a></li>\r\n                        <li><a href=\"#\">Family</a></li>\r\n                        <li><a href=\"#\">Technology</a></li>\r\n                        <li><a href=\"#\">Business</a></li>\r\n                        <li><a href=\"#\">Technology</a></li>\r\n                    </ul>\r\n                </div>\r\n                <!-- End Categories -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our blog Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog/blog.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog/blog.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Breadcumbs Area -->\r\n<div class=\"bread-cumbs-area bread-cumbs-bg\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\">\r\n                        <h1>Our Blog</h1>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Breadcumbs Area -->\r\n\r\n<!-- Start Our blog Area -->\r\n<section id=\"blog\" class=\"our-blog main-blog\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-one.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            28 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">10 hot marketing trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-two.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            25 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">10 hot Themes trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-three.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            15 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">10 hot Template trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-four.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            10 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">5 hot plugins trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-five.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            10 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">5 hot Angular template you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6 col-md-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" href=\"blog-details\">\r\n                        <img src=\"assets/img/blog-six.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            10 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a href=\"blog-details\">5 hot Angular trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"col-lg-12 pagination-area text-center\">\r\n                <ul class=\"pagination\">\r\n                    <li><a href=\"#\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></li>\r\n                    <li class=\"active\"><a href=\"#\">1</a></li>\r\n                    <li><a href=\"#\">2</a></li>\r\n                    <li><a href=\"#\">3</a></li>\r\n                    <li><a href=\"#\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n            <!-- End Pagination -->\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our blog Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/default/default.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demos/default/default.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Homepage Slider -->\r\n<div class=\"hompage-slides-wrapper\">\r\n    <div class=\"homepage-slides main-slides owl-carousel\" data-slider-id=\"1\">\r\n        <div class=\"single-slider-item slide-bg-1\" data-parallax='{\"y\": -150, \"smoothness\": 20}'>\r\n            <div class=\"diplay-table\">\r\n                <div class=\"display-table-cell\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-7\" data-parallax='{\"y\" : -300, \"smoothness\": 20}'>\r\n                                <span class=\"hero-text\">Clean & Creative</span>\r\n                                <h1>Fully Responsive Design</h1>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                                <div class=\"center-wrap\">\r\n                                    <div class=\"button\">\r\n                                        <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                        <div class=\"mask\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"single-slider-item slide-bg-2\" data-parallax='{\"y\": -150, \"smoothness\": 20}'>\r\n            <div class=\"diplay-table\">\r\n                <div class=\"display-table-cell\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-7\" data-parallax='{\"y\" : -300, \"smoothness\": 20}'>\r\n                                <span class=\"hero-text\">Unique Features</span>\r\n                                <h1>Fully Responsive Design</h1>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                                <div class=\"center-wrap\">\r\n                                    <div class=\"button\">\r\n                                        <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                        <div class=\"mask\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"single-slider-item slide-bg-3\" data-parallax='{\"y\": -150, \"smoothness\": 20}'>\r\n            <div class=\"diplay-table\">\r\n                <div class=\"display-table-cell\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-7\" data-parallax='{\"y\" : -300, \"smoothness\": 20}'>\r\n                                <span class=\"hero-text\">Reliable Support</span>\r\n                                <h1>Fully Responsive Design</h1>\r\n                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                                <div class=\"center-wrap\">\r\n                                    <div class=\"button\">\r\n                                        <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                        <div class=\"mask\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Carousel Thumbs -->\r\n    <div class=\"owl-thumbs\" data-slider-id=\"1\" data-parallax='{\"y\": -150, \"smoothness\": 20}'>\r\n        <div class=\"owl-thumb-item\">\r\n            <div class=\"slide-service-item\">\r\n                <div class=\"glyph\">\r\n                    <i class=\"glyph-icon flaticon-047-laptop\"></i>\r\n                </div>\r\n                <h3>Beautiful Designs</h3>\r\n                <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"owl-thumb-item\">\r\n            <div class=\"slide-service-item\">\r\n                <div class=\"glyph\">\r\n                    <i class=\"glyph-icon flaticon-017-package\"></i>\r\n                </div>\r\n                <h3>Unique Features</h3>\r\n                <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"owl-thumb-item\">\r\n            <div class=\"slide-service-item\">\r\n                <div class=\"glyph\">\r\n                    <i class=\"glyph-icon flaticon-025-chat\"></i>\r\n                </div>\r\n                <h3>Reliable Support</h3>\r\n                <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Homepage Slider -->\r\n\r\n<!-- Start Services Area -->\r\n<section id=\"services\" class=\"services ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Services</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Services</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-012-management\"></i>\r\n                    </div>\r\n                    <h3>Creative Solutions</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-032-target\"></i>\r\n                    </div>\r\n                    <h3>Excellent Features</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-024-user\"></i>\r\n                    </div>\r\n                    <h3>Friendly Support</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-008-bar-chart\"></i>\r\n                    </div>\r\n                    <h3>SEO & Advertising</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-033-networking\"></i>\r\n                    </div>\r\n                    <h3>Marketing & Consulting</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-031-laptop-1\"></i>\r\n                    </div>\r\n                    <h3>Design & Development</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Services Area -->\r\n\r\n<!-- Start CTA Area -->\r\n<section class=\"cta-area cta-bg-img\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-7 col-lg-7\">\r\n                        <div class=\"cta-info\">\r\n                            <h2>We offer best in class service for your needs</h2>\r\n                            <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n\r\n                            <div class=\"center-wrap\">\r\n                                <div class=\"button\">\r\n                                    <a href=\"#\">Purchage Now <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                    <div class=\"mask\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-5 col-lg-5 cta-img\">\r\n                        <img class=\"img-fluid\" src=\"assets/img/mac-pro.png\" alt=\"mac-pro\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End CTA Area -->\r\n\r\n<!-- Start Our Works Area -->\r\n<section id=\"works\" class=\"our-works ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Works</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Works</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div id=\"filters\" class=\"filter-menu text-center roxy-projects-active\">\r\n                    <ul>\r\n                        <li class=\"active\" data-filter=\"*\">All</li>\r\n                        <li class=\"\" data-filter=\".web\">Web</li>\r\n                        <li class=\"\" data-filter=\".mobile\">Mobile</li>\r\n                        <li class=\"\" data-filter=\".ec\">E-commerce</li>\r\n                        <li class=\"\" data-filter=\".python\">Python</li>\r\n                        <li class=\"\" data-filter=\".django\">Django</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"Portfolio\" class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-1.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item mobile django python\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-2.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item ec web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-3.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item python mobile\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-4.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item django ec\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-5.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item web python\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-6.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Works Area -->\r\n\r\n<!-- Start About Us Area -->\r\n<section id=\"about\" class=\"about-us ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n            <div class=\"section-title\">\r\n                <h2>About Us</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                <span class=\"section-title-bg\">About</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-medal\"></i>\r\n                    <h3>Backgrounds</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-sitemap\"></i>\r\n                    <h3>Our Approach</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-thermometer\"></i>\r\n                    <h3>Methodology</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-star\"></i>\r\n                    <h3>Our Rich Experience</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-funnel-dollar\"></i>\r\n                    <h3>Value for Money</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-users-cog\"></i>\r\n                    <h3>Flexible Development</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End About Us Area -->\r\n\r\n<!-- Start Our team Area -->\r\n<section id=\"team\" class=\"our-team ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Team</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Team</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"team-slides owl-carousel owl-theme\">\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-one.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Colin Firth</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-two.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Michael Sheen</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-three.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Tom Hardy</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-two.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Idris Elba</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our team Area -->\r\n\r\n<!-- Start Our blog Area -->\r\n<section id=\"blog\" class=\"our-blog ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Blog</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Blog</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-one.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            28 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot marketing trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-two.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            25 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot Themes trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-three.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            15 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot Template trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-four.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            10 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">5 hot plugins trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-12 col-md-12 all-post\">\r\n                <div class=\"center-wrap text-center\">\r\n                    <div class=\"button\">\r\n                        <a routerLink=\"blog\">View All Post <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                        <div class=\"mask\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our blog Area -->\r\n\r\n<!-- Start Video Area -->\r\n<section class=\"video-area video-bg\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"video-inner-content\">\r\n               <div class=\"button__holder\" data-parallax='{\"z\": -400}'>\r\n                    <a href=\"https://vimeo.com/90691438\" class=\"plus popup-youtube\"></a>\r\n                </div>\r\n                <h2 data-parallax='{\"z\": -400}'>Watch Video</h2>\r\n                <p data-parallax='{\"z\": -200}'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Video Area -->\r\n\r\n<!-- Start Our Pricing Area -->\r\n<section id=\"pricing\" class=\"our-pricing ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Pricing</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Pricing</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"tabs\">\r\n                    <div class=\"tabs-button\">\r\n                        <div class=\"active tabs-filter-button\">Monthly</div>\r\n                        <div class=\"tabs-filter-button\">Yearly</div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"content active\">\r\n                            <div class=\"pricing-container margin-top-60\">\r\n                                <!-- Plan #1 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Basic</h3>\r\n                                        <span class=\"value\">Free</span>\r\n                                        <span class=\"period\">Free of charge one standard listing active for 30 days</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Listing</li>\r\n                                            <li>30 Days Availability</li>\r\n                                            <li>Standard Listing</li>\r\n                                            <li>Limited Support</li>\r\n                                        </ul>\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #2 -->\r\n                                <div class=\"plan featured\">\r\n                                    <div class=\"listing-badges\">\r\n                                        <span class=\"featured\">Featured</span>\r\n                                    </div>\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Extended</h3>\r\n                                        <span class=\"value\">$10.99</span>\r\n                                        <span class=\"period\">One time fee for one listing, highlighted in the search results</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Time Fee</li>\r\n                                            <li>One Listing</li>\r\n                                            <li>90 Days Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #3 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Professional</h3>\r\n                                        <span class=\"value\">$19.99</span>\r\n                                        <span class=\"period\">Monthly subscription for unlimited listings and availability</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>Unlimited Listings</li>\r\n                                            <li>Unlimited Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <div class=\"pricing-container margin-top-60\">\r\n                                <!-- Plan #1 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Basic</h3>\r\n                                        <span class=\"value\">Free</span>\r\n                                        <span class=\"period\">Free of charge one standard listing active for 30 days</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Listing</li>\r\n                                            <li>30 Days Availability</li>\r\n                                            <li>Standard Listing</li>\r\n                                            <li>Limited Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #2 -->\r\n                                <div class=\"plan featured\">\r\n                                    <div class=\"listing-badges\">\r\n                                        <span class=\"featured\">Featured</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Extended</h3>\r\n                                        <span class=\"value\">$19.99</span>\r\n                                        <span class=\"period\">One time fee for one listing, highlighted in the search results</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Time Fee</li>\r\n                                            <li>One Listing</li>\r\n                                            <li>90 Days Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #3 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Professional</h3>\r\n                                        <span class=\"value\">$39.99</span>\r\n                                        <span class=\"period\">Monthly subscription for unlimited listings and availability</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>Unlimited Listings</li>\r\n                                            <li>Unlimited Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Pricing Area -->\r\n\r\n<!-- Start Fun Facts Area -->\r\n<section class=\"fun-facts ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Some Fun Facts</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Fun Facts</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-035-coin-1\"></i>\r\n                    </div>\r\n                    <p>Clients Worked With</p>\r\n                    <h2 class=\"counter\">1548</h2>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-020-handshake\"></i>\r\n                    </div>\r\n                    <p>Completed Projects</p>\r\n                    <h2 class=\"counter\">895</h2>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-005-trophy\"></i>\r\n                    </div>\r\n                    <p>Winning Awards</p>\r\n                    <h2 class=\"counter\">56</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Fun Facts Area -->\r\n\r\n<!-- Start Testimonials Area -->\r\n<section class=\"testimonials ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"testimonial-slides owl-carousel owl-theme\">\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-one.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Jason Statham</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-two.png\" alt=\"client-two\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Tom Hardy</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-three.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Idris Elba</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Testimonials Area -->\r\n\r\n<!-- Start FAQ Area -->\r\n<section class=\"faq ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Frequntly Ask & Questions</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">FAQ</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"faq-content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <a href=\"#\">\r\n                        <div class=\"content-box color-effect-1\">\r\n                            <h3>One More Question?</h3>\r\n                            <div class=\"box-icon-wrap box-icon-effect-1 box-icon-effect-1a\">\r\n                                <div class=\"box-icon\"><i class=\"far fa-share-square\"></i></div>\r\n                            </div>\r\n                            <p>If you have more questions, send us a message and we will answer you as soon as possible.</p>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-lg-8\">\r\n                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                        How do I Purchage an item?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseOne\" class=\"panel-collapse collapse show-div show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                                        How to download your items?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseTwo\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                                        View & download invoices?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseThree\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                                        What is Item Support?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFour\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\r\n                                        How to contact an author?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFive\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End FAQ Area -->\r\n\r\n<!-- Start Our Partners Area -->\r\n<section class=\"our-partners ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Partners</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Partners</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"partners-slides owl-carousel owl-theme\">\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img1.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img2.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img3.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img4.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img5.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img6.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img7.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img8.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img9.png\" alt=\"Image\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Partners Area -->\r\n\r\n<!-- Start Contact Area -->\r\n<section id=\"contact\" class=\"contact-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Contact with Us</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Contact</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"address-area\">\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-map-marker-alt\"></i>\r\n                        <h4>Address</h4>\r\n                        <p>2750 Quadra Street Victoria, Canada.</p>\r\n                    </div>\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-envelope\"></i>\r\n                        <h4>Email</h4>\r\n                        <p>myasi@gmail.com</p>\r\n                    </div>\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-phone-volume\"></i>\r\n                        <h4>Phone</h4>\r\n                        <p>+1-325-555-0156</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-8 col-md-8\">\r\n                <div class=\"contact-form\">\r\n                    <form id=\"contatc_form\" method=\"POST\" action=\"assets/include/sendmail.php\" name=\"myform\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_name\" name=\"name\" placeholder=\"Name\" required=\"\" data-parsley-minlength=\"4\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" id=\"contact_email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_subject\" name=\"sub\" placeholder=\"Subject\" required=\"\" data-parsley-minlength=\"4\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_phone\" name=\"phone\" placeholder=\"Phone\" required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" id=\"contact_message\" name=\"message\" rows=\"7\" placeholder=\"Message\" required=\"\" data-parsley-trigger=\"keyup\" data-parsley-minlength=\"10\" data-parsley-maxlength=\"100\" data-parsley-minlength-message=\"Come on! You need to enter at least a 10 character comment..\" data-parsley-validation-threshold=\"10\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div id=\"contact_send_status\"></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"center-wrap text-center\">\r\n                            <div class=\"button\">\r\n                                <button type=\"submit\">Send Message</button>\r\n                                <div class=\"mask\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Contact Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-three/demo-three.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-three/demo-three.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start video area -->\r\n<div id=\"home\" class=\"home-video-area\">\r\n    <video loop muted autoplay class=\"video-background\">\r\n        <source src=\"../../../assets/img/promo-video.mp4\" type=\"video/mp4\" >\r\n    </video>\r\n    <div class=\"video-text-area\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-7\" data-parallax='{\"y\" : -300, \"smoothness\": 20}'>\r\n                    <span class=\"hero-text\"></span>\r\n                    <h1>Innovative digitale løsninger</h1>\r\n                    <p>Vi brænder for at udvikle unikke cloud- web- og mobil-applikationer.</p>\r\n                    <div class=\"center-wrap\">\r\n                        <div class=\"button nav-item\">\r\n                            <a href=\"#works\" class=\"nav-link\">Vores kunder <i class=\"fa fa-long-arrow-right\"></i></a>\r\n                            <div class=\"mask\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End video area -->\r\n\r\n<!-- Start Feature Area -->\r\n<section class=\"feature-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"big-icon fas fa-cloud\"></i>\r\n                    </div>\r\n                    <h3>Cloud Løsninger</h3>\r\n                    <p>Vi holder os altid opdateret med de seneste teknologier indenfor cloud løsninger og vi anvender\r\n                        som standard Microsoft Azure</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"big-icon fas fa-globe\"></i>\r\n                    </div>\r\n                    <h3>Web</h3>\r\n                    <p>Vi anvender Angular i alle vores webløsninger, det giver dig en fremtidsikret, performance\r\n                        optimeret og resposiv løsning.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"big-icon fas fa-check-circle\"></i>\r\n                    </div>\r\n                    <h3>A - Z</h3>\r\n                    <p>Vi har alle relevante resourcer in-house, hvilket sikrer dig at alle elementer i udviklingen er\r\n                        lavet af det samme udviklingshus.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Feature Area -->\r\n\r\n<!-- Start Services Area -->\r\n<app-skills [skills]=\"getSkills()\"></app-skills>\r\n<!-- End Services Area -->\r\n\r\n<!-- Start Our Works Area -->\r\n<section id=\"works\" class=\"our-works ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Cases</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"Portfolio\" class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/cases/hero.png\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">HeroAppmaker</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item mobile django python\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/cases/good-investors.png\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Good Investors</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item ec web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/cases/fanrejser.png\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Fanrejser</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Works Area -->\r\n\r\n<!-- Start Testimonials Area -->\r\n<section class=\"testimonials ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"testimonial-slides owl-carousel owl-theme\">\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula\r\n                    mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-one.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Benedicte Theard</h3>\r\n                    <span>Project Manager - Good Investors</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula\r\n                    mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-one.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Lars Skovbæk</h3>\r\n                    <span>Founder - HeroAppmaker</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula\r\n                    mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-one.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Martin Bjerg</h3>\r\n                    <span>Founder - Fanrejser</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Testimonials Area -->\r\n\r\n<!-- Start technologies Area -->\r\n<app-technologies [tech]=\"getTech()\"></app-technologies>\r\n<!-- End technologies Area -->\r\n\r\n<!-- Start Our team Area -->\r\n<app-team-member [members]=getMembers()></app-team-member>\r\n<!-- End Our team Area -->\r\n\r\n<!-- Start Our Partners Area -->\r\n<app-partners [partners]=\"getPartners()\"></app-partners>\r\n    <!-- End Our Partners Area -->\r\n\r\n<!-- Start Contact Area -->\r\n<section id=\"contact\" class=\"contact-area ptb-100\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                    <div class=\"section-title\">\r\n                        <h2>Kontakt os</h2>\r\n                        <p>Har du spørgsmål til det vi laver eller søger du konkret sparring på et projekt så er du velkommen til at ringe til os eller sende os besked.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4\">\r\n                    <div class=\"address-area\">\r\n                        <div class=\"contact-info\">\r\n                            <i class=\"fas fa-map-marker-alt\"></i>\r\n                            <h4>Adresse</h4>\r\n                            <p>Københavnvej 75, 4000 Roskilde</p>\r\n                        </div>\r\n                        <div class=\"contact-info\">\r\n                            <i class=\"fas fa-envelope\"></i>\r\n                            <h4>Email</h4>\r\n                            <p>kontakt@cod3r.dk</p>\r\n                        </div>\r\n                        <div class=\"contact-info\">\r\n                            <i class=\"fas fa-phone-volume\"></i>\r\n                            <h4>Telefon</h4>\r\n                            <p>+45 3048 8592</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"col-lg-8 col-md-8\">\r\n                    <div class=\"contact-form\">\r\n                        <form id=\"contatc_form\" method=\"POST\" action=\"assets/include/sendmail.php\" name=\"myform\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"contact_name\" name=\"name\" placeholder=\"Navn\" required=\"\" data-parsley-minlength=\"4\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"email\" class=\"form-control\" id=\"contact_email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"contact_subject\" name=\"sub\" placeholder=\"Emne\" required=\"\" data-parsley-minlength=\"4\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"contact_phone\" name=\"phone\" placeholder=\"Telefon\" required=\"\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div class=\"form-group\">\r\n                                        <textarea class=\"form-control\" id=\"contact_message\" name=\"message\" rows=\"7\" placeholder=\"Besked\" required=\"\" data-parsley-trigger=\"keyup\" data-parsley-minlength=\"10\" data-parsley-maxlength=\"100\" data-parsley-minlength-message=\"Come on! You need to enter at least a 10 character comment..\" data-parsley-validation-threshold=\"10\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                    <div id=\"contact_send_status\"></div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"center-wrap text-center\">\r\n                                <div class=\"button\">\r\n                                    <button type=\"submit\">Send Besked</button>\r\n                                    <div class=\"mask\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- End Contact Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-two/demo-two.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-two/demo-two.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Start Home Banner Area -->\r\n<div class=\"home-banner-area\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-7\" data-parallax='{\"y\" : -300, \"smoothness\": 20}'>\r\n                        <div class=\"banner-text\">\r\n                            <span class=\"hero-text\">Clean & Creative</span>\r\n                            <h1>Fully Responsive Design</h1>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                            <div class=\"center-wrap\">\r\n                                <div class=\"button\">\r\n                                    <a href=\"#home\">get started <i class=\"fa fa-long-arrow-right\"></i></a>\r\n                                    <div class=\"mask\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Home Banner Area -->\r\n\r\n<!-- Start Feature Area -->\r\n<section class=\"feature-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-047-laptop\"></i>\r\n                    </div>\r\n                    <h3>Beautiful Designs</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-017-package\"></i>\r\n                    </div>\r\n                    <h3>Unique Features</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"single-feature\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-025-chat\"></i>\r\n                    </div>\r\n                    <h3>Reliable Support</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Feature Area -->\r\n\r\n<!-- Start Services Area -->\r\n<section id=\"services\" class=\"services ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Services</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <!-- <span class=\"section-title-bg\">Services</span> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-012-management\"></i>\r\n                    </div>\r\n                    <h3>Creative Solutions</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-032-target\"></i>\r\n                    </div>\r\n                    <h3>Excellent Features</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-024-user\"></i>\r\n                    </div>\r\n                    <h3>Friendly Support</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-008-bar-chart\"></i>\r\n                    </div>\r\n                    <h3>SEO & Advertising</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-033-networking\"></i>\r\n                    </div>\r\n                    <h3>Marketing & Consulting</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4 text-center\">\r\n                <div class=\"service-item\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-031-laptop-1\"></i>\r\n                    </div>\r\n                    <h3>Design & Development</h3>\r\n                    <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Services Area -->\r\n\r\n<!-- Start CTA Area -->\r\n<section class=\"cta-area cta-bg-img\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-7 col-lg-7\">\r\n                        <div class=\"cta-info\">\r\n                            <h2>We offer best in class service for your needs</h2>\r\n                            <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>\r\n\r\n                            <div class=\"center-wrap\">\r\n                                <div class=\"button\">\r\n                                    <a href=\"#\">Purchage Now <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                    <div class=\"mask\"></div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-5 col-lg-5 cta-img\">\r\n                        <img class=\"img-fluid\" src=\"assets/img/mac-pro.png\" alt=\"mac-pro\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End CTA Area -->\r\n\r\n<!-- Start Our Works Area -->\r\n<section id=\"works\" class=\"our-works ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Works</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Works</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div id=\"filters\" class=\"filter-menu text-center roxy-projects-active\">\r\n                    <ul>\r\n                        <li class=\"active\" data-filter=\"*\">All</li>\r\n                        <li class=\"\" data-filter=\".web\">Web</li>\r\n                        <li class=\"\" data-filter=\".mobile\">Mobile</li>\r\n                        <li class=\"\" data-filter=\".ec\">E-commerce</li>\r\n                        <li class=\"\" data-filter=\".python\">Python</li>\r\n                        <li class=\"\" data-filter=\".django\">Django</li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"Portfolio\" class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-1.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item mobile django python\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-2.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item ec web\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-3.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item python mobile\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-4.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item django ec\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-5.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-4 filtr-item web python\">\r\n                <div class=\"work-details\">\r\n                    <img src=\"assets/img/work-6.jpg\" alt=\"sample image\">\r\n                    <div class=\"box-content\">\r\n                        <h3 class=\"title\">Work Details</h3>\r\n                        <ul class=\"icon\">\r\n                            <li><a href=\"#\"><i class=\"fa fa-link\"></i></a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Works Area -->\r\n\r\n<!-- Start About Us Area -->\r\n<section id=\"about\" class=\"about-us ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n            <div class=\"section-title\">\r\n                <h2>About Us</h2>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                <span class=\"section-title-bg\">About</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-medal\"></i>\r\n                    <h3>Backgrounds</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-sitemap\"></i>\r\n                    <h3>Our Approach</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-thermometer\"></i>\r\n                    <h3>Methodology</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-star\"></i>\r\n                    <h3>Our Rich Experience</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-funnel-dollar\"></i>\r\n                    <h3>Value for Money</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-4\">\r\n                <div class=\"about-info\">\r\n                    <i class=\"fas fa-users-cog\"></i>\r\n                    <h3>Flexible Development</h3>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End About Us Area -->\r\n\r\n<!-- Start Our team Area -->\r\n<section id=\"team\" class=\"our-team ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Team</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Team</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"team-slides owl-carousel owl-theme\">\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-one.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Colin Firth</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-two.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Michael Sheen</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-three.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Tom Hardy</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"team-box\">\r\n                    <img src=\"assets/img/team-two.jpg\" alt=\"Image Description\">\r\n                    <div class=\"box-content\">\r\n                        <div class=\"box-inner-content\">\r\n                            <h3 class=\"title\">Idris Elba</h3>\r\n                            <span class=\"post\">Web Developer</span>\r\n                            <ul class=\"icon\">\r\n                                <li><a class=\"fab fa-facebook-f\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-twitter\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-linkedin-in\" href=\"#\"></a></li>\r\n                                <li><a class=\"fab fa-instagram\" href=\"#\"></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our team Area -->\r\n\r\n<!-- Start Our blog Area -->\r\n<section id=\"blog\" class=\"our-blog ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Blog</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Blog</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-one.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            28 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot marketing trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-two.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            25 <span class=\"month\">Jan</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot Themes trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-three.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            15 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">10 hot Template trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-6 col-lg-6\">\r\n                <div class=\"blog-item\">\r\n                    <a class=\"blog-img\" routerLink=\"blog-details\">\r\n                        <img src=\"assets/img/blog-four.jpg\" alt=\"blog-one\">\r\n                    </a>\r\n                    <div class=\"blog-info\">\r\n                        <div class=\"date-box\">\r\n                            10 <span class=\"month\">Dec</span>\r\n                        </div>\r\n                        <div class=\"title-meta\">\r\n                            <h2><a routerLink=\"blog-details\">5 hot plugins trends you need.</a></h2>\r\n                            <div class=\"post-meta\">\r\n                                <ul>\r\n                                    <li><i class=\"fa fa-user\"></i> Posted By: <a href=\"#\">Admin</a></li>\r\n                                    <li><i class=\"far fa-comment\"></i> Comments: <a href=\"#\">11</a></li>\r\n                                    <li><i class=\"fa fa-tags\"></i> Tags: <a href=\"#\">Business</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"post-content\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-12 col-md-12 all-post\">\r\n                <div class=\"center-wrap text-center\">\r\n                    <div class=\"button\">\r\n                        <a routerLink=\"blog\">View All Post <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                        <div class=\"mask\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our blog Area -->\r\n\r\n<!-- Start Video Area -->\r\n<section class=\"video-area video-bg\">\r\n    <div class=\"diplay-table\">\r\n        <div class=\"display-table-cell\">\r\n            <div class=\"video-inner-content\">\r\n                <div class=\"button__holder\" data-parallax='{\"z\": -400}'>\r\n                    <a href=\"https://vimeo.com/90691438\" class=\"plus popup-youtube\"></a>\r\n                </div>\r\n                <h2 data-parallax='{\"z\": -400}'>Watch Video</h2>\r\n                <p data-parallax='{\"z\": -200}'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Video Area -->\r\n\r\n<!-- Start Our Pricing Area -->\r\n<section id=\"pricing\" class=\"our-pricing ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Pricing</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Pricing</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"tabs\">\r\n                    <div class=\"tabs-button\">\r\n                        <div class=\"active tabs-filter-button\">Monthly</div>\r\n                        <div class=\"tabs-filter-button\">Yearly</div>\r\n                    </div>\r\n\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"content active\">\r\n                            <div class=\"pricing-container margin-top-60\">\r\n                                <!-- Plan #1 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Basic</h3>\r\n                                        <span class=\"value\">Free</span>\r\n                                        <span class=\"period\">Free of charge one standard listing active for 30 days</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Listing</li>\r\n                                            <li>30 Days Availability</li>\r\n                                            <li>Standard Listing</li>\r\n                                            <li>Limited Support</li>\r\n                                        </ul>\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #2 -->\r\n                                <div class=\"plan featured\">\r\n                                    <div class=\"listing-badges\">\r\n                                        <span class=\"featured\">Featured</span>\r\n                                    </div>\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Extended</h3>\r\n                                        <span class=\"value\">$10.99</span>\r\n                                        <span class=\"period\">One time fee for one listing, highlighted in the search results</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Time Fee</li>\r\n                                            <li>One Listing</li>\r\n                                            <li>90 Days Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #3 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Professional</h3>\r\n                                        <span class=\"value\">$19.99</span>\r\n                                        <span class=\"period\">Monthly subscription for unlimited listings and availability</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>Unlimited Listings</li>\r\n                                            <li>Unlimited Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <div class=\"pricing-container margin-top-60\">\r\n                                <!-- Plan #1 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Basic</h3>\r\n                                        <span class=\"value\">Free</span>\r\n                                        <span class=\"period\">Free of charge one standard listing active for 30 days</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Listing</li>\r\n                                            <li>30 Days Availability</li>\r\n                                            <li>Standard Listing</li>\r\n                                            <li>Limited Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #2 -->\r\n                                <div class=\"plan featured\">\r\n                                    <div class=\"listing-badges\">\r\n                                        <span class=\"featured\">Featured</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Extended</h3>\r\n                                        <span class=\"value\">$19.99</span>\r\n                                        <span class=\"period\">One time fee for one listing, highlighted in the search results</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>One Time Fee</li>\r\n                                            <li>One Listing</li>\r\n                                            <li>90 Days Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <!-- Plan #3 -->\r\n                                <div class=\"plan\">\r\n                                    <div class=\"plan-price\">\r\n                                        <h3>Professional</h3>\r\n                                        <span class=\"value\">$39.99</span>\r\n                                        <span class=\"period\">Monthly subscription for unlimited listings and availability</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"plan-features\">\r\n                                        <ul>\r\n                                            <li>Unlimited Listings</li>\r\n                                            <li>Unlimited Availability</li>\r\n                                            <li>Featured In Search Results</li>\r\n                                            <li>24/7 Support</li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"center-wrap\">\r\n                                            <div class=\"button\">\r\n                                                <a href=\"#\">get started <i class=\"fas fa-long-arrow-alt-right\"></i></a>\r\n                                                <div class=\"mask\"></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Pricing Area -->\r\n\r\n<!-- Start Fun Facts Area -->\r\n<section class=\"fun-facts ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Some Fun Facts</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Fun Facts</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-035-coin-1\"></i>\r\n                    </div>\r\n                    <p>Clients Worked With</p>\r\n                    <h2 class=\"counter\">1548</h2>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-020-handshake\"></i>\r\n                    </div>\r\n                    <p>Completed Projects</p>\r\n                    <h2 class=\"counter\">895</h2>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"count-box text-center\">\r\n                    <div class=\"glyph\">\r\n                        <i class=\"glyph-icon flaticon-005-trophy\"></i>\r\n                    </div>\r\n                    <p>Winning Awards</p>\r\n                    <h2 class=\"counter\">56</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Fun Facts Area -->\r\n\r\n<!-- Start Testimonials Area -->\r\n<section class=\"testimonials ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"testimonial-slides owl-carousel owl-theme\">\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-one.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Jason Statham</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-two.png\" alt=\"client-two\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Tom Hardy</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"single-testimonial-item text-center\">\r\n                <i class=\"fa fa-quote-left\"></i>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.</p>\r\n\r\n                <div class=\"client-profile\">\r\n                    <img src=\"assets/img/client-three.png\" alt=\"client-one\">\r\n                </div>\r\n\r\n                <div class=\"client-info\">\r\n                    <h3>Idris Elba</h3>\r\n                    <span>Founder & Director</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Testimonials Area -->\r\n\r\n<!-- Start FAQ Area -->\r\n<section class=\"faq ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Frequntly Ask & Questions</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">FAQ</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"faq-content\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <a href=\"#\">\r\n                        <div class=\"content-box color-effect-1\">\r\n                            <h3>One More Question?</h3>\r\n                            <div class=\"box-icon-wrap box-icon-effect-1 box-icon-effect-1a\">\r\n                                <div class=\"box-icon\"><i class=\"far fa-share-square\"></i></div>\r\n                            </div>\r\n                            <p>If you have more questions, send us a message and we will answer you as soon as possible.</p>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"col-lg-8\">\r\n                    <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                                        How do I Purchage an item?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseOne\" class=\"panel-collapse collapse show-div show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                                        How to download your items?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseTwo\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                                        View & download invoices?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseThree\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\r\n                                        What is Item Support?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFour\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"panel panel-default\">\r\n                            <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\r\n                                <h4 class=\"panel-title\">\r\n                                    <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\r\n                                        How to contact an author?\r\n                                    </a>\r\n                                </h4>\r\n                            </div>\r\n                            <div id=\"collapseFive\" class=\"panel-collapse collapse show-div\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\r\n                                <div class=\"panel-body\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End FAQ Area -->\r\n\r\n<!-- Start Our Partners Area -->\r\n<section class=\"our-partners ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Our Partners</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Partners</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"partners-slides owl-carousel owl-theme\">\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img1.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img2.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img3.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img4.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img5.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img6.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img7.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img8.png\" alt=\"Image\"></a>\r\n                </div>\r\n                <div class=\"single-partner-logo\">\r\n                    <a class=\"logo-preview\" href=\"#\"><img src=\"assets/img/partners-logo/img9.png\" alt=\"Image\"></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Our Partners Area -->\r\n\r\n<!-- Start Contact Area -->\r\n<section id=\"contact\" class=\"contact-area ptb-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\r\n                <div class=\"section-title\">\r\n                    <h2>Contact with Us</h2>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.</p>\r\n                    <span class=\"section-title-bg\">Contact</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4 col-md-4\">\r\n                <div class=\"address-area\">\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-map-marker-alt\"></i>\r\n                        <h4>Address</h4>\r\n                        <p>2750 Quadra Street Victoria, Canada.</p>\r\n                    </div>\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-envelope\"></i>\r\n                        <h4>Email</h4>\r\n                        <p>myasi@gmail.com</p>\r\n                    </div>\r\n                    <div class=\"contact-info\">\r\n                        <i class=\"fas fa-phone-volume\"></i>\r\n                        <h4>Phone</h4>\r\n                        <p>+1-325-555-0156</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-8 col-md-8\">\r\n                <div class=\"contact-form\">\r\n                    <form id=\"contatc_form\" method=\"POST\" action=\"assets/include/sendmail.php\" name=\"myform\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_name\" name=\"name\" placeholder=\"Name\" required=\"\" data-parsley-minlength=\"4\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" id=\"contact_email\" name=\"email\" placeholder=\"Email\" required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_subject\" name=\"sub\" placeholder=\"Subject\" required=\"\" data-parsley-minlength=\"4\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" id=\"contact_phone\" name=\"phone\" placeholder=\"Phone\" required=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"form-group\">\r\n                                    <textarea class=\"form-control\" id=\"contact_message\" name=\"message\" rows=\"7\" placeholder=\"Message\" required=\"\" data-parsley-trigger=\"keyup\" data-parsley-minlength=\"10\" data-parsley-maxlength=\"100\" data-parsley-minlength-message=\"Come on! You need to enter at least a 10 character comment..\" data-parsley-validation-threshold=\"10\"></textarea>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-12\">\r\n                                <div id=\"contact_send_status\"></div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"center-wrap text-center\">\r\n                            <div class=\"button\">\r\n                                <button type=\"submit\">Send Message</button>\r\n                                <div class=\"mask\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- End Contact Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"#top\" class=\"scrolltop\">Top</a>\r\n\r\n<!-- Start Footer Area -->\r\n<footer class=\"footer\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <p class=\"copyright\">&copy; cod3r 2019</p>\r\n            </div>\r\n            <div class=\"col-md-7\">\r\n                <div class=\"social-icons bottom\">\r\n                    <ul class=\"list-inline\">\r\n                        <li>Følg os på</li>\r\n                        <li><a href=\"#\"><i class=\"fab fa-github\"></i></a></li>\r\n                        <li><a href=\"#\"><i class=\"fab fa-linkedin-in\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n<!-- End Footer Area -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!-- Start Main Header -->\r\n<nav class=\"navbar navbar-expand-md navbar-light\">\r\n    <div class=\"container\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div>\r\n                <img class=\"logo\" src=\"../../assets/cod3/logo_transparent.png\" alt=\"\">\r\n            </div>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            \r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#home\">Hjem</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#services\">Kompetencer</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#works\">Cases</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#about\">About</a>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#tech\">Teknologier</a>\r\n                    </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#team\">Teamet</a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#blog\">Blog</a>\r\n                </li> -->\r\n                <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#pricing\">Pricing</a>\r\n                </li> -->\r\n                <li class=\"nav-item\">\r\n                        <a class=\"nav-link\" href=\"#partners\">Partnere</a>\r\n                    </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#contact\">Kontakt</a>\r\n                </li>\r\n            </ul>\r\n        </div><!--/.nav-collapse -->\r\n        <!-- header-search -->\r\n        <!-- <div class=\"header-search\">\r\n            <button class=\"search-toggle\" data-toggle=\"modal\" data-target=\"#myModal\" ><i class=\"fa fa-search\"></i></button>\r\n        </div> -->\r\n    </div>\r\n</nav>\r\n<!-- End Main Header -->\r\n\r\n<!-- Search Modal -->\r\n<div class=\"search-modal text-center modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-body\">\r\n                <div class=\"header-search-form\">\r\n                    <form>\r\n                        <input type=\"text\" placeholder=\"Search\">\r\n                        <button><i class=\"fa fa-search\"></i></button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- End Search Modal -->\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demos_default_default_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demos/default/default.component */ "./src/app/demos/default/default.component.ts");
/* harmony import */ var _demos_demo_two_demo_two_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demos/demo-two/demo-two.component */ "./src/app/demos/demo-two/demo-two.component.ts");
/* harmony import */ var _demos_demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demos/demo-three/demo-three.component */ "./src/app/demos/demo-three/demo-three.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: 'home', component: _demos_demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_5__["DemoThreeComponent"] },
    { path: 'default', component: _demos_default_default_component__WEBPACK_IMPORTED_MODULE_3__["DefaultComponent"] },
    { path: 'two', component: _demos_demo_two_demo_two_component__WEBPACK_IMPORTED_MODULE_4__["DemoTwoComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _demos_default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demos/default/default.component */ "./src/app/demos/default/default.component.ts");
/* harmony import */ var _demos_demo_two_demo_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demos/demo-two/demo-two.component */ "./src/app/demos/demo-two/demo-two.component.ts");
/* harmony import */ var _demos_demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demos/demo-three/demo-three.component */ "./src/app/demos/demo-three/demo-three.component.ts");
/* harmony import */ var _demos_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demos/blog/blog.component */ "./src/app/demos/blog/blog.component.ts");
/* harmony import */ var _demos_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demos/blog-details/blog-details.component */ "./src/app/demos/blog-details/blog-details.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/team-member/team-member.component */ "./src/app/components/team-member/team-member.component.ts");
/* harmony import */ var _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/technologies/technologies.component */ "./src/app/components/technologies/technologies.component.ts");
/* harmony import */ var _shared_globals__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/globals */ "./src/app/shared/globals.ts");
/* harmony import */ var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/partners/partners.component */ "./src/app/components/partners/partners.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _demos_default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"],
            _demos_demo_two_demo_two_component__WEBPACK_IMPORTED_MODULE_9__["DemoTwoComponent"],
            _demos_demo_three_demo_three_component__WEBPACK_IMPORTED_MODULE_10__["DemoThreeComponent"],
            _demos_blog_blog_component__WEBPACK_IMPORTED_MODULE_11__["BlogComponent"],
            _demos_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_12__["BlogDetailsComponent"],
            _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"],
            _components_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_14__["TeamMemberComponent"],
            _components_technologies_technologies_component__WEBPACK_IMPORTED_MODULE_15__["TechnologiesComponent"],
            _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_17__["PartnersComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_3__["OwlModule"],
        ],
        providers: [_shared_globals__WEBPACK_IMPORTED_MODULE_16__["Globals"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/partners/partners.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/partners/partners.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/partners/partners.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/partners/partners.component.ts ***!
  \***********************************************************/
/*! exports provided: PartnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersComponent", function() { return PartnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PartnersComponent = class PartnersComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PartnersComponent.prototype, "partners", void 0);
PartnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-partners',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./partners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/partners/partners.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./partners.component.css */ "./src/app/components/partners/partners.component.css")).default]
    })
], PartnersComponent);



/***/ }),

/***/ "./src/app/components/skills/skills.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/skills/skills.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SkillsComponent = class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SkillsComponent.prototype, "skills", void 0);
SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-skills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./skills.component.css */ "./src/app/components/skills/skills.component.css")).default]
    })
], SkillsComponent);



/***/ }),

/***/ "./src/app/components/team-member/team-member.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/team-member/team-member.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS1tZW1iZXIvdGVhbS1tZW1iZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/team-member/team-member.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/team-member/team-member.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamMemberComponent = class TeamMemberComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TeamMemberComponent.prototype, "members", void 0);
TeamMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-member',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-member.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-member/team-member.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-member.component.css */ "./src/app/components/team-member/team-member.component.css")).default]
    })
], TeamMemberComponent);



/***/ }),

/***/ "./src/app/components/technologies/technologies.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/technologies/technologies.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVjaG5vbG9naWVzL3RlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/technologies/technologies.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/technologies/technologies.component.ts ***!
  \*******************************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TechnologiesComponent = class TechnologiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TechnologiesComponent.prototype, "tech", void 0);
TechnologiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technologies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technologies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/technologies/technologies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technologies.component.css */ "./src/app/components/technologies/technologies.component.css")).default]
    })
], TechnologiesComponent);



/***/ }),

/***/ "./src/app/demos/blog-details/blog-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/demos/blog-details/blog-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9zL2Jsb2ctZGV0YWlscy9ibG9nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/demos/blog-details/blog-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/demos/blog-details/blog-details.component.ts ***!
  \**************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogDetailsComponent = class BlogDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog-details/blog-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog-details.component.css */ "./src/app/demos/blog-details/blog-details.component.css")).default]
    })
], BlogDetailsComponent);



/***/ }),

/***/ "./src/app/demos/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/demos/blog/blog.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9zL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/demos/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/demos/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/demos/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/demos/default/default.component.css":
/*!*****************************************************!*\
  !*** ./src/app/demos/default/default.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW9zL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/demos/default/default.component.ts":
/*!****************************************************!*\
  !*** ./src/app/demos/default/default.component.ts ***!
  \****************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultComponent = class DefaultComponent {
    constructor() { }
    ngOnInit() {
    }
};
DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/default/default.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default.component.css */ "./src/app/demos/default/default.component.css")).default]
    })
], DefaultComponent);



/***/ }),

/***/ "./src/app/demos/demo-three/demo-three.component.css":
/*!***********************************************************!*\
  !*** ./src/app/demos/demo-three/demo-three.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo{\n    max-width: 100px;\n    max-height: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb3MvZGVtby10aHJlZS9kZW1vLXRocmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGVtb3MvZGVtby10aHJlZS9kZW1vLXRocmVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/demos/demo-three/demo-three.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/demos/demo-three/demo-three.component.ts ***!
  \**********************************************************/
/*! exports provided: DemoThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoThreeComponent", function() { return DemoThreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/globals */ "./src/app/shared/globals.ts");



let DemoThreeComponent = class DemoThreeComponent {
    constructor(globals) {
        this.globals = globals;
        this.name = "{cod3r}";
        this.skills = src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].SKILLS;
        this.members = src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].MEMBERS;
        this.tech = src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].TECH;
        this.partners = src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"].PARTNERS;
    }
    ngOnInit() {
    }
    getSkills() {
        return this.skills;
    }
    getMembers() {
        return this.members;
    }
    getTech() {
        return this.tech;
    }
    getPartners() {
        return this.partners;
    }
};
DemoThreeComponent.ctorParameters = () => [
    { type: src_app_shared_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"] }
];
DemoThreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-three',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-three.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-three/demo-three.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo-three.component.css */ "./src/app/demos/demo-three/demo-three.component.css")).default]
    })
], DemoThreeComponent);



/***/ }),

/***/ "./src/app/demos/demo-two/demo-two.component.css":
/*!*******************************************************!*\
  !*** ./src/app/demos/demo-two/demo-two.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo{\n    z-index: 120;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb3MvZGVtby10d28vZGVtby10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9kZW1vcy9kZW1vLXR3by9kZW1vLXR3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XG4gICAgei1pbmRleDogMTIwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/demos/demo-two/demo-two.component.ts":
/*!******************************************************!*\
  !*** ./src/app/demos/demo-two/demo-two.component.ts ***!
  \******************************************************/
/*! exports provided: DemoTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoTwoComponent", function() { return DemoTwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoTwoComponent = class DemoTwoComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemoTwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-two',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo-two.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demos/demo-two/demo-two.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo-two.component.css */ "./src/app/demos/demo-two/demo-two.component.css")).default]
    })
], DemoTwoComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo{\n    height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIGhlaWdodDogMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/shared/globals.ts":
/*!***********************************!*\
  !*** ./src/app/shared/globals.ts ***!
  \***********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Globals {
}
Globals.SKILLS = [
    { title: 'CMS', content: 'Vi leverer skræddersyede CMS systemer til lige præcis din løsning. Vi laver også gerne platformen dit CMS skal kommuikere med', icon: 'fas fa-cogs' },
    { title: 'Mobil Applikationer', content: 'Vi laver både IOS og Android applikationer, vi leverer altid apps der lever op til Apple og Google\'s krav.', icon: 'fas fa-mobile-alt' },
    { title: 'Internet of Things', content: 'Vi laver unikke IoT løsninger, der dækker netop dine behov. Overvågning, målinger og automatiserede processer er blot et lille udsnit af hvad vi kan leverer.', icon: 'fab fa-connectdevelop' },
    { title: 'Progressive Web App', content: 'Har du travlt med din go-to-market strategi kan vi hurtigt hjælpe dig igang med en PWA.', icon: 'fas fa-tablet-alt' },
    { title: 'Database Løsninger', content: 'Vil du gerne skifte det analoge system ud med en cloud baseret database løsning, er vi eksperter på området og kan hurtigt og nemt få dig igang med en skræddersyet cloud løsning til lige netop din forretning.', icon: 'fas fa-database' },
    { title: 'Service Aftaler', content: 'Når vi har udviklet dit produkt vil vi meget gerne hjælpe dig med at holde det kørende. Vi tilbyder at stå for alt fra upload til vedligholdelse af din løsning, så du kan fokusere på din forretning uden at skulle bekymre dig om teknikken.', icon: 'fas fa-tools' },
];
Globals.MEMBERS = [
    { firstName: 'Patrick', lastName: 'Ørum', title: 'Lead Developer', img: '../../../assets/cod3/profile.png', linkedIN: 'https://www.linkedin.com/in/patrick-oerum/', github: 'https://github.com/PatrickOerum' },
    { firstName: 'Jesper', lastName: 'Krøyer', title: 'Developer', img: '../../../assets/cod3/profile.png', linkedIN: '', github: '' },
    { firstName: 'Frederik', lastName: 'Skærbæk', title: 'Developer', img: '../../../assets/cod3/profile.png', linkedIN: '', github: '' },
    { firstName: 'Kevin', lastName: 'Van Merkom', title: 'Developer', img: '../../../assets/cod3/profile.png', linkedIN: '', github: '' },
];
Globals.TECH = [
    { title: 'Angular', content: 'Angular 8+ er vores primære web udviklings framework', control: 'one' },
    { title: '.NET', content: 'Vi har stor efaring med C# .NET udvikling og udvikler størstedelen af vores services i .NET', control: 'two' },
    { title: 'SQL', content: 'Vi udarbejder alle former for SQL databaser og servere. Vi har også erfaring med NoSQL og udvikler gerne Firebase og MongoDB løsninger', control: 'three' },
    { title: 'Javascript/Typescipt', content: 'I webudviklingen anvender vi JS/TS', control: 'five' },
    { title: 'Swift/Android', content: 'Vi anvender swift/android(java) når vi laver native applikationer til hhv. App Store og Google Play Store', control: 'six' },
    { title: 'SCRUM', content: 'Vi arbejder i agile SCRUM+ teams, hvor vi er i tæt samarbejde med kunden', control: 'seven' },
    { title: 'HTML/CSS', content: 'Vi laver flotte og responsive designs, der virker på alle platforme og devices', control: '' },
];
Globals.PARTNERS = [
    { img: 'rapido.jpg', link: 'https://rapidoconsult.dk/' },
    { img: 'fanrejser.png', link: 'https://fanrejser.dk/' },
    { img: 'hero.png', link: 'https://heroappmaker.dk/' }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrick/Documents/VSCode/cod3r-webpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
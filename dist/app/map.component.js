"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LocationMap = (function () {
    function LocationMap() {
        this.searchTerm = 'Spiceball Park Banbury';
    }
    LocationMap.prototype.ngOnInit = function () {
        console.log('map init');
        this.fullMapUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDM_exFaOx693tTRzfVzn30Fo77SsrzMwY&q' + this.searchTerm;
        console.log(this.fullMapUrl);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LocationMap.prototype, "searchTerm", void 0);
    LocationMap = __decorate([
        core_1.Component({
            selector: 'location-map',
            template: "\n    <div class=\"location-map-wrapper\">\n        <iframe\n          frameborder=\"0\" style=\"border:0\"\n          [src]=\"'https://www.google.com/maps/embed/v1/place?key=AIzaSyDM_exFaOx693tTRzfVzn30Fo77SsrzMwY&q=' + searchTerm | safe\">\n        </iframe>\n        <p class=\"location-map-toggle\">Show more</p>\n    </div>\n  ",
            styles: ["\n    iframe{\n        width: 90%;\n        height: 300px;\n\n        margin: 0 auto;\n    }\n    .location-map-wrapper{\n        width: 100%;\n        text-align: center;\n\n        padding: 1em;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], LocationMap);
    return LocationMap;
}());
exports.LocationMap = LocationMap;
//# sourceMappingURL=map.component.js.map
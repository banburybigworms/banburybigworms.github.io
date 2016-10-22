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
var training_date_1 = require('./training-date');
var lightBlue = '#07a4d7';
var TrainingDateComponent = (function () {
    function TrainingDateComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', training_date_1.TrainingDate)
    ], TrainingDateComponent.prototype, "trainingDate", void 0);
    TrainingDateComponent = __decorate([
        core_1.Component({
            selector: 'training-date',
            template: "\n    <div class=\"training-date-wrapper\">\n      <h3>{{ trainingDate.location }}</h3>\n      <p>{{ trainingDate.dayName }}s at {{ trainingDate.hour }}.{{ trainingDate.minuteString }}</p>\n      <location-map [searchTerm]=\"trainingDate.location\"></location-map>\n    </div>\n  ",
            styles: ["\n    .training-date-wrapper{\n        padding: 0.5em 1em;\n        background-color: white;\n        margin: 1em;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], TrainingDateComponent);
    return TrainingDateComponent;
}());
exports.TrainingDateComponent = TrainingDateComponent;
//# sourceMappingURL=training-date-component.js.map
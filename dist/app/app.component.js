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
var event_1 = require('./event');
require('bootstrap/dist/css/bootstrap.css');
require('../styles.css');
var AppComponent = (function () {
    function AppComponent() {
        this.trainingDates = [
            new training_date_1.TrainingDate(0, 14, 0, 'Spiceball Park'),
            new training_date_1.TrainingDate(1, 18, 30, 'The Warriner School')
        ];
        this.events = [
            new event_1.Event('Test Event', new Date(2016, 12, 25))
        ];
        this.testTDate = new training_date_1.TrainingDate(1, 1, 1, 'Test');
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initializing...');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: require('./app.component.html'),
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
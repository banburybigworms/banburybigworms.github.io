"use strict";
var dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];
var TrainingDate = (function () {
    /**
     * just a day of a training
     * @param  {number} weekDay  the day of the week for the training
     * @param  {number} hour     the hour of the training
     * @param  {number} minute   the minute of the training
     * @param  {string} location the location of the training
     * @return {object}          returns self, in case of piping
     */
    function TrainingDate(weekDay, hour, minute, location) {
        this.weekDay = 0;
        this.hour = 0;
        this.minute = 0;
        this.dayName = '';
        this.location = '';
        this.minuteString = '';
        this.weekDay = weekDay;
        this.hour = hour;
        this.minute = minute;
        this.minuteString = this.minute + (this.minute < 10 ? '0' : '');
        this.dayName = dayNames[this.weekDay];
        this.location = location;
        return this;
    }
    return TrainingDate;
}());
exports.TrainingDate = TrainingDate;
//# sourceMappingURL=training-date.js.map
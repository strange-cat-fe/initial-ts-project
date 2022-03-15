"use strict";
var ExEnum;
(function (ExEnum) {
    ExEnum[ExEnum["first"] = 0] = "first";
    ExEnum[ExEnum["second"] = 1] = "second";
})(ExEnum || (ExEnum = {}));
console.log(Object.keys(ExEnum));

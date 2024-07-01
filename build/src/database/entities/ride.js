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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = exports.RideStatus = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("./user");
var RideStatus;
(function (RideStatus) {
    RideStatus["REQUESTED"] = "requested";
    RideStatus["ACCEPTED"] = "accepted";
})(RideStatus || (exports.RideStatus = RideStatus = {}));
var Ride = /** @class */ (function () {
    function Ride() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            type: "int",
            name: "id",
        }),
        __metadata("design:type", Number)
    ], Ride.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.requestedRides; }),
        __metadata("design:type", user_1.User)
    ], Ride.prototype, "rider", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Ride.prototype, "riderId", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }, function (user) { return user.acceptedRides; }),
        __metadata("design:type", user_1.User)
    ], Ride.prototype, "driver", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Ride.prototype, "driverId", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: RideStatus,
        }),
        __metadata("design:type", String)
    ], Ride.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Ride.prototype, "source", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Ride.prototype, "destination", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp",
            default: function () { return "CURRENT_TIMESTAMP(6)"; },
        }),
        __metadata("design:type", Date)
    ], Ride.prototype, "createdAt", void 0);
    Ride = __decorate([
        (0, typeorm_1.Entity)()
    ], Ride);
    return Ride;
}());
exports.Ride = Ride;
//# sourceMappingURL=ride.js.map
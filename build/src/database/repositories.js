"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideRepository = exports.UserRepository = void 0;
var ormconfig_1 = require("../../ormconfig");
var user_1 = require("./entities/user");
var ride_1 = require("./entities/ride");
exports.UserRepository = ormconfig_1.AppDataSource.getRepository(user_1.User);
exports.RideRepository = ormconfig_1.AppDataSource.getRepository(ride_1.Ride);
//# sourceMappingURL=repositories.js.map
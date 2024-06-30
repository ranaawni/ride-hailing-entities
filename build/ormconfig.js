"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var dotenv_1 = __importDefault(require("dotenv"));
var entities_1 = require("./src/database/entities");
dotenv_1.default.config();
var _a = process.env, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, DB_NAME = _a.DB_NAME;
var dataSourceOptions = {
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    logging: false,
    entities: entities_1.entities,
    migrations: ["src/database/migrations/**/*.{ts,js}"],
    subscribers: ["src/database/subscriber/**/*.{ts,js}"],
};
exports.AppDataSource = new typeorm_1.DataSource(dataSourceOptions);
//# sourceMappingURL=ormconfig.js.map
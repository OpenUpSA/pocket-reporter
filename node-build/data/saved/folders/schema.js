"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
var schema_1 = require("../../hardcoded/icons/schema");
exports.mockFolder = function () { return ({
    title: faker_1.default.commerce.department(),
    icon: schema_1.mockIcon(),
    translations: {
        afr: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        spa: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        xho: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        nso: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        por: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        sot: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        tsn: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
        zul: faker_1.default.random.boolean() ? faker_1.default.commerce.department() : '',
    },
    questions: [1, 2, 3].map(function () { return ({
        content: faker_1.default.random.boolean() ? faker_1.default.commerce.productName() : '',
    }); }),
    resources: [1, 2, 3].map(function () { return ({
        content: faker_1.default.random.boolean() ? faker_1.default.commerce.productName() : '',
    }); }),
}); };
//# sourceMappingURL=schema.js.map
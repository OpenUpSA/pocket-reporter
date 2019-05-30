"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Imports tooling required to build mock data
 */
var faker_1 = __importDefault(require("faker"));
exports.icons = [
    'Public',
    'School',
    'Poll',
    'Person',
    'People',
    'Notifications',
    'FreeBreakfast',
    'FitnessCenter',
    'ChildFriendly',
    'Casino',
    'BusinessCenter',
    'AirportShuttle',
    'Wifi',
    'Wc',
    'TimeToLeave',
    'Power',
    'Cancel',
    'Train',
    'Traffic',
    'StoreMallDirectory',
    'Restaurant',
    'Place',
    'LocalShipping',
    'LocalPostOffice',
    'LocalPlay',
    'LocalPhone',
    'LocalTaxi',
    'LocalHospital',
    'ShoppingCart',
    'LocalGasStation',
    'Flight',
    'WbSunny',
    'Timelapse',
    'Image',
    'FlashOn',
    'ColorLens',
    'Audiotrack',
    'Security',
    'PhoneIphone',
    'KeyboardVoice',
    'Weekend',
    'Report',
    'Mail',
    'HowToVote',
    'VpnKey',
    'VolumeUp',
    'Work',
    'Grade',
    'Info',
];
exports.mockIcon = function () { return faker_1.default.random.arrayElement(exports.icons); };
//# sourceMappingURL=schema.js.map
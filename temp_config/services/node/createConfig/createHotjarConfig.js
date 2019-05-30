"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createHotjarConfig = function (_a) {
    var id = _a.id, sv = _a.sv;
    if (!id || !sv) {
        return [];
    }
    return [
        {
            resolve: 'gatsby-plugin-hotjar',
            options: {
                id: id,
                sv: sv,
            },
        },
    ];
};
exports.default = createHotjarConfig;
//# sourceMappingURL=createHotjarConfig.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createAnalyticsConfig = function (trackingId) {
    if (!trackingId) {
        return [];
    }
    return [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: trackingId,
            },
        },
    ];
};
exports.default = createAnalyticsConfig;
//# sourceMappingURL=createAnalyticsConfig.js.map
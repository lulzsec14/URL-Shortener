"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1["default"].Schema({
    shortUrl: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "shortUrl",
        required: true
    }
}, { timestamps: true });
var analytics = mongoose_1["default"].model("analytics", schema);
exports["default"] = analytics;

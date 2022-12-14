"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var nanoid_1 = require("nanoid");
var nanoid = (0, nanoid_1.customAlphabet)("abcdefghijklmnopqrstuv0987654321", 6);
var schema = new mongoose_1["default"].Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        "default": function () { return nanoid(); }
    },
    destination: { type: String, required: true }
});
var shortUrl = mongoose_1["default"].model("shortUrl", schema);
exports["default"] = shortUrl;

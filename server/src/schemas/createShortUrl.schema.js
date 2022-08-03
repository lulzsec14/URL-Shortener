"use strict";
exports.__esModule = true;
var yup_1 = require("yup");
exports["default"] = (0, yup_1.object)({
    body: (0, yup_1.object)({
        destination: (0, yup_1.string)()
            .url("Must be a valid URL")
            .required("Destination is required")
    })
});
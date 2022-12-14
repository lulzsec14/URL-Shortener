"use strict";
exports.__esModule = true;
var shortUrl_controller_1 = require("../controller/shortUrl.controller");
var validateResourse_1 = require("../middleware/validateResourse");
var createShortUrl_schema_1 = require("../schemas/createShortUrl.schema");
function routes(app) {
    app.get("/healthcheck", function (req, res) {
        return res.send("App is healthy");
    });
    app.post("/api/url", (0, validateResourse_1["default"])(createShortUrl_schema_1["default"]), shortUrl_controller_1.createShortUrl);
    app.get("/:shortId", shortUrl_controller_1.handleRedirect);
    app.get("/api/url/:shortId", shortUrl_controller_1.getShortUrl);
    app.get("/api/analytics", shortUrl_controller_1.getAnalytics);
}
exports["default"] = routes;

"use strict";
var assert = require("power-assert");
var getTitle = require("../lib/get-title-html");
var fs = require("fs");
describe("get-title-html", function () {
    context("when content is undefined", function () {
        var content = undefined;
        it("should return undefined", function () {
            assert(getTitle(content) === undefined);
        });
    });
    context("when not found <title>", function () {
        var content = fs.readFileSync(__dirname + "/fixtures/not-found-title.html", "utf-8");
        it("should return null", function () {
            assert(getTitle(content) == null);
        });
    });
    context("when has <title>", function () {
        var content = fs.readFileSync(__dirname + "/fixtures/has-title.html", "utf-8");
        it("should return title content", function () {
            assert(getTitle(content) === "ゆのさん");
        });
    });
    context("when has multiple <title>s", function () {
        var content = fs.readFileSync(__dirname + "/fixtures/has-multiple-title.html", "utf-8");
        it("should return first title content", function () {
            assert(getTitle(content) === "first");
        });
    });
});
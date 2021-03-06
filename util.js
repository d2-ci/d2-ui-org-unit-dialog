'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Remove last segment from OU path
 * @param path
 * @returns {string | *}
 */
var removeLastPathSegment = function removeLastPathSegment(path) {
    // if root path, then return unprocessed path
    if (path.match(/\//g).length === 1) {
        return path;
    }

    return path.substr(0, path.lastIndexOf('/'));
};

exports.default = removeLastPathSegment;
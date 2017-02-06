/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



/**
 * KarmiaUtilityObject
 *
 * @class
 */
class KarmiaUtilityObject {
    /**
     * Constructor
     *
     * @constructs KarmiaUtilityObject
     */
    constructor() {
        const self = this;

        self.isObject = KarmiaUtilityObject.isObject;
        self.isPlainObject = KarmiaUtilityObject.isPlainObject;
        self.flip = KarmiaUtilityObject.flip;
        self.removeProperty = KarmiaUtilityObject.removeProperty;
    }

    /**
     * Check if value is an instance of Object
     *
     * @param value
     * @returns {boolean}
     */
    static isObject(value) {
        return (value instanceof Object);
    }

    /**
     * Check if value is a plain object
     *
     * @param value
     * @returns {boolean}
     */
    static isPlainObject(value) {
        return (Object.getPrototypeOf(value) === Object.prototype);
    }

    /**
     * Get object that exchanges key with their value
     *
     * @param   {Object} object
     * @returns {Object}
     */
    static flip(object) {
        return Object.keys(object).reduce(function (collection, key) {
            collection[object[key]] = key;

            return collection;
        }, {});
    }

    /**
     * Remove property from object
     *
     * @param   {Object} object
     * @param   {Array} properties
     * @returns {Object}
     */
    static removeProperty(object, properties) {
        properties = properties || [];
        const list = Array.isArray(properties) ? properties : [properties];

        return Object.keys(object).reduce(function (collection, key) {
            if (-1 < list.indexOf(key)) {
                return collection;
            }

            collection[key] = object[key];
            if (KarmiaUtilityObject.isObject(object[key])) {
                collection[key] = KarmiaUtilityObject.removeProperty(collection[key], list);
            }

            return collection;
        }, {});
    }
}


// Export module
module.exports = function (options) {
    return new KarmiaUtilityObject(options || {});
};



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

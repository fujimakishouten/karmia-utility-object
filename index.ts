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
     * Properties
     */
    public isObject = KarmiaUtilityObject.isObject;
    public isPlainObject = KarmiaUtilityObject.isPlainObject;
    public flip = KarmiaUtilityObject.flip;
    public mergeProperties = KarmiaUtilityObject.mergeProperties;
    public removeProperty = KarmiaUtilityObject.removeProperty;

    /**
     * Check if value is an instance of Object
     *
     * @param {*} value
     * @returns {boolean}
     */
    static isObject(value: any) {
        return (value instanceof Object);
    }

    /**
     * Check if value is a plain object
     *
     * @param {*} value
     * @returns {boolean}
     */
    static isPlainObject(value: any) {
        return (Object.getPrototypeOf(value) === Object.prototype);
    }

    /**
     * Get object that exchanges key with their value
     *
     * @param   {Object} object
     * @returns {Object}
     */
    static flip(object: {[index: string]: any}) {
        return Object.keys(object).reduce(function (collection: {[index: string]: any}, key: any) {
            collection[object[key]] = key;

            return collection;
        }, {});
    }

    /**
     * Recursively merge properties
     *
     * @param {Object} object1
     * @param {Object} object2
     * @returns {Object}
     */
    static mergeProperties(object1: {[index: string]: any}, object2: {[index: string]: any}) {
        return Object.keys(object2).reduce(function (collection, key) {
            if (key in collection) {
                if (Object.getPrototypeOf(collection[key]) === Object.prototype) {
                    if (Object.getPrototypeOf(object2[key]) === Object.prototype) {
                        collection[key] = KarmiaUtilityObject.mergeProperties(collection[key], object2[key]);

                        return collection;
                    }
                }
            }
            collection[key] = object2[key];

            return collection;
        }, Object.assign({}, object1));
    }

    /**
     * Remove property from object
     *
     * @param   {Object} object
     * @param   {Array} properties
     * @returns {Object}
     */
    static removeProperty(object: {[index: string]: any}, properties: Array<string>|string) {
        properties = properties || [];
        const list = Array.isArray(properties) ? properties : [properties];

        return Object.keys(object).reduce(function (collection: {[index: string]: any}, key: any) {
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
export = KarmiaUtilityObject;



/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

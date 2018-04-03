declare class KarmiaUtilityObject {
    constructor();
    isObject(value: any): boolean;
    isPlainObject(value: any): boolean;
    flip(object: object): object;
    mergeProperties(object1: object, object2: object): object;
    removeProperty(object: object, properties: Array<any>|any): object;
}

export = KarmiaUtilityObject;

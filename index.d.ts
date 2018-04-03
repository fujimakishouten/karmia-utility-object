declare class KarmiaUtilityObject {
    constructor();
    isObject(value: any): boolean;
    isPlainObject(value: any): boolean;
    flip(object: object): object;
    mergeProperties(object1: object, object2: object): object;
    removeProperty(object: object, properties: Array<any>|any): object;
}

declare function karmia_utility_object(options: object): KarmiaUtilityObject;
export = karmia_utility_object;

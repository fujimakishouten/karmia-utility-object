declare module KarmiaUtility {
    export class KarmiaUtilityObject {
        isObject(value: any): boolean;
        isPlainObject(value: any): boolean;
        flip(object: Object): Object;
        mergeProperties(object1: Object, object2: Object): Object;
        removeProperty(object: Object, properties: Array<any>|any): Object;
    }
}

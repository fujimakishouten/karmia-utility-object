/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/* eslint-env es6, mocha, node */
/* eslint-extends: eslint:recommended */
'use strict';



// Variables
const expect = require('expect.js'),
    karmia_utility_object = require('../lib'),
    kobject = karmia_utility_object();


// Test
describe('karmia-utility-object', function () {
    describe('isObject', function () {
        describe('Should be object', function () {
            it('Object', function () {
                expect(kobject.isObject({})).to.be(true);
            });

            it('Array', function () {
                expect(kobject.isObject([])).to.be(true);
            });

            it('Function', function () {
                expect(kobject.isObject(function () {})).to.be(true);
            });

            it('Generator', function () {
                expect(kobject.isObject(function* () {})).to.be(true);
            });
        });

        describe('Should not be object', function () {
            it('string', function () {
                expect(kobject.isObject('a')).to.be(false);
            });

            it('number', function () {
                expect(kobject.isObject(1.0)).to.be(false);
            });

            it('boolean', function () {
                expect(kobject.isObject(true)).to.be(false);
            });
        });
    });

    describe('isPlainObject', function () {
        describe('Should be object', function () {
            it('Object', function () {
                expect(kobject.isPlainObject({})).to.be(true);
            });
        });

        describe('Should not be object', function () {
            it('Array', function () {
                expect(kobject.isPlainObject([])).to.be(false);
            });

            it('Function', function () {
                expect(kobject.isPlainObject(function () {})).to.be(false);
            });

            it('Generator', function () {
                expect(kobject.isPlainObject(function* () {})).to.be(false);
            });

            it('string', function () {
                expect(kobject.isPlainObject('a')).to.be(false);
            });

            it('number', function () {
                expect(kobject.isPlainObject(1.0)).to.be(false);
            });

            it('boolean', function () {
                expect(kobject.isPlainObject(true)).to.be(false);
            });
        });
    });

    describe('flip', function () {
        it('Should get object that exchanges key with their value', function () {
            const object = {a: 'A', b: 'B', c: 'C', d: 1, e: 2, f: 3},
                result = kobject.flip(object);

            Object.keys(object).forEach(function (key) {
                expect(result[object[key]]).to.be(key);
            });
        });
    });

    describe('removeProperty', function () {
        describe('Should remove property', function () {
            it('Should remove top level property', function () {
                const object = {a: 'A', b: 'B', c: 'C', d: 1, e: 2, f: 3},
                    result = kobject.removeProperty(object, 'c');

                expect(result).to.have.keys(['a', 'b', 'd', 'e', 'f']);
                expect(result).to.not.have.key('c');
            });

            it('Should remove deep level property', function () {
                const object = {
                        a: {
                            b: {
                                c: {
                                    d: {
                                        e: {
                                            f: 'value'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    result = kobject.removeProperty(object, 'e');

                expect(result).to.eql({
                    a: {
                        b: {
                            c: {
                                d: {}
                            }
                        }
                    }
                });
            });

            it('Should remove multi level properties', function () {
                const object = {
                        a: {
                            a: {
                                key: {}
                            }
                        },
                        b: {
                            b: {
                                b: {
                                    b: {
                                        key: {}
                                    }
                                }
                            }
                        }
                    },
                    result = kobject.removeProperty(object, 'key');

                expect(result).to.eql({
                    a: {
                        a: {}
                    },
                    b: {
                        b: {
                            b: {
                                b: {}
                            }
                        }
                    }
                });
            });

            it('Should remove multi properties', function () {
                const object = {
                        a: {
                            a: {
                                a1: {}
                            }
                        },
                        b: {
                            b: {
                                b1: {}
                            }
                        }
                    },
                    result = kobject.removeProperty(object, ['a1', 'b1']);

                expect(result).to.eql({
                    a: {
                        a: {}
                    },
                    b: {
                        b: {}
                    }
                });
            });
        });
    });
});

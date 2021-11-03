/**
 * Group objects by a shared key
 * @param {Array.<Object>} obj - array of object with a common key
 * @param {string} key - string key by which to group
 * @returns {Object} - object with top level properties 
 */
const groupBy = function(obj, key) {
    return obj.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

/**
 * Pick certain keys from an Object
 * @param {object} obj - input object
 * @param {Array.<string>} keys - array of properties (string keys)
 * @returns {object} - object with only the keys from our keys array parameter
 */
const pick = (obj, keys) => {
	return keys.map(k => k in obj ? { [k]: obj[k] } : {})
		.reduce((res, o) => Object.assign(res, o), {});
}

/**
 * Remove certain keys from an Object
 * @param {object} obj - input object
 * @param {Array.<string>} keys - array of properties (string keys)
 * @returns {object} - object without the keys from our keys array parameter
 */
const reject = (obj, keys) => {
	const vkeys = Object.keys(obj)
		.filter(k => !keys.includes(k));
	return pick(obj, vkeys);
}

/**
 * A more elegant way to map over an object
 * @param {*} obj 
 * @param {*} fn 
 * @returns 
 */
const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  );
  /**
 * Because I'm doing some dumb stuff with objects with a single variable
 * property name I created this method to get the key consistently
 * in a way that's hopefully a little more clear and consistant
 * @param {object} obj - simple object { variablePropName: value }
 * @returns the key of the single property object
 */
   const getOnlyKey = (obj) => 
   Object.keys(obj)[0]
/**
 * Because I'm doing some dumb stuff with objects with a single variable
 * property name I created this method to get the value consistently
 * in a way that's hopefully a little more clear and consistant
 * @param {object} obj - simple object { variablePropName: value }
 * @returns the value of the single property object
 */
  const getOnlyValue = (obj) => 
    obj[getOnlyKey(obj)]

export { groupBy, pick, reject, objectMap, getOnlyValue, getOnlyKey }
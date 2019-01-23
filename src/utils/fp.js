/**
 * @module utils/fp
 * ================
 */

/**
 * Compose functions
 * @param  {...Function} [...fns]
 * @return {*}
 */
export const compose = (...fns) => (x) => {
  return fns.reduceRight((v, next) => next(v), x)
}

/**
 * Compose functions by pipe
 * @param  {...Function} [...fns]
 * @return {*}
 */
export const pipe = (...fns) => (x) => {
  return fns.reduce((v, f) => f(v), x)
}

/**
 * Extract value from object
 * @param  {string} keyName
 * @return {Object}
 */
export const extractFromObj = (keyName) => (obj) => obj[keyName]

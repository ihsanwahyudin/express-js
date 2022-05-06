
const pick = (object: { [x: string]: any }, keys: any[]) => {
  return keys.reduce((obj: { [x: string]: any }, key: string | number) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key]
    }
    return obj
  }, {})
}

export default pick
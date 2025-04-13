/**
 * get 请求参数处理
 * @param {*} params 
 */
export function transParams(params) {
    if (Object.prototype.toString.call(params) === '[object Object]') {
        let result = ''
        for (const propName of Object.keys(params)) {
            const value = params[propName];
            var part = encodeURIComponent(propName) + "=";
            if (value !== null && value !== "" && typeof (value) !== "undefined") {
                if (typeof value === 'object') {
                    for (const key of Object.keys(value)) {
                        if (value[key] !== null && value[key] !== "" && typeof (value[key]) !== 'undefined') {
                            let params = propName + '[' + key + ']';
                            var subPart = encodeURIComponent(params) + "=";
                            result += subPart + encodeURIComponent(value[key]) + "&";
                        }
                    }
                } else {
                    result += part + encodeURIComponent(value) + "&";
                }
            }
        }
        return result
    } else {
        throw new Error('参数格式错误')
    }

}
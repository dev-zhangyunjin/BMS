import Cookies from "js-cookie"
const TokenKey = 'BMS_TOKEN'

export const getToken = () => Cookies.get(TokenKey)

export const setToken = (value) => Cookies.set(TokenKey, value)

export const removeToken = () => Cookies.remove(TokenKey)
import { RespBody } from "../type"

const getResp = (code: number, msg?: string, obj?: any): RespBody => {
    return {
        code: code,
        msg: msg,
        obj: obj
    }
}

const getRestPath = (path: string) => {
    return `/${path.trim().split('/').slice(2).join('/')}`
}

export { getResp, getRestPath }
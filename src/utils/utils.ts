import { RespBody } from "../type"

const getResp = (code: number, msg?: string, obj?: any): RespBody => {
    return {
        code: code,
        msg: msg,
        obj: obj
    }
}

export { getResp }
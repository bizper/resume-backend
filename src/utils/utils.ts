import { RespBody } from "../type"

const getResp = (code: number, msg?: string, obj?: any): RespBody => {
    return {
        code: code,
        msg: msg,
        obj: obj
    }
}

const getRestPath = (path: string) => {
    return `/${path.trim().split('?')[0].split('/').slice(2).join('/')}`
}

const parseUrlArgs = (path: string): { [key: string]: string } => {
    const args = path.split('?')[1]
    const res: { [key: string]: string } = {}
    const arr = args.split('=')
    for(let i = 0; i<arr.length; i+=2) {
        res[arr[i]] = arr[i + 1]
    }
    return res
}

export { getResp, getRestPath, parseUrlArgs }
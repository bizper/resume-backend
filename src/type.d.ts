export declare interface RespBody {
    code: number
    msg?: string
    obj?: any
}

export declare interface User {
    username: string
    password: string
}

export declare interface Record {
    title: string
    text: string
    date: Date
    tag: string
}

export type Operation = 'eq' | 'gt' | 'lt'

export type Sort = 'asc' | 'desc'

export declare interface QueryParam {
    begin?: number
    page?: number
    limit?: number
    filters?: {
        [key: string]: { operation: Operation , value: string }
    }
    sort?: {
        [key: string]: Sort
    }
}

export declare interface RequestFileParam {
    filename: string
    path?: string
}
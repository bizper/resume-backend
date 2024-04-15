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

export declare interface QueryParam {
    begin?: number
    page?: number
    limit?: number
    filters?: {
        [key: string]: { operation: 'eq' | 'gt' | 'lt' , value: string }
    }
    sort?: {
        [key: string]: 'asc' | 'desc'
    }
}
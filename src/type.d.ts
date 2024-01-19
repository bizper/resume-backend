import Koa from 'koa'

type Context = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext, any>

export declare interface RespBody {
    code: number
    msg?: string
    obj?: any
}
import { FileService } from '../services'
import { Context } from '../type'
import { getResp } from '../utils/utils'

const Router = (ctx: Context, next: any) => {

    console.log(`request for: ${ctx.url} by ${ctx.method}`)
    ctx.response.header['x-content-type-options'] = 'application/json'

    const url = ctx.url.split('/')[1]

    console.log(url)
    
    switch(url) {
        case 'other':
            ctx.body = FileService.dispatch(ctx.method, ctx.url.trim())
            return
        default:
            ctx.body = getResp(1, 'Not Found Resources')
            return
    }

}

export default Router
import { FileService, PhotoService } from '../services'
import { Context } from '../type'
import { getResp, getRestPath, parseUrlArgs } from '../utils/utils'
const Router = (ctx: Context, next: any) => {

    console.log(`request for: ${ctx.url} by ${ctx.method}`)
    ctx.response.header['x-content-type-options'] = 'application/json'

    const url = ctx.url.split('/')[1]

    console.log(url)

    let result
    
    switch(url) {
        case 'albums':
            result = PhotoService.getAllPhotos()
            ctx.body = result
            return
        case 'other':
            result = FileService.dispatch(ctx.method, getRestPath(ctx.url.trim()), parseUrlArgs(ctx.url.trim()))
            if(result instanceof Buffer) {
                ctx.response.header['x-content-type-options'] = 'image/jpeg'
                
            }
            ctx.body = result
            return
        default:
            ctx.body = getResp(1, 'Not Found Resources')
            return
    }

}

export default Router
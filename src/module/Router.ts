import router from 'koa-router'
import { PhotoService } from '../services'

const albums = new router()

albums.get('/getAll', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await PhotoService.getAllPhotos()
})

const main = new router()
main.use('/albums', albums.routes(), albums.allowedMethods())

export default main
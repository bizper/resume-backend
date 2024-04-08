import router from 'koa-router'
import { PhotoService, RecordService } from '../services'

const albums = new router()

albums.get('/getAll', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await PhotoService.getAllPhotos()
})

const records = new router()

records.get('/', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await RecordService.getAllRecords()
})

const main = new router()
main.use('/albums', albums.routes(), albums.allowedMethods())
main.use('/records', records.routes(), records.allowedMethods())

export default main
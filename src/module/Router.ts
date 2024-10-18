import router from 'koa-router'
import { MusicService, PhotoService, RecordService } from '../services'
import UserService from '../services/UserService'
import { QueryParam, Record, RequestFileParam } from '../type'

const files = new router()

files.get('/play', async (ctx) => {
    ctx.response.header['Content-Type'] = 'audio/mpeg'
    const filename = `${ctx.query.filename}`
    const stream = await MusicService.getMusic(filename)
    ctx.body = stream
})

const albums = new router()

albums.get('/getAll', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await PhotoService.getAllPhotos()
})

const records = new router()

records.post('/', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await RecordService.getAllRecords(ctx.request.body as QueryParam)
})

records.post('/new', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    ctx.body = await RecordService.newRecord(ctx.request.body as Record)
})

const main = new router()
main.use('/albums', albums.routes(), albums.allowedMethods())
main.use('/records', records.routes(), records.allowedMethods())
main.use('/file', files.routes(), files.allowedMethods())
main.post('/login', async (ctx) => {
    ctx.response.header['Content-Type'] = 'application/json'
    const { username, password } = ctx.request.body as any
    ctx.body = await UserService.getUser(username, password)
})

export default main
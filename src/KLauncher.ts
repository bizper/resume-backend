import Koa from 'koa'
import cors from '@koa/cors'
import { Router } from './module'
import bodyparser from 'koa-bodyparser'

class KLauncher {

    private port = 8090

    private static instance?: KLauncher = undefined

    private constructor() {
        this.app = new Koa()
        this.app.use(cors())
        this.app.use(bodyparser())
        this.app.use(Router.routes()).use(Router.allowedMethods())
    }

    static getInstance(): KLauncher {
        if(KLauncher.instance === undefined) {
            KLauncher.instance = new KLauncher()
        }
        return KLauncher.instance
    }

    private app: Koa

    launch() {
        this.app.listen(this.port)
        console.log(`server running on ${this.port} successfully!`)
    }

}

function getLauncher() {
    return KLauncher.getInstance()
}

export default getLauncher()
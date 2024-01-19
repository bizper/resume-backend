import Koa from 'koa'
import { Router } from './module'

class KLauncher {

    private static instance?: KLauncher = undefined

    private constructor() {
        this.app = new Koa()
        this.app.use(Router)
    }

    static getInstance(): KLauncher {
        if(KLauncher.instance === undefined) {
            KLauncher.instance = new KLauncher()
        }
        return KLauncher.instance
    }

    private app: Koa

    launch() {
        this.app.listen(8080)
        console.log('server running on 8080 successfully!')
    }

}

function getLauncher() {
    return KLauncher.getInstance()
}

export { KLauncher, getLauncher }
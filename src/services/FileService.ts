import { getResp } from "../utils/utils";
import fs from 'fs'

class FileService {

    dispatch(method: string, resource: string, args?: { [key: string]: string }) {
        if (method === 'GET') {
            switch (resource) {
                case '/getFile':
                    return this.getFile(args)
            }
        } else {
            return getResp(1, 'Only Accept by GET')
        }

    }

    getFile(args?: { [key: string]: string }) {
        if(args && args.Id) {
            console.log(`ask for file: ${decodeURI(args.Id)}`)
            const filepath = `/root/pics/${args.Id}`
            if(!fs.existsSync(filepath)) {
                return getResp(1, `file: /root/pics/${filepath} not exists.`)
            }
            const file = fs.readFileSync(filepath)
            return file
        } else {
            return getResp(1, 'No Args Id')
        }
    }
}

export default new FileService()
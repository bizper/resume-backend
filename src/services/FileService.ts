import { getResp, getRestPath } from "../utils/utils";

class FileService {

    dispatch(method: string, resource: string, args?: { [key: string]: string }) {
        if (method === 'GET') {
            switch (resource) {
                case '/getFile':
                    return this.getFile(args ? parseInt(args.Id) : 0)
            }
        } else {
            return getResp(1, 'Only Accept by GET')
        }

    }

    getFile(Id: number) {
        console.log(`ask for file: ${Id}`)
        return getResp(0, 'success', Id)
    }
}

export default new FileService()
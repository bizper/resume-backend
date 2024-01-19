import { getResp, getRestPath } from "../utils/utils";

class FileService {

    dispatch(method: string, resource: string) {
        if (method === 'GET') {
            const rest = getRestPath(resource)
            console.log(rest)
            switch (rest) {
                case '/getFile':
                    return this.getFile()
            }
        } else {
            return getResp(1, 'Only Accept by GET')
        }

    }

    getFile() {
        console.log('ask for file:')
        return getResp(0, 'success')
    }
}

export default new FileService()
import { DB } from "../module"
import { getResp } from "../utils/utils"

class PhotoService {

    async getAllPhotos() {
        const result = await DB.collection('albums').find({}).toArray()
        return getResp(0, 'success', {
            lastUpdate: '2024.04.01',
            list: result
        })
    }

}



export default new PhotoService()
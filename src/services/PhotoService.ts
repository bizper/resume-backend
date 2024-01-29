import { DB } from "../module"
import { getResp } from "../utils/utils"

class PhotoService {

    async getAllPhotos() {
        const result = await DB.collection('albums').find({}).toArray()
        console.log(result)
        return getResp(0, 'success', result)
    }

}



export default new PhotoService()
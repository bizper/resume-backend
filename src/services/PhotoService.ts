import db from "../module/Database"
import { getResp } from "../utils/utils"

class PhotoService {

    async getAllPhotos() {
        const result = await db.collection('albums').find({}).toArray()
        console.log(result)
        return getResp(0, 'success', result)
    }

}



export default new PhotoService()
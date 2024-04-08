import { DB } from "../module"
import { getResp } from "../utils/utils"

class RecordService {

    async getAllRecords() {
        const result = await DB.collection('records').find({}).toArray()
        return getResp(0, 'success', {
            lastUpdate: '2024.04.01',
            list: result
        })
    }

}

export default new RecordService()
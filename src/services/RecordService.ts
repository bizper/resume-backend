import { DB } from "../module"
import { getResp } from "../utils/utils"
import { Record } from "../type"

class RecordService {

    async getAllRecords() {
        const result = await DB.collection('records').find({}).toArray()
        return getResp(0, 'success', {
            lastUpdate: '2024.04.01',
            list: result
        })
    }

    async newRecord(article: Record) {
        const result = await DB.collection('records').insertOne(article)
        return getResp(0, 'success', result.insertedId)
    }

}

export default new RecordService()
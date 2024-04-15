import { DB } from "../module"
import { getResp } from "../utils/utils"
import { QueryParam, Record } from "../type"
import { Filter, FindOptions } from "mongodb"

class RecordService {

    async getAllRecords(params?: QueryParam) {
        let result
        if(params) {
            const options: FindOptions = {
                limit: params.limit,
                sort: params.sort
            }
            const query: Filter<Record> = {}
            if(params.filters) {
                for(let key in params.filters) {
                    const item = params.filters[key]
                    switch(item.operation) {
                        case "eq":
                            query[key] = {
                                $eq: item.value
                            }
                            break;
                        case "gt":
                            query[key] = {
                                $gt: item.value
                            }
                            break;
                        case "lt":
                            query[key] = {
                                $lt: item.value
                            }
                            break;
                    }
                }
            }
            result = await DB.collection<Record>('records').find(query, options).toArray()
        } else {
            result = await DB.collection<Record>('records').find({}).toArray()
        }
        return getResp(0, 'success', {
            lastUpdate: result[0].date,
            list: result
        })
    }

    async newRecord(article: Record) {
        const result = await DB.collection('records').insertOne(article)
        return getResp(0, 'success', result.insertedId)
    }

}

export default new RecordService()
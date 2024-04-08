import { DB } from "../module"
import { User } from "../type"
import { getResp } from "../utils/utils"

class UserService {

    async getUser(username: string, password: string) {
        const result = await DB.collection('users').findOne<User>({
            username: username,
            password: password
        }, { projection: { password: 0 } })
        console.log(result)
        if(result !== null) return getResp(0, 'success', result)
        else return getResp(1, 'error')
    }

}

export default new UserService()
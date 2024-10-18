import { RequestFileParam } from "../type"
import { getResp } from "../utils/utils"
import fs from 'fs';

class MusicService {

    async getMusic(filename: string) {
        return fs.createReadStream(`./${filename}`)
    }

}



export default new MusicService()
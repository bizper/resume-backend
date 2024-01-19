import { getResp } from "../utils/utils"

class PhotoService {

    getAllPhotos() {
        return getResp(0, 'success', [
            {cover: '', desc: '', spec: '', series: []},
            {cover: '', desc: '', spec: '', series: []}
        ])
    }

}

export default new PhotoService()
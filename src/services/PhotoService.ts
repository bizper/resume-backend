import { getResp } from "../utils/utils"

class PhotoService {

    getAllPhotos() {
        return getResp(0, 'success', [
            {cover: 'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-1.jpg', desc: '', spec: '', series: [
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-1.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-2.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-3.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-4.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-5.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-6.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-7.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-8.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-9.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-10.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-11.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-12.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-13.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-14.jpg',
                'http://45.77.179.191:8090/other/getFile?Id=brandon/OrangePhotoWorks-15.jpg'
            ]}
        ])
    }

}

export default new PhotoService()
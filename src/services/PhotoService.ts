import { getResp } from "../utils/utils"

class PhotoService {

    getAllPhotos() {
        return getResp(0, 'success', [
            {cover: 'https://i.ibb.co/vhDdvpz/Orange-Photo-Works-1.jpg', desc: 'Brandon Memory', spec: '', series: [
                'https://i.ibb.co/vhDdvpz/Orange-Photo-Works-1.jpg',
                'https://i.ibb.co/HPvr1xF/Orange-Photo-Works-2.jpg',
                'https://i.ibb.co/NrMPHbd/Orange-Photo-Works-3.jpg',
                'https://i.ibb.co/N3BtkKk/Orange-Photo-Works-4.jpg',
                'https://i.ibb.co/2kD5PBf/Orange-Photo-Works-5.jpg',
                'https://i.ibb.co/YykpJt4/Orange-Photo-Works-6.jpg',
                'https://i.ibb.co/S7LDWYL/Orange-Photo-Works-7.jpg',
                'https://i.ibb.co/9ydRVYZ/Orange-Photo-Works-8.jpg',
                'https://i.ibb.co/16pnd7P/Orange-Photo-Works-9.jpg',
                'https://i.ibb.co/BGKsx03/Orange-Photo-Works-10.jpg',
                'https://i.ibb.co/TrPDmCk/Orange-Photo-Works-11.jpg',
                'https://i.ibb.co/DtCz7f8/Orange-Photo-Works-12.jpg',
                'https://i.ibb.co/sb7yzpj/Orange-Photo-Works-13.jpg',
                'https://i.ibb.co/qD3FpnG/Orange-Photo-Works-14.jpg',
                'https://i.ibb.co/mtyr3nX/Orange-Photo-Works-15.jpg'
            ]},
            {cover: 'https://i.ibb.co/sjBDCkk/6.jpg', desc: 'Jiuzhai Valley', spec: ''}
        ])
    }

}



export default new PhotoService()
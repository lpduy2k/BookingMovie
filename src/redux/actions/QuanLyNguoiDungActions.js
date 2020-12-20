// nguoiDung = {taiKhoan:'',matKhau:''}
import Axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/setting'
export const dangNhapAction = (nguoiDung) => {
    console.log(nguoiDung);
    return async dispatch => {
        try{
            const result = await Axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung
            });
            // Đăng nhập thành công
            console.log(result.data)
            // lấy token lưu vào localstorage
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
            localStorage.setItem(USER_LOGIN,JSON.stringify(result.data))
        } catch(err){
            console.log(err.response?.data)
        }
        // cách dùng promise
        // const promise = Axios({
        //     url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        //     method: 'POST',
        //     data: nguoiDung
        // });
        // promise.then(result => {
        //     console.log(result.data)
        // }).catch(err => {
        //     console.log(err.response?.data)
        // })
    }
}
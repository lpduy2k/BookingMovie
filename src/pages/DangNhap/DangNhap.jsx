import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';

export default function DangNhap() {
    // useDispatch là hook do react redux cung cấp tương tự props.dispatch khi sử dụng connect
    const dispatch = useDispatch();
    // useState là thư viện thay thế this.state trong RE class component
    const [state, setState] = useState({
        taiKhoan:'',
        matKhau: ''
    }) //useState nhận giá trị đầu vào là stateDefault
    // ứng vs class component state = {taiKhoan:'',matKhau:''}
    console.log('state',state)
    const handleChangeInput = (event) => {
        //lay ra value từ thẻ input đăng nhập
        const {name,value} = event.target;
        console.log(name,value)
        setState({...state,[name]:value});
        // gọi api để xác thực đăng nhập
        dispatch(dangNhapAction(state));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        dispatch(dangNhapAction(state));
    }

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h3>Đăng nhập</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handleChangeInput}/>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={handleChangeInput}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    )
}

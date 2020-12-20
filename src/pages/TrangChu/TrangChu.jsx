import React,{useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux';

import { getDataFilmAction } from '../../redux/actions/QuanLyPhimActions';

export default function TrangChu(props) {

    //useSelector là hook react-redux cung cấp dùng để lấy state từ store về
    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim)
    //useDispatch là hook thay thế cho props.dispatch khi dùng redux connect
    const dispatch = useDispatch();
    console.log(mangPhim)
    const loadDataPhim = async () => {
        dispatch(getDataFilmAction());
    }
    // console.log(props.mangPhim)
    // const loadDataPhim = async () => {
    //     props.dispatch(getDataFilmAction());
    // }

    // useEffect thay thế cho các lifecycle (didMount, didUpdate, willUnmount)
    useEffect(() =>{
        // chạy 1 lần duy nhất sau khi giao diện render (ứng vs componentDidMount)
        dispatch(getDataFilmAction()); // vừa vào trang sẽ load danh sách phim
    },[]);
    const renderFilm = () => {
        return mangPhim.map((phim, index) =>{
            return <div className="col-4" key={index}>
            <div className="card">
                <img className="card-img-top" src={phim.hinhAnh} alt />
                <div className="card-body">
                <h4 className="card-title">{phim.tenPhim}</h4>
                <p className="card-text">{phim.moTa}</p>
                </div>
            </div>
        </div>
        })
    }
    return (
        <div className="container">
            <button onClick={() =>{
                loadDataPhim();
            }} >Load danh sách phim</button>
            <div className="row">
                {renderFilm()}
            </div>
        </div>
    )
}

// kết nối đến reducer lấy dữ liệu mảng phim về => props.mangPhim
// const mapStateToProps = (state) => {
//     return {
//         mangPhim: state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps)(TrangChu)


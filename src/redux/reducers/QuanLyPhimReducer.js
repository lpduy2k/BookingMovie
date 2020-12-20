import { GET_DATA_FILM } from "../const/QuanLyPhimConst";

const stateDefault = {
    mangPhim: [] // mảng phim sẽ chứa dữ liệu phim từ api trả về
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_DATA_FILM: {
            // state.mangPhim = action.dataFilm;
            // return {...state}
            return {...state, mangPhim: action.dataFilm};
        }
    }
    return {...state}
}
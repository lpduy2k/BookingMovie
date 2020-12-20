import {BrowserRouter,Route} from 'react-router-dom';
import TrangChu from './pages/TrangChu/TrangChu';
import DangKy from './pages/DangKy/DangKy';
import DangNhap from './pages/DangNhap/DangNhap';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/trangchu" component={TrangChu}/>
      <Route path="/dangky" component={DangKy}/>
      <Route path="/dangnhap" component={DangNhap}/>
      <Route path="/chitietphim" component={ChiTietPhim}/>
    </BrowserRouter>
  );
}

export default App;

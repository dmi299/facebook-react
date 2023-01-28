import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Content from './components/Content';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ResetPassword from './pages/ResetPassword';
import ConfirmCode from './pages/ConfirmCode';
// import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Content />}>
        </Route>
        <Route path='/resetpassword' element={<ResetPassword />} />
        <Route path='/confirmcode' element={<ConfirmCode />} />
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);


//StrictMode chế độ kiểm tra nghiêm ngoặc, ko ảnh hưởng đền việc xây dựng sản xuất.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

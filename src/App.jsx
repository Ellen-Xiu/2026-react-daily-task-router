import './App.css';
import { HashRouter, NavLink, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Notfound from './Page/Notfound';
import Todo from './Page/Todo';
import Post from './Page/Post';
import PostId from './Page/PostId';




function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/post' element={<Post />}>
            <Route path=':postId' element={<PostId />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;

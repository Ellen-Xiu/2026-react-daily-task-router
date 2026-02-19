import { Link, Outlet } from "react-router-dom";

function Post() {
  return (
    <div className="row">      
      <p>這是post頁面</p>
      <Link to='/post/post123'>post詳細頁面</Link>
      <Outlet />
    </div>    
  )
}
export default Post;
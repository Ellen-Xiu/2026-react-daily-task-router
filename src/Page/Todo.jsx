import { useNavigate } from 'react-router-dom';
function Todo() {
  const navigate = useNavigate();

  return (
    <div>
      <p>這是 Todo 頁面</p>
      <button type="button" onClick={()=>navigate('/login')}>登出</button>
    </div>
  )
}
export default Todo;
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Notfound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  },[navigate])

  return (
    <p>404找不到網頁</p>
  )
}
export default Notfound;
import { useParams } from "react-router-dom";
const PostId = () => {
  let params = useParams();
  return (
    <div>
      <p>Post: {params.postId}</p>
    </div>    
  )
}
export default PostId;

import axios from 'axios';
const USER_URL="http://127.0.0.1:8000/add_post/"
class CommentService{
    
    postComment(){
        return axios.post(USER_URL);
    }
   
  


}
export default new CommentService()
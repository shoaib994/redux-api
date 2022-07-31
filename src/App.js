
import './App.css';

import { useGetAllPostQuery,useGetPostByIdQuery,useDeletePostMutation,useCreatePostMutation} from './services/post'
function App() {
  const [deletePost,response]=useDeletePostMutation()
  const [createPost,responsePost]=useCreatePostMutation()
  const responseInfo=useGetAllPostQuery()
  
console.log(responsePost,"responsePost")
  // const responseInfo=useGetPostByIdQuery(10)
  const data=responseInfo?.data
  // console.log(responseInfo)
  // const data=responseInfo.data
 if(responseInfo.isLoading) return <div>Loading ....</div>
//  console.log(response)
  return (
    <div className="App">
    <button onClick={()=>createPost({title:'hello',body:"body",userId:122})}>Add</button>
    {

      data?.map((post,i)=>(
        <div key={i}> 
          <h4>{post.id}: {post.title}</h4>
          <p>{post.body}</p>
          <button onClick={()=>deletePost(1)}>Delete</button>
        </div>
      ))
    //   <div>
    //   <h4>{data.id}: {data.title}</h4>
    //   <p>{data.body}</p>
    // </div>
    }
        {/* <h1>Home</h1> */}

    </div>
  );
}

export default App;

import BlogPostData from "../Model/BlogModel.js";
const posts=[];
class BlogPostController{
    static getAllBlog=(req,res)=>{
        const data=posts
        return res.status(200).json({
            status:200,
            message:" all posts",
            data
        })
    }
    //get one by
        static getOne=(req,res)=>{
            const blogId=req.params.blogId;
            const data= posts.find(post=> post.blogId=== parseInt(blogId));
            
            if(!data){
                return res.status(407).json({
                    status:407,
                    message:" no post",
                    data
                })
            }
            return res.status(200).json({
                status:200,
                message:"This is one Blog",
                data
            })
        }

  //    delete one
  static deleteOne=(req,res)=>{
    const blogId=req.params.blogId;
    const data= posts.findIndex(post=> post.blogId=== parseInt(blogId));
    
    
    if(data===-1){
        return res.status(407).json({
            status:407,
            message:" post you delete not exist",
            data
        })
    }
    posts.splice(data,1)
    return res.status(200).json({
        
        status:200,
        message:"post deleted",
        
        
    })
}
//updateone
       
    static updateBlogPost = (req,res) =>{
        let{
            UserId,
            title,
            content
        } = req.body;
        const timestamp = new Date(Date.now());
        const blogId = req.params.id;        
        
        const dataIndex= posts.findIndex(post=> post.blogId=== parseInt(blogId));
        const blog = new BlogPostData(
            blogId,UserId,title,content,timestamp
        );
        if(dataIndex===-1){
            return res.status(417).json({
                status : 417,
                message : "failed to update"
            })
          }

            const data = Posts.splice(dataIndex,1,blog );
            return res.status(200).json({
                status:200,
                message: "successfully updated",
                data
            });
        }
      
    //
    static articles=(req,res)=>{
        const blogId=posts.length+1;
        let{
         
          userId,
            title,
            content
            

        }=req.body;
        const timestamp = new Date(Date.now());
        const blog= new BlogPostData(blogId,userId,title,content,timestamp) ;
        posts.push(blog);
        const data = posts.find(blog=>blog.blogId===blogId);
        if(!data){
            return res.status(417).json({
                status:417,
                message:" Blog failed",
                data
            })
        }
        return res.status(201).json({
            status:201,
            message:"Account created successfully",
            data
        })    
    };
    
   
}
export default BlogPostController;
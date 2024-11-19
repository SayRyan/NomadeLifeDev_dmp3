import { Link } from "react-router-dom"
import styles from "./PostDetail.module.css"

const PostDetail = () => {
  return (
    <>
        <div className={styles.post_detail}>
            <img src={post.image} alt={post.title}/>
            <h2>{post.title}</h2>
            <p className={styles.createby}>por: {post.createBy}</p>
            <div className={styles.tags}>
                {post.tags.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/post/${post.id}`} className="btn btn-outiline">Ler</Link>
        </div>
    </>
  )
}

export default PostDetail
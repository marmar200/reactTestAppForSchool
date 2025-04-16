import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div>
            <h1>Список постов</h1>
            {posts.map((post, index) => 
                <PostItem number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
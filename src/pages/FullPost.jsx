import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../axios';
// import { selectIsAuth } from '../redux/slices/auth';

import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock/CommentsBlock';
import { fetchPost } from '../redux/slices/fullPost';

export const FullPost = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.fullPost);
  const item = post.item;
  const isLoading = post.status === 'loading';
  const userData = useSelector((state) => state.auth.data);

  // console.log(item?.comments);
  // console.log(userData?._id);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch]);

  if (isLoading) {
    return <Post isLoading={true} isFullPost />;
  }

  return (
    <>
      <Post
        id={item?._id}
        title={item?.title}
        imageUrl={
          item?.imageUrl ? `http://localhost:4444${item?.imageUrl}` : ''
        }
        user={item.user}
        createdAt={item?.createdAt}
        viewsCount={item?.viewsCount}
        commentsCount={3}
        tags={item?.tags}
        isFullPost
      >
        <p>{item?.text}</p>
      </Post>
      <CommentsBlock
        userData={userData || ''}
        items={item?.comments}
        isLoading={false}
      >
        <Index userData={userData || ''} postId={item?._id} />
      </CommentsBlock>
    </>
  );
};

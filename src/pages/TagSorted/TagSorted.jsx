import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Post } from '../../components';
import { fetchPostsByTags } from '../../redux/slices/posts';

function TagSorted() {
  const params = useParams();
  //   console.log(params);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPostsByTags(params));
  }, [params]);

  return (
    <div>
      {' '}
      {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
        isPostsLoading ? (
          <Post key={index} isLoading={true} />
        ) : (
          <Post
            key={obj._id}
            id={obj._id}
            title={obj.title}
            imageUrl={
              obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''
            }
            user={obj.user}
            createdAt={obj.createdAt}
            viewsCount={obj.viewsCount}
            commentsCount={3}
            tags={obj.tags}
            isEditable={userData?._id === obj.user._id}
          />
        ),
      )}
    </div>
  );
}

export default TagSorted;

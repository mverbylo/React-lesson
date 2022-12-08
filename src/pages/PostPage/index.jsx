import React from 'react';
import getUsers from '../../api';
import DataLoader from '../../components/DateLoader';

function getPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
}
const PostPage = () => {
  const renderPosts = (loaderState) => {
    return (
      <ul>
        <li>{JSON.stringify(loaderState.data)}</li>
        <li>{JSON.stringify(loaderState.isLoading)}</li>
        <li>{JSON.stringify(loaderState.error)}</li>
      </ul>
    );
  };

  return (
    <main>
      <h1>Post</h1>
      <DataLoader loadData={getPosts} render={renderPosts} />
      {/* <DataLoader loadData={getUsers} /> */}
    </main>
  );
};

export default PostPage;

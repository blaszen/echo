import React from 'react';

import Post from './Post/Post.js';

import { makeStyles } from '@mui/styles';

import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  
});

const Posts = () => {
  const posts = useSelector( (state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return (
      <>
      
      
      <h1> POsts</h1>
      <Post/>
      <Post/>
      
      </>
  );
};

export default Posts;

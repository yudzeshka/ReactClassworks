import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Post from './Post';

import profileImg from '../img/profile.jpg';
import img from '../img/photo_2021-12-20_20-38-55.jpg';
import Profile from './Profile';
import Login from './Login';
import Header from './Header';

const POST = {
  src: img,
  caption: 'Cat on Piano',
  username: 'katarinich',
  profileSrc: profileImg,
  likes: 11,
  comments: [
    { text: 'Very nice cat', username: 'mom' },
    { text: 'I like black cats', username: 'friend' },
    { text: 'I hate cats', username: 'hater' },
    { text: 'Very nice cat', username: 'mom' },
    { text: 'I like black cats', username: 'friend' },
    { text: 'I hate cats', username: 'hater' },
    { text: 'Very nice cat', username: 'mom' },
    { text: 'I like black cats', username: 'friend' },
    { text: 'I hate cats', username: 'hater' },
  ],
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { username: 'katarinich' },
      user: {
        username: 'katarinich',
        profileSrc: profileImg,
        fullName: 'Katarina Chirich',
        postCount: 10,
        followersCount: 148,
        followingCount: 1,
        posts: [...new Array(10)].map(() => POST),
      },
      post: POST,
    };
  }

  handleAddComment = (text) => {
    const { post } = this.state;

    this.setState({
      post: {
        ...post,
        comments: [...post.comments, { text, username: 'katarinich' }],
      },
    });
  };

  render() {
    const { post, currentUser, user } = this.state;

    return (
      <Router>
        <div className="grid grid-cols-3 mx-auto max-w-screen-md">
          <Header />

          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/p/:username" element={<Profile user={user} />} />
            <Route
              path="/p/:username/:postId"
              element={
                <Post
                  post={post}
                  onAddComment={this.handleAddComment}
                  currentUser={currentUser}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

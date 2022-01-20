import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import Post from './Post';
import Login from './Login';
import Header from './Header';
import SignUp from './SignUp';
import Profile from './Profile';

import { auth } from '../firebase';

import profileImg from '../img/profile.jpg';
import img from '../img/photo_2021-12-20_20-38-55.jpg';

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
      currentUser: null,
      user: null,
      post: POST,
    };
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
      });
    });
  }

  setUser = (user) => {
    this.setState({ user });
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
          <Header currentUser={currentUser} />

          <Routes>
            <Route
              path="/login"
              element={<Login currentUser={currentUser} />}
            />
            <Route
              path="/sign-up"
              element={<SignUp currentUser={currentUser} />}
            />
            <Route path="/p/:username" element={<Profile user={user} setUser={this.setUser} />} />
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

import React, { Component } from 'react';

import Header from './Header';
import Posts from './Posts';

export default class Profile extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        <Header user={user} />
        <Posts posts={user.posts} />
      </>
    );
  }
}

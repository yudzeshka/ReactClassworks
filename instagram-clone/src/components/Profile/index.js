import React, { Component } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import Header from './Header';
import Posts from './Posts';

import withRouter from '../../withRouter';

import { db } from '../../firebase';

export class Profile extends Component {
  componentDidMount() {
    const { params, setUser } = this.props;

    const docRef = doc(db, 'users', params.username);

    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setUser(docSnap.data());
      }
    });
  }

  render() {
    const { user } = this.props;

    return user ? (
      <>
        <Header user={user} />
        {/* <Posts posts={user.posts} /> */}
      </>
    ) : null;
  }
}

export default withRouter(Profile);

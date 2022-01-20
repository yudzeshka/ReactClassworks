import React, { Component } from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { auth, db, storage } from '../firebase';

import { ReactComponent as AddIcon } from '../icons/add.svg';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }

  handleUpload = () => {
    this.fileInput.current.click();
  };

  handleSend = (e) => {
    const { currentUser } = this.props;

    const file = e.target.files[0];

    const storageRef = ref(storage, 'image');

    uploadBytes(storageRef, file).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // add document to collection with auto generated id
      addDoc(collection(db, 'posts'), {
        src: downloadURL,
        caption: '',
        username: currentUser.displayName,
        profileSrc: '',
        likes: 0,
      });
    });
  };

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        {currentUser ? (
          <>
            <AddIcon onClick={this.handleUpload} />

            <input
              type="file"
              className="hidden"
              ref={this.fileInput}
              onChange={this.handleSend}
            />

            <button onClick={() => signOut(auth)}>Log Out</button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 font-bold text-sm rounded text-white p-2"
            >
              Log In
            </Link>
            <Link
              to="/sign-up"
              className="font-bold text-sm rounded text-blue-500 p-2"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    );
  }
}

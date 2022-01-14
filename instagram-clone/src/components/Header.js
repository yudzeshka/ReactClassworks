import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

export class Header extends Component {
  render() {
    const { loginWithRedirect, isAuthenticated, logout } = this.props.auth0;

    return (
      <div>
        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: window.location.origin })}>Sign Out</button>
        ) : (
          <>
            <button
              type="button"
              className="bg-blue-500 font-bold text-sm rounded text-white p-2"
              onClick={() => loginWithRedirect()}
            >
              Log In
            </button>
            <button
              type="button"
              className="font-bold text-sm rounded text-blue-500 p-2"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    );
  }
}

export default withAuth0(Header);

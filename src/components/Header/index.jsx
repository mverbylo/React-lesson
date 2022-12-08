import React from 'react';
import { UserContext } from '../../App';
// import HeaderUserCard from './HeaderUserCard';
// import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    // const { headerProp1, headerProp2, otherProp, ...userProps } = this.props;
    // const props = {
    //   ...userProps,
    // };
    //props.user props.logout
    return (
      <UserContext.Consumer>
        {(value) => (
          <div>
            <h5>Header</h5>
            <img alt="pic" src={value.src} />
          </div>
        )}
      </UserContext.Consumer>
      // // {/* <nav>
      //   <ul>
      //     <li>
      //       <Link to="/">Home</Link>{' '}
      //     </li>
      //     <li>
      //       <Link to="userspage">User</Link>{' '}
      //     </li>
      //     <li>
      //       <Link to="/about">About</Link>{' '}
      //     </li>
      //     <li>
      //       <Link to="/contacts">Contacts</Link>{' '}
      //     </li>
      //     <li>
      //       <Link to="/posts">Posts</Link>{' '}
      //     </li>
      //   </ul>
      // </nav>
      // {/* <h1>My Site</h1> */}
      // {/* <HeaderUserCard {...userProps} /> */}
      // {/* <img src={user.profilePicSrc} alt={user.name} currentNumber={4} /> */}{' '}
      // */}
    );
  }
}

export default Header;

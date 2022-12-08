// import HookTimer from 'components/HookTimer';
// import React from 'react';
// import Tree from 'components/Tree';

// const product = { id: 5, name: 'Mobila', price: 1000 };

// export const ProductContext = React.createContext(product);

// const App = () => {
//   return (
//     <ProductContext.Provider value={JSON.stringify(product)}>
//       <Tree />
//     </ProductContext.Provider>
//   );
// };

// export default App;

// import './App.css';
// import React from 'react';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import NotFoundPage from './pages/NotFoundPage';
// import AboutPage from './pages/AboutPage';
// import ContactsPage from './pages/ContactsPage';
// import UsersPage from './pages/UsersPage';
// import PostPage from './pages/PostPage';
// import Tree from './components/Tree';
// import Clicker from './components/Clicker';
// import { useState } from 'react';

// import React, { Component } from 'react';
// import Header from './components/Header';
// import Profile from './components/Profile';
// import pic from './img/user.png';
// export const UserContext = React.createContext();
// class App extends Component {
//   state = {
//     user: {
//       username: 'test testovich',
//       src: pic,
//     },
//   };
//   render() {
//     return (
//       <UserContext.Provider value={this.state.user}>
//         <Header />
//         <Profile />
//       </UserContext.Provider>
//     );
//   }
// }

// export default App;

// const App = () => {
//   const [product, setProduct] = useState({
//     id: 5,
//     name: 'Mobila',
//     price: 1000,
//   });

//   return (
//     <ProductContext.Provider value={JSON.stringify(product)}>
//       <Clicker />
//       <Tree />
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/userspage" exact component={UsersPage} />
//         <Route path="/posts" exact component={PostPage} />
//         <Route
//           path="/about"
//           render={(routePops) => <AboutPage {...routePops} />}
//         />
//         <Route path="/contacts" component={ContactsPage} />
//         <Route path="*">
//           {({ match, history, location }) => (
//             <NotFoundPage match={match} history={history} location={location} />
//           )}
//         </Route>
//       </Switch>
//       <Footer />
//     </ProductContext.Provider>
//   );
// };

// export default App;

// function Footer() {
//   return <p>Footer</p>;
// }
// import { Switch, Route } from 'react-router-dom';
// import React from 'react';
// import HomePage from './pages/HomePage';
// import { ThemeContext } from './contexts';
// import { useState } from 'react';
// import Clicker from './components/Clicker';
// import CONSTANTS from './constants';
// import LoginPage from './pages/LoginPage';
// const { THEMES } = CONSTANTS;
// import Counter from './components/Counter';
import SignUpForm from './components/form/SignUpForm';
import UserLoader from './components/UserLoader/index'
const App = () => {
  // const themeTuple = useState(THEMES.DARK);

  return (
    // <Counter />
    // <SignUpForm />
    <UserLoader />
    // <ThemeContext.Provider value={themeTuple}>
    //   <Switch>
    //     <Route path="/" exact component={HomePage} />
    //     <Route path="/login" exact component={LoginPage} />
    //   </Switch>
    //   <Clicker />
    // </ThemeContext.Provider>
  );
};

export default App;

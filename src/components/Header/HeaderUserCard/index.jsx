import React from 'react';
// import PropTypes from 'prop-types';
const HeaderUserCard = (props) => {
  const { user, logout } = props;

  return (
    <div>
      {user && <img alt={user.name} src={user.src} />}
      <button
        style={{ padding: '20px', background: 'blue' }}
        onClick={() => logout()}
      >
        logout
      </button>
    </div>
  );
};

// HeaderUserCard.defaultProps = {
//   user: {
//     name: '123',
//     src: '456',
//   },
//   logout: () => alert('Privet'),
// };

// const userProps=PropTypes.shape(id:PropTypes.number, user.name:PropTypes.string, )

export default HeaderUserCard;
// zHeaderUserCard.propTypes = { logout: PropTypes.func.isRequired };

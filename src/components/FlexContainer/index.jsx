import React from 'react';
import cx from 'classnames';
import style from './FlexContainer.module.scss';
const FlexContainer = (props) => {
  const item = {
    border: '2px solid black',
    backgroundColor: 'blue',
  };
  const justContent = 'center';
  const isJcCenter = justContent === 'center';
  const classes = cx(style.container, { [style.jcCenter]: isJcCenter });
  return (
    // <div style={props.style}>
    //   <div style={item}>{props.children}</div>
    // </div>
    <div className={classes}>
      <div style={item}>{props.children}</div>
    </div>
  );
};

export default FlexContainer;

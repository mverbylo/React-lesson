import React from 'react';
import styles from './List.module.scss';

const List = (props) => {
  console.log(props);
  return <ul className={styles.list}>{props.children}</ul>;
};

export default List;

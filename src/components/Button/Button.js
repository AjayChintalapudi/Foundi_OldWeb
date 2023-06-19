import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const { type, btnStyles, btName, imageWrapperStyles, image } = props;
  return (
    <button
      onClick={onclick}
      type={type}
      className={classNames(btnStyles, styles.btnStyles)}
    >
      {btName}
      {image && (
        <div
          className={classNames(imageWrapperStyles, styles.imageWrapperStyles)}
        >
          <img src={image} alt="" className={styles.imgStyles} />
        </div>
      )}
    </button>
  );
};

export default Button;

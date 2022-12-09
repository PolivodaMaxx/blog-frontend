import React from 'react';
import styles from './UserInfo.module.scss';
import userAvatar from './user.png';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  console.log(additionalText);
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={avatarUrl || userAvatar}
        alt={fullName}
      />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>
          {`${additionalText.substring(0, 10)} ${additionalText.substring(
            11,
            16,
          )}`}
        </span>
      </div>
    </div>
  );
};

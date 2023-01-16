import React from 'react';
import axios from '../../axios';

import styles from './AddComment.module.scss';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import avatar from '../UserInfo/user.png';

export const Index = ({ userData, postId }) => {
  const [text, setText] = React.useState('');

  const onSubmit = async () => {
    try {
      const { data } = await axios.patch(`/posts/comment/${postId}`, { text });
      setText('');
    } catch (error) {
      console.log(error);
      alert('Ошибка при добавлении комментария');
    }
  };

  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src={userData.avatarUrl || avatar}
        />
        {userData ? (
          <div className={styles.form}>
            <TextField
              value={text}
              label="Написать комментарий"
              variant="outlined"
              maxRows={10}
              multiline
              fullWidth
              onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={onSubmit} variant="contained">
              Отправить
            </Button>
          </div>
        ) : (
          <div className={styles.text}>
            Войдите или зарегистрируйтесь, чтобы вы смогли оставлять комментарии
          </div>
        )}
      </div>
    </>
  );
};

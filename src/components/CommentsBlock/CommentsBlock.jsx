import React from 'react';

import { SideBlock } from '../SideBlock';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';
import styles from './CommentsBlock.module.scss';
import avatar from '../UserInfo/user.png';

export const CommentsBlock = ({
  items,
  children,
  isLoading = true,
  userData,
}) => {
  console.log(userData);
  console.log(items);

  return (
    <SideBlock title="Комментарии">
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem classes={{ root: styles.item }}>
              {userData?._id === obj.userId._id ? (
                <div className={styles.deleteIcon}>
                  <IconButton color="secondary">
                    <DeleteIcon size="15px" />
                  </IconButton>
                </div>
              ) : (
                ''
              )}

              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar
                    alt={obj.userId.fullName}
                    src={obj.userId.avatarUrl || avatar}
                  />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                <ListItemText
                  primary={obj.userId.fullName}
                  secondary={obj.comment}
                />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      {children}
    </SideBlock>
  );
};

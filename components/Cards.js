import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar style={{ width: '65px', height: '65px' }}>
            <img
              src='/images/mustaph.jpg'
              alt='profile-pic'
              style={{ width: '65px' }}
            />
          </Avatar>
        }
        title='Coach Mustapha '
        subheader='Fitness Coach'
      />

      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <IconButton>
          <Link href='/profile'>
            <Typography variant='body2'>See Profile</Typography>
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Cards;

import React from 'react';
import Link from 'next/link';
import Card from './Cards';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
    marginTop: '1rem',
  },
});

const ResultsCard = () => {
  const classes = useStyles();
  return (
    <div className='resultCard'>
      <div className='searchContainer'>
        <input
          type='text'
          className='searchItem searchSport'
          placeholder='Sport'
        />
        <input
          type='text'
          className='searchItem searchLocation'
          placeholder='Location'
        />
        <input
          type='text'
          className='searchItem searchLanguage'
          placeholder='Language'
        />
        <input
          type='text'
          className='searchItem searchPrice'
          placeholder='Price '
        />
        <button type='submit' className='searchButton'>
          <Link href='/results'>
            <i className='fa fa-search'></i>
          </Link>
        </button>
      </div>
      <Grid
        container
        spacing={3}
        className={classes.gridContainer}
        justify='center'
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
      <style jsx>
        {`
          .resultCard {
            padding-bottom: 30px;
          }
          .searchContainer {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            border: 1px solid #333;
            margin-top: 5rem;
            margin-bottom: 3rem;
            border-radius: 10px;
          }

          .searchSport {
            border-radius: 10px 0 0 10px;
          }

          .searchItem {
            border: 0;
            height: 2rem;
            padding-left: 5px;
            padding-top: 0;
            padding-bottom: 0;
          }

          input:focus,
          button:focus {
            outline: none;
          }

          .searchButton {
            height: 2rem;
            width: 2rem;
            border: none;
            border-radius: 0 10px 10px 0;
          }

          .searchIcon {
            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default ResultsCard;

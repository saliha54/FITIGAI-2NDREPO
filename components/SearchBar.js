import React from 'react';
import Link from 'next/link';

const SearchBar = () => {
  return (
    <div className='searchPage'>
      <section className='banner text-center'>
        <h1>SPORTS COACHES AROUND YOU </h1>
        <p>We provide you with best sports coaches around Belgium</p>
        <div className='search-info text-center'>
          <input type='text' className='form-control' placeholder='Sports' />
          <input type='text' className='form-control' placeholder='Location' />
          <input type='text' className='form-control' placeholder='Language' />
          <input
            type='text'
            className='form-control'
            placeholder='Price Range'
          />
          <Link href='/results'>
            <button type='button' className='btn btn-primary'>
              Search
            </button>
          </Link>
        </div>
      </section>
      <style jsx>
        {`
          .banner {
            color: #fff;
            height: 81vh;
          }
          .banner h1 {
            padding-top: 170px;
            font-size: 40px;
            letter-spacing: 5px;
            font-weight: 600;
            text-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
          }
          .search-info {
            padding: 30px 0;
            // margin: -50px 6% 50px;
          }
          .search-info .form-control {
            max-width: 200px;
            display: inline-flex;
            margin: 10px 0px;
            border-radius: 10px;
            box-shadow: none !important;
            border: none !important;
          }
          .search-info .btn-primary {
            border-radius: 10px;
            box-shadow: none;
            border: none;
            display: inline-flex;
            margin: 0px;
            padding: 7px 20px;
          }
          .search-info .btn-primary:hover {
            background: red;
          }
        `}
      </style>
    </div>
  );
};

export default SearchBar;

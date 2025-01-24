import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import "bootstrap/dist/css/bootstrap.css";
import SocketIo from '../pages/api/socketio';




export default function Home({ allPostsData }) {
  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col">
          <h2 className='text-center mt-3 text-light'>900Mhz Viewer</h2>
        </div>
      </div>

      <div className="row ">
        <div className="col">
          <SocketIo></SocketIo>
        </div>
      </div>


      


    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

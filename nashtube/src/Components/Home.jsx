import React, { useState, useEffect } from 'react';
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faHome, faShieldVirus, faBook, faHistory, faVideo, faTimeline, faDownload, faStream, faBars, faBell, faSquarePlus, faUser, faCopyright, faTowerBroadcast} from '@fortawesome/free-solid-svg-icons';
import {faYoutube, faTiktok} from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [views, setView] = useState([]);
  const [loading, setLoading] = useState('Loading...');
  const [count, setCount] = useState(1);
  const [search, setSearch] = useState('');
  const [term, setterm] = useState('new videos')

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function startSearch() {
         setterm(search);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const key = 'AIzaSyBH4PN4GiTtqyN_i4KpWU_eiwVBbKF9LkM';
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${term}&maxResults=20000`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setVideos(data.items);
        console.log(data);
        setLoading('');
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading('Error loading data.');
      }
    };

    fetchData();
  }, [term]);

 

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 200
    ) {
      loadMoreContent();
    }
  };

  const loadMoreContent = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count > 1) {
      // Fetch more content when count changes
      loadMoreContent();
    }
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove scroll event listener on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [count]); // Listen to changes in 'count'

  // ...

function calculateTimeDifference(publishTime) {
  const days = new Date();
  const day1 = publishTime;
  const date1 = new Date(day1);
  const diff = Math.abs(days - date1);

  if (diff >= 1000 && diff < 1000 * 60) {
    return `${Math.round(diff / 1000)} sec ago`;
  } else if (diff >= 1000 * 60 && diff < 1000 * 60 * 60) {
    return `${Math.round(diff / 1000 / 60)} min ago`;
  } else if (diff >= 1000 * 60 * 60 && diff < 1000 * 60 * 60 * 24) {
    return `${Math.round(diff / 1000 / 60 / 60)} hour ago`;
  } else if (diff >= 1000 * 60 * 60 * 24 && diff < 1000 * 60 * 60 * 24 * 30) {
    return `${Math.round(diff / 1000 / 60 / 60 / 24)} day ago`;
  } else if (diff >= 1000 * 60 * 60 * 24 * 30 && diff < 1000 * 60 * 60 * 24 * 30 * 12) {
    return `${Math.round(diff / 1000 / 60 / 60 / 24 / 30)} month ago`;
  } else if (diff >= 1000 * 60 * 60 * 24 * 30 * 12 && diff < 1000 * 60 * 60 * 24 * 30 * 12 * 12) {
    return `${Math.round(diff / 1000 / 60 / 60 / 24 / 30 / 12)} year ago`;
  } else {
    return diff.toString();
  }
}


  return (
    <div>
      <div className="top" style={{display:'grid', gridTemplateColumns:'0.267fr 0.467fr 0.267fr'}}>
        <h1 className="title" style={{color:'white', boxSizing:'border-box', paddingRight:'4rem', fontFamily:'Roboto, sans-serif'}}>
         <FontAwesomeIcon icon={faBars} style={{fontSize:'23px', paddingRight:'1rem'}}/>&nbsp; <FontAwesomeIcon icon={faYoutube} style={{color:'red'}}/>  Tyre<span style={{color:'red'}}>Tube</span></h1>
        <div style={{display:'flex', alignItems:'center'}}>
        <input type="text" className='bars'  placeholder='search...' name='search' onChange={handleChange}/>
      <button onClick={startSearch}><FontAwesomeIcon icon={faMagnifyingGlass}  style={{color:'white'}}/></button>
        </div>
        <div className="pro" style={{color:'white', fontSize:'23px'}}><FontAwesomeIcon icon={faSquarePlus} style={{padding:'1rem'}}/>&nbsp;<FontAwesomeIcon icon={faBell} style={{padding:'1rem'}}/>&nbsp; <FontAwesomeIcon icon={faUser} style={{padding:'1rem'}}/></div>
     
      </div>

     <nav className="side" style={{height:'100vh', width:'13.1vw', position:'fixed'}}>
      <h5 className="home1"><FontAwesomeIcon icon={faHome}/> Home</h5>
      <h5 className="home2"><FontAwesomeIcon icon={faTiktok}/> Shorts</h5>
      <h5 className="home3"><FontAwesomeIcon icon={faShieldVirus}/> Subcriptions</h5>
      <hr style={{color:'silver', width:'10vw', textAlign:'center', marginLeft:'1.55vw'}}/>
      <h5 style={{ color:'silver'}}/>
      <h5 className="library"><FontAwesomeIcon icon={faBook}/> Library</h5>
      <h5 className="history"><FontAwesomeIcon icon={faHistory}/> History</h5>
      <h5 className="your"><FontAwesomeIcon icon={faVideo}/> Your videos</h5>
      <h5 className="wlater"><FontAwesomeIcon icon={faTimeline}/> Watch Later</h5>
      <h5 className="download"><FontAwesomeIcon icon={faDownload}/> Downloads</h5>
      <hr style={{ color: 'silver', width:'10vw', marginLeft:'1.55vw'}}/>
      <h5 className="subs"><FontAwesomeIcon icon={faStream}/> Subscriptions</h5>
      <h5 className="c1">Republic Bharat <FontAwesomeIcon icon={faTowerBroadcast} style={{color:'orange'}}/></h5>
      <h5 className="c2">Zee News <FontAwesomeIcon icon={faTowerBroadcast} style={{color:'orange'}}/></h5>
      <h5 className="c3">The Lallantop <FontAwesomeIcon icon={faTowerBroadcast} style={{color:'orange'}}/></h5>
      <h5 className="c4">MrBeast <FontAwesomeIcon icon={faTowerBroadcast} style={{color:'orange'}}/></h5>
      <h5 className="c5">Cartoon Network <FontAwesomeIcon icon={faTowerBroadcast} style={{color:'orange'}}/></h5>3
     </nav>
     
      <div className="more">
        {videos.slice(0, count * 10).map((video, index) => (
          <div className='card'  key={index}>
            <img  src={video.snippet.thumbnails.medium.url} alt="image" style={{width:'27vw', borderRadius:'10px'}}/>
            <div className="desti">
              <h4 style={{color:'white', fontFamily:'Roboto, sans-serif', marginLeft:'1rem'}}>{video.snippet.title}</h4>
              <h5 style={{ marginLeft: '1rem' , fontFamily:'Roboto, sans-serif', color:'grey', marginTop:'1rem'}}>{video.snippet.channelTitle}</h5>
              
              <h5 className="time" style={{ color: 'gray' , fontFamily:'Roboto, sans-serif', marginLeft:'1rem', marginTop:'0.3rem'}}>
      {calculateTimeDifference(video.snippet.publishTime)}
    </h5>
           
            </div>
          </div>
        ))}
      </div>

     
      <h2 className="loadi">{loading}</h2>
     <div className="footer">
       <div></div>
       <div className="sec1">
        <h5 style={{color:'white'}}>TyreTube Pvt. Ltd. </h5>
        <h6 className='hash6'> A nashville and family company, since year 2000 .</h6>
       </div>
       
       <div className="logus">
           <FontAwesomeIcon icon={faCopyright} style={{color:'white'}}/>
           <h6 style={{color:'silver'}}>All rights reserved.</h6>
       </div>
     </div>
    </div>
  );
};

export default Home;

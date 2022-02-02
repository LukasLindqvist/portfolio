import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import portfolio from '../components/pictures/website.png'
import unitedStats from '../components/pictures/website2.jpg'

//fetching from github api to get link/name of my github repos

function RepoFeed() {
    const [searchInput,setSearchInput] = useState('LukasLindqvist')
    
    const handleChange = (e) =>{
        setSearchInput(e.target.value)
    }
    
    const [repos,setRepos] = useState([]);
    
    const handleClick = async () =>{
        const result = await axios (`https://api.github.com/users/LukasLindqvist/repos`)
        
        setRepos(result);
        console.log(repos)
    }
     const images = [portfolio, unitedStats]
  
    const listRepos = repos.length !== 0 ? repos.data.map((item,index) =>{
      const listReposImages = images[index];
      return(
        <div key={item.id} className='repo'>
        <p>{item.name}</p>
        <a href={item.html_url} target='_blank'>
        <img src={listReposImages} alt='test'></img>
        </a>
    </div>
    )}):"";
      
    // calls useEffect once
    
    useEffect(() => {
        handleClick();
    },[]);
    
    return (
      <>
      <div>
      <input type='text' className='repoName' value={searchInput} onChange={handleChange}></input>
    <div className='repo-container'>
      <h2>Here are some of my previous projects</h2>
        {listRepos}
    </div>
    </div>;
      </>
      )
}

export default RepoFeed;

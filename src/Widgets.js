import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import { Article, FiveG } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArtile = (heading, subtitle) => (
    <div className='widgets-article'>
      <div className='widgets-left-article'>
        <FiberManualRecordIcon className='info-icon'/>
      </div>
      <div className='widgets-right-article'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets-header'>
            <h2>LinkedX News</h2>
            <InfoIcon/>
      </div>
      {newsArtile("react is awesom", "Top News")}
      {newsArtile("Svelt is the fastest frontend framework", "Top News")}
      {newsArtile("Redux is the perfect solution for the 'props drilling' probem in react", "Top News")}
      {newsArtile("NextJs is taking over all the frontend frameworks", "Top News")}
    </div>
  )
}

export default Widgets 

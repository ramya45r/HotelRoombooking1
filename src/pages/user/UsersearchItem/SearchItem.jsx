import React from 'react'
import './searchItem.css'
import { Link } from 'react-router-dom'
const SearchItem = () => {
  return (
    <div className='searchItem'>
      <Link to='/details'><img
      src='https://cf.bstatic.com/xdata/images/hotel/square200/232823150.webp?k=dc5a56cc3bd8bef6fd137e4165e9b1e16f3eff7767af6a5cce5352f718c46783&o=&s=1'
      alt=''
      className=''
      /></Link>
      <div className="siDesc">
        <h1 className="siTitle">Tower street Apartments</h1>       
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">free airport taxi</span>
        <span className="siSubtitle">Studio Apartments</span>
        <span className="siFeatures">Entire studio </span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">You can cancel</span>
      </div>
    <div className='siDetails'></div>
    </div>
  )
}

export default SearchItem

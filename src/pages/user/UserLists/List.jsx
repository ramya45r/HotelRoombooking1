import React from 'react'
import './List.css'
// import Navbar from '../../components/UserNavbar/Navbar'
import SearchItem from '../UsersearchItem/SearchItem'
const List = () => {
  return (
    <div className='mt-5'>
     {/* <Navbar/> */}
     <br></br>
     <div className='listContainer'>
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input type="text" />
          </div>
        </div>
            <div className="listResult">
            <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
            
          </div>
       
      </div>
     </div>
    </div>
  )
}

export default List

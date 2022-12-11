import React from 'react'
import "./featured.scss"
import "react-circular-progressbar/dist/styles.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small'></MoreVertIcon>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total revenue made today</p>
        <p className="amount">Rs. 7000</p>
        <p className="desc">Previus transactions processing. Last payments may not be included</p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult negative">
                    <KeyboardArrowDownIcon fontSize='small'/>
                    <div className="resultAmount">Rs. 12000</div>
                </div>
            </div>
            <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Rs. 12400</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">Rs. 12400</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured

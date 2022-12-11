import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HouseIcon from '@mui/icons-material/House';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import PaymentsIcon from '@mui/icons-material/Payments';
const Widget = ({type}) => {

    let data;

    const amount = 100;
    const diff = 20;
    switch(type){
        case"user":
        data={
            title:"USERS",
            isMoney:false,
            link:"See all users",
            icon:(
                <PersonOutlinedIcon
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />  
            )
        };
        break;
        case "homestay":
            data={
                title:"HOMESTAYS HANDLING",
                isMoney:false,
                link:"View all Homestay options",
                icon:(
                    <HouseIcon
                    className="icon"
                    style={{
                        backgroundColor:"rgba(218, 165, 32, 0.2)",
                        color: "goldenrod",
                    }}
                    />
                )
            };
            break;
            case "tourist_spots":
                data={
                    title:"TOURIST SPOTS HANDLING",
                    isMoney:false,
                    link:"View tourist spots",
                    icon:(
                        <HouseboatIcon
                        className="icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                      />
                    )
                }
                break;
                case "payments":
                    data={
                        title:"PAYMENTS DONE (HOMESTAY)",
                        isMoney:true,
                        link:"See details",
                        icon:(
                            <PaymentsIcon
                            className="icon"
                            style={{
                              backgroundColor: "rgba(128, 0, 128, 0.2)",
                              color: "purple",
                            }}
                          />
                        )
                    };
                    break;
                    case "payments_2":
                      data = {
                        title:"PAYMENTS DONE (GUIDE)",
                        isMoney:true,
                        link:"See details",
                        icon:(
                          <PaymentsIcon
                            className="icon"
                            style={{
                              backgroundColor: "rgba(124, 0, 138, 0.2)",
                              color: "purple",
                            }}
                          />
                        )
                      }
                    break;
                    default:
                    break;
    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
            {data.isMoney } {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget

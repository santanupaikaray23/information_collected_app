import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) =>{
    const listTrip = ({tripdata})=>{
        if(tripdata){
            return tripdata.map((item)=>{
                return(
                    <Link to="/">
                        <div className="titleContainer">
                            <div className="titleComponent1">
                                <div className='componentHeading'>
                                   Email : {item.email}<br/>
                                   Phone : {item.phone}<br/>
                                   Message : {item.message}
                                </div>

                            </div>
                        </div>
                    </Link>
                )
            })
        }

    }
    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">
                Quick Search

            </p>
            <p className="quickSearchSubHeading">
                All User Informations

            </p>
            <br/>
            {listTrip(props)}

        </div>
    )

}
export default QuickDisplay;
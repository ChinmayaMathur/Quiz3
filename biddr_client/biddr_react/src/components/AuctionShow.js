import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

const AuctionShow = () => {

    const { id } = useParams();
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/auctions/' + id)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setAuctions(data);
        });
    });

    return(
        <div className='auction-details'>
            <h4>{auctions.title}</h4>
            <h5>{auctions.reserve_price}</h5>
            <p>{auctions.details}</p>
            <small>Time:{auctions.end_date}</small>
        </div>
    );
}

export default AuctionShow;

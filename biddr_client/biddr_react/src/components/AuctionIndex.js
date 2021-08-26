import { useEffect, useState } from "react";

const AuctionIndex = () => {

    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/auctions')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setAuctions(data);
        });
    }, []);

    return (
        <fragment>
        <h1>Auction Index</h1>
            {auctions.map(data => {
                  return(
                        <div>
                    <h5>{data.title}</h5>
                    <p>Created At:{data.end_date}</p>
                </div>
                  )
                
            })}
        </fragment>
    );
}

export default AuctionIndex; 
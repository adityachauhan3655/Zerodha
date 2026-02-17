import("./Brokerage.css")

function Brokerage() {
    return (<div className="container mt-5">
        <div className="row text-center p-5">
            <div className="col">
                <img src="/images/pricingEquity.svg" style={{width:"80%"}} />
                <h2 className="fs-3">Free equity delivery</h2>
                <p className="fs-6 pricedes">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            
            <div className="col">
                <img src="/images/intradayTrades.svg" style={{width:"80%"}} />
                <h2 className="fs-3">Intraday and F&O trades</h2>
                <p className="fs-6 pricedes">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
           
            <div className="col">
                <img src="/images/pricingEquity.svg"  style={{width:"80%"}}/>
                <h2 className="fs-3">Free direct MF</h2>
                <p className="fs-6 pricedes">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>  );
}

export default Brokerage;
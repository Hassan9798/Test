import React from 'react'
import { useLocation } from 'react-router-dom'
const ResponsePage = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div style={{ 'display': 'flex', flexDirection: 'column' }}>
            <h1>ResponsePage</h1>
            {location.state.message ?
                <>
                    <div>{location.state.message}</div>
                </>
                :
                <>
                    <div>
                        <h3>PKR</h3>
                        <span>{location.state.PKR} PKR</span>
                    </div>
                    <div>
                        <h3>INR</h3>
                        <span>{location.state.INR} INR</span>
                    </div>
                    <div>
                        <h3>POUNDS</h3>
                        <span>{location.state.Pound} Pounds</span>
                    </div>
                </>

            }

        </div>
    )
}

export default ResponsePage
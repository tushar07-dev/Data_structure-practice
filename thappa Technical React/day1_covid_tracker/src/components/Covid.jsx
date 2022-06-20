import React from 'react'
import { useEffect , useState } from 'react'

const Covid = () => {

    const [data, setData] = useState([])

const getCovidData = async() => {
    // MY API KEY  = 007cbc71df114db785900e7e6bb86f2f
// Countries : https://api.covidactnow.org/v2/counties.json?apiKey=YOUR_KEY_HERE
// States : https://api.covidactnow.org/v2/states.json?apiKey=007cbc71df114db785900e7e6bb86f2f 

  const data2 =   `https://api.covidactnow.org/v2/states.json?apiKey=007cbc71df114db785900e7e6bb86f2f`
    try {
        const res = await  fetch(data2);
        // console.log("Responce" , res);
        const actualData = await res.json();
        console.log("actualData" , actualData[0].actuals);
        setData( actualData[0].actuals)
    } catch (error) {
        console.log("error",error)
    }
}

    useEffect(() => {
        getCovidData();
    }, [])
    
  return (
    <>
    <section>
    <h1>Live-Tracker</h1>

    <h2>COVID-19 CORONA-ViRUS Tracker</h2>
    <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  <span>Our</span> COUNTRY </p>
                    <p className='card__total card__small '>INDIA</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  <span>Active</span> cases </p>
                    <p className='card__total card__small '> {data.cases} </p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  contact Tracers </p>
                    <p className='card__total card__small '>{data.contactTracers}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  <span>Total</span> deaths </p>
                    <p className='card__total card__small '>{data.deaths}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  <span>Total</span> negativeTests </p>
                    <p className='card__total card__small '>{data.negativeTests}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>  <span>Total</span> positiveTests </p>
                    <p className='card__total card__small '>{data.positiveTests}</p>
                </div>
            </div>
        </li>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'> vaccines Distributed </p>
                    <p className='card__total card__small '>{data.vaccinesDistributed}</p>
                </div>
            </div>
        </li>
    </ul>
    </section>
    </>
  )
}

export default Covid
import React from 'react'
import Cards from './Cards'


const PaymentcardData = () => {
    let data = [
        {
            date: "28/10/2020",
            logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
            heading: "Amazon Gift",
            subheading: "Pay",
            devices: "Desktop-Mobile",
            sider: "-->",
          },
          {
            date: "28/10/2020",
            logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg",
            heading: "Amazon Gift",
            subheading: "Pay",
            devices: "Desktop-Mobile",
            sider: "-->",
          },
          {
            date: "28/10/2020",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQHGFRY1hGxEICWnrZislB7deYYa1SFZa9g&usqp=CAU",
            heading: "Apple Gift",
            subheading: "Pay",
            devices: "MacOS-Mobile",
            sider: "-->",
          },
    ]
  return (
    <div>
      <Cards value={data}></Cards>
    </div>)
}


export default PaymentcardData
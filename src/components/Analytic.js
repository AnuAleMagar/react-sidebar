import React from 'react'
import ComboBox from './ComboBox';
import "../styles/ComboBox.css";
import Date from './Date';
const Analytics = () => {
  return (
    <div className='analyticBox'><h3 className='analyticHeading'>Welcome to Analytic Page</h3>
      <div className='comboBox'>
          <ComboBox headingContent="Choose Periods" option1="Morning" option2="Evening"/>
           <ComboBox headingContent="Location" option1="Country" option2="Gender"/>
           <div><Date content="Start date" /></div>
           <div><Date content="End date"  /></div>
      </div>
    </div>
  );
}
  
export default Analytics;
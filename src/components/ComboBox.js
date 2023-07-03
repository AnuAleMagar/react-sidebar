import React, { useState } from 'react';

const ComboBox = (props) => {
  const [selectedValue, setSelectedValue] = useState('');


  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div style={{ marginLeft: '50px' }}>
       <h5>{props.headingContent}</h5>
      <select  style={{ fontSize: '20px' }} value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">{props.option1}</option>
        <option value="option2">{props.option2}</option>
      </select>
    </div>
  );
};
export default ComboBox;
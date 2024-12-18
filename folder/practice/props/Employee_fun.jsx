2 
import React from 'react'

const Employee_fun = (props) => {
  return (
    <div>
      <h4>Employee</h4>
      <pre>{JSON.stringify(props)}</pre>
      <h3>Employee_id={props.Employee_id}</h3>
      <h3>Employee_details={props.Employee_Details.email}</h3>
      <h3>Employee_details={props.Employee_Details.loc}</h3>
    </div>
  )
}

export default Employee_fun
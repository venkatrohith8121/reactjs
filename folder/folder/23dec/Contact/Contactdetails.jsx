
import React from 'react'

const ContactDetails = (props) => {
  return (
    <div>

        <h3>Contact Details</h3>
        <pre>{JSON.stringify(props.contact)}</pre>
        <div className="card">
          <div className="card-header">
            <img src={props.contact.picture.medium} alt="" />
          </div>
          <div className="card-body">
            <ul className='list-group'>
              <li className='list-group-item'>{props.contact.gender}</li>
              <li className='list-group-item'>{props.contact.phone}</li>
              <li className='list-group-item'>{props.contact.dob.age}</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ContactDetails

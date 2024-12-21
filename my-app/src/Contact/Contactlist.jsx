import React from 'react'

const Contactlist = (props) => {
  return (
    <div>
      <h3>Contactlist</h3>
      {/* <pre>{JSON.stringify(props)}</pre> */}
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Citty</th>
        </thead>
        <tbody>
          {
            props.contacts.map((contact) => {
              return <tr>
                <td>{contact.name.first}</td>
                <td>{contact.email}</td>
                <td>{contact.location.city}</td>
              </tr>
            })

          }

        </tbody>
      </table>
    </div>
  )
}

export default Contactlist
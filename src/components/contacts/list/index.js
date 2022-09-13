import { useState } from 'react'

function List({ contacts }) {
  const [filter, setFilter] = useState("")
  const filtered = contacts.filter((e) => {
    return Object.keys(e).some((key) => {
      return e[key].toString().toLowerCase().includes(filter.toLocaleLowerCase())
    })
  })
  console.log(filtered)
  return (
    <div>
      <input placeholder='Filter Contacts' value={filter} onChange={(e) => setFilter(e.target.value)}></input>
      <ul>
        {filtered.map((contact, i) => (
          <li key={i}><span>{contact.fullname}</span> <span className='right'>{contact.phone_number}</span></li>
        ))}
      </ul>
    </div>
  )
}

export default List
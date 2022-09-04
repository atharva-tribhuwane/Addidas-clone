import React from 'react'
import "./css/Navbar.css"
export const Popuplist = ({ prop }) => {
  console.log(prop);
  const [arr, setarr] = React.useState(prop);
  return (
    <div className='at-list'>
      {
        arr.map((ele) => {
          return (
            <div key={ele.title}>
              <div>{ele.title}</div>
              {
                ele.items.map((inel) => {
                  return (
                    <div key={inel.name}>
                      <a href={inel.link}>{inel.name}</a>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}

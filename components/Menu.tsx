import React from 'react'

export const Menu = () => {
  return (
    <nav className="navbar navbar-default justify-content-between" style={{backgroundColor: '#495a74', height:'75px', }}>
        <div className="container-fluid">
            <div className="navbar-header" >
      
                <a className="navbar-brand" href="#">
                    <img alt="Brand" src="./logo.png" style={{ width: '100px', height: '45px', }} />
                </a>
            </div>
        </div>
    </nav>
  )
}
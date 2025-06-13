import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=> {
            props.setVehiclePanelOpen(false)
          }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
      
          <h2 className='text-2xl text-semibold mb-5'>Choose a Vehicle</h2>
          {/* Car */}
          <div onClick={()=> {
            props.setConfirmRidePanel(true)
          }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZSF95CrjLiN1GWozOua1uJFCkeDTsLTOb1A&s"></img>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
          {/* Moto */}
          <div onClick={()=> {
            props.setConfirmRidePanel(true)
          }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmAsgaaGilMgTCpwpNQITUfEd6rRIdmLpYQ&s"></img>
            <div className='w-1/2 -ml-6'>
              <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65</h2>
          </div>
          {/* Auto */}
          <div onClick={()=> {
            props.setConfirmRidePanel(true)
          }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"></img>
            <div className='w-1/2 ml-2'>
              <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
              <h5 className='font-medium text-sm'>5 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118.86</h2>
          </div>
    </div>
  )
}

export default VehiclePanel
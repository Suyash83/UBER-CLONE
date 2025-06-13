import React from 'react'

const LocationSearchPanel = (props,idx) => {
  console.log(props)

  // sample array for location 
  const locations = [
    "A-291, Silicon City, Rau, Indore",
    "A-292, Silicon City, Rau, Indore", 
    "A-293, Silicon City, Rau, Indore", 
    "A-294, Silicon City, Rau, Indore", 
    "A-295, Silicon City, Rau, Indore", 
    "A-296, Silicon City, Rau, Indore", 
    "A-297, Silicon City, Rau, Indore", 
    "A-298, Silicon City, Rau, Indore", 
    "A-299, Silicon City, Rau, Indore", 
    "A-300, Silicon City, Rau, Indore", 
  ]

  return (
    <div>
      {/* sample data  */}
      {
        locations.map(function(elem){
          return  <div onClick={()=> {
            props.setVehiclePanel(true)
            props.setPanelOpen(false) 
          }} className='flex gap-4 border-2 p-3 rounded-xl border-gray-50 active:border-black items-center my-2 justify-start'>
                  <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                  <h4 className='font-medium'>{elem}</h4>
                  </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRatings from '../components/StarRatings';

const AllRooms = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start 
    justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24'>
        <div>
            <div className='flex flex-col items-start text-left'>
                <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Room</h1>
                <p className='text-sm md:text-base mt-2 max-w-174 text-gray-500/90'>Take Advantage of limited time Offers and special packages to enchance your stay</p>
            </div>

            {roomsDummyData.map((room)=>(
                <div key={room._id} className='flex flex-col md:flex-row items-start py-10 gap-6 
                border-b border-gray-300 last:pb-30 last:border-0 '>
                    <img onClick={()=>{navigate(`/room/${room._id}`);scrollTo(0,0)}}
                     src={room.images[0]} alt='hotel-room' title='View Room Details'
                    className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
                    <div className=' md:w-1/2 flex- flex-col gap-2 '>
                        <p  className='text-gray-500'>{room?.hotel?.city}</p>
                        <p  onClick={()=>{navigate(`/room/${room._id}`);scrollTo(0,0)}} className='text-gray-800 text-3xl font-playfair  cursor-pointer'>{room?.hotel?.name}</p>
                        <div className='flex items-center'>
                              <StarRatings/>
                              <p className='ml-2'>200+ reviews </p>
                        </div>
                        <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                            <img src={assets.locationIcon} alt='location-icon'/>
                            <span>{room?.hotel?.address}</span>
                        </div>
                        <div className='flex flex-wrap items-center mt-3 mb-6 gap-4 '>
                            {room.amenities.map((item,index)=>(
                                <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg
                                bg-[#F5F5FF]/70'>
                                      <img  className="w-5 h-5" src={facilityIcons[item]} alt='item'/>
                                      <p className='text-xs'>{item}</p>
                                </div>
                            ))}

                        </div>

                        {/* {RoomPrice } */}
                        <p className='text-xl font-medium text-gray-700'>${room?.pricePerNight} /night</p>
                    </div>
                </div>
            ))}
        </div>

        {/* {Filters} */}
        <div></div>
    </div>
  )
}

export default AllRooms

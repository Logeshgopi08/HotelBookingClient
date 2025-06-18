import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRatings from '../components/StarRatings';

const RoomDetail = () => {
    const {id} = useParams();
    const [room,setRoom] = useState(null);
    const [mainImage,setMainImage] = useState(null);

    useState(()=>{
       const room = roomsDummyData.find(room =>room._id === id);
       room && setRoom(room);
       room && setMainImage(room.images[0]);
       console.log(room);
       

    },[])
  return room && (
    <div className='py-28 md:py-34 px-4 md:px-16 lg:px-24 xl:px-32'>

        {/* {Room Details} */}

        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair '>{room?.hotel?.name}
              <span className='font-inter text-sm'>({room?.roomType})</span></h1> 
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500
            rounded-full'>20% Off</p>
        </div>

        {/* {Room Ratings} */}

        <div className='flex items-center gap-1 mt-2'>
            <StarRatings/>
            <p className='ml-2'>200+ reviews</p>
        </div>

        {/* {room Address} */}
        <div className='flex items-center gap-1 mt-2 text-gray-600'>
            <img src={assets.locationIcon} alt='location-icon'/>
            <span>{room?.hotel?.address}</span>
        </div>


          {/* {Room Images} */}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt='main-image'
                className='w-full rounded-lg shadow-lg object-cover'/>
            </div>

            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length >1 && room?.images.map((img,index)=>(
                    <img  onClick={()=>setMainImage(img)}
                    src={img} key={index} alt='room-image'
                    className={`w-full rounded-xl shadow-md object-cover
                    cursor-pointer  ${mainImage === img && 'outline-3 outline-orange-500'}`} />
                ))}
            </div>
        </div>

        {/* {Room Highlights} */}

        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                  <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                   <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex items-center gap-2 px-3 py-2
                        rounded-lg bg-gray-100'>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))}
                   </div>
            </div>

            <div>
                <p className='text-2xl font-medium'>${room.pricePerNight} /perNight</p>
            </div>
        </div>


       {/* {CheckIn checkOut Form} */}

             <form className='flex flex-col md:flex-row items-start
             md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)]
             p-6 rounded-xl mx-auto mt-16 max-w-6xl'>

                <div className='flex flex-col flex-wrap md:flex-row items-start
                md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                        <input type="date" id='checkInDate' placeholder='Check-In' 
                        className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 
                        outline-none' required/>
                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id='checkOutDate' placeholder='Check-Out' 
                        className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 
                        outline-none' required/>
                    </div>


                     <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" id='guests' placeholder='0' 
                        className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5
                        outline-none' required/>
                    </div>


                </div>

                <button className='bg-primary hover:bg-primary-dull active:scale-95
                transition-all text-white rounded-md max-md:w-full 
                max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                    Book Now 
                </button>
             </form>


             {/* {Common Specification} */}

             <div className='mt-25 space-y-4'>
                {roomCommonData.map((spec,index)=>(
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5 '/>

                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
             </div>


             {/* {Hosted By Owner} */}

             <div className='flex flex-col items-start gap-4 mt-20'>

                <div className='flex gap-4 items-center'>
                    <img src={room?.hotel?.owner?.image} alt='Host'
                    className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>

                    <div>
                        <p className='text-lg md:text-xl'>Hosted by {room?.hotel?.name}</p>

                        <div className='flex items-center mt-1'>
                            <StarRatings/>
                            <p>200+ Reviews</p>
                        </div>
                    </div>
                </div>

             </div>
       
    </div>
  )
}

export default RoomDetail

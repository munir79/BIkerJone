import bike1 from '../assets/images/slider/bike1.png';
import bike2 from '../assets/images/slider/bike2.png';
import bike3 from '../assets/images/slider/bike3.png';
import bike4 from '../assets/images/slider/bike4.png';

const Caurosel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className='dark:bg-slate-800 justify-center items-center p-24 w-full  flex flex-col lg:flex-row'>
            <div className='space-y-7 flex-1'>
             <h2 className='text-6xl text-green-600'>Ride-on R15 V4 <br />with Smile</h2>
             <p className='text-xl'>Amet minim mollit non deserunt ullamco 
est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
<button className='btn btn-error '>Purchase</button>
            </div>
            <div className='flex-1'>
                <img src={bike2} alt="" className='w-3/4' />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 


        <div id="slide2" className="carousel-item relative w-full ">
          <div className='dark:bg-slate-800 justify-center items-center p-24 w-full  flex flex-col lg:flex-row'>
            <div className='space-y-7 flex-1'>
             <h2 className='text-6xl text-green-600'>Ride-on R15 V4 <br />with Smile</h2>
             <p className='text-xl'>Amet minim mollit non deserunt ullamco 
est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
<button className='btn btn-error '>Purchase</button>
            </div>
            <div className='flex-1'>
                <img src={bike3} alt="" className='w-3/4' />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
       
        <div id="slide3" className="carousel-item relative w-full ">
          <div className='dark:bg-slate-800 justify-center items-center p-24 w-full  flex flex-col lg:flex-row'>
            <div className='space-y-7 flex-1'>
             <h2 className='text-6xl text-green-600'>Ride-on R15 V4 <br />with Smile</h2>
             <p className='text-xl'>Amet minim mollit non deserunt ullamco 
est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
<button className='btn btn-error '>Purchase</button>
            </div>
            <div className='flex-1'>
                <img src={bike1} alt="" className='w-3/4' />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Caurosel;
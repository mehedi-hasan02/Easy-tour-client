import { Cursor, Typewriter } from 'react-simple-typewriter';
import slide1 from '../../assets/slide1.jpg' // cox's bazar
import slide2 from '../../assets/slide2.jpg' // khao sok national park, thailand
import slide3 from '../../assets/slide3.jpg' // Komodo National Park, indonesia
import slide4 from '../../assets/slide4.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-xl h-[250px] md:h-[350px] lg:h-[500px]">
                <div id="item1" className="carousel-item w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide1})` }}>
                    {/* <img src={slide1} className="w-full h-[500px]" /> */}
                    <div className='md:mt-24 md:ml-20 lg:mt-40 lg:ml-28 space-y-5'>
                        {/* <h1 className='text-5xl font-bold text-white' >Cox's Bazar Sea Beach</h1> */}
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left'>
                            <Typewriter
                                words={['Cox\'s Bazar Sea Beach']}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                            <Cursor cursorColor='red' cursorBlinking='false' />
                        </h1>
                        <p className='w-full md:w-3/4 lg:w-2/3 text-white text-center md:text-left lg:text-left'>Cox's Bazar Sea Beach, boasting the world's longest uninterrupted sandy shoreline, offers a breathtaking blend of azure waters, golden sands, and vibrant local culture, making it a coveted destination for sun-seekers and adventurers alike.</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full md:h-[350px] lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${slide2})` }}>
                    {/* <img src={slide2} className="w-full h-[500px]" /> */}
                    <div className='md:mt-24 md:ml-20 lg:mt-40 lg:ml-28 space-y-5'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left'>
                            <Typewriter
                                words={['Khao Sok National Park']}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                            <Cursor cursorColor='red' cursorBlinking='false' />
                        </h1>
                        <p className='w-full md:w-3/4 lg:w-2/3 text-white text-center md:text-left lg:text-left'>Khao Sok National Park, nestled in southern Thailand, mesmerizes with its ancient rainforests, limestone karsts, and emerald lakes. Home to diverse flora and fauna, it's a haven for adventurers seeking jungle treks and serene boat rides amidst breathtaking scenery.</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full md:h-[350px] lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${slide3})` }}>
                    {/* <img src={slide3} className="w-full h-[500px]" /> */}
                    <div className='md:mt-24 md:ml-20 lg:mt-40 lg:ml-28 space-y-5'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left'>
                            <Typewriter
                                words={['Komodo National Park']}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                            <Cursor cursorColor='red' cursorBlinking='false' />
                        </h1>
                        <p className='w-full md:w-3/4 lg:w-2/3 text-white text-center md:text-left lg:text-left'>Komodo National Park, located in Indonesia, is famed for its iconic Komodo dragons, the world's largest lizard species, thriving in their natural habitat. This UNESCO World Heritage Site encompasses stunning landscapes of volcanic islands, pristine beaches, and vibrant coral reefs, offering unparalleled opportunities for wildlife enthusiasts and nature lovers.</p>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full md:h-[350px] lg:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${slide4})` }}>
                    {/* <img src={slide4} className="w-full h-[500px]" /> */}
                    <div className='md:mt-24 md:ml-20 lg:mt-40 lg:ml-28 space-y-5'>
                        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold text-white text-center md:text-left lg:text-left'>
                            <Typewriter
                                words={['Kuala Lumpur']}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                            <Cursor cursorColor='red' cursorBlinking='false' />
                        </h1>
                        <p className='w-full md:w-3/4 lg:w-2/3 text-white text-center md:text-left lg:text-left'>Kuala Lumpur, the bustling capital of Malaysia, is a vibrant melting pot of cultures, featuring towering skyscrapers, historic landmarks, and bustling street markets. Renowned for its culinary delights and lively nightlife, it offers a captivating blend of modernity and tradition in the heart of Southeast Asia.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;
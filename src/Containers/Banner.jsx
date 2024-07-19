import React from 'react'
import banner from '../assets/banner.jpg'

function Banner() {

    return (
        <>
            <div className="banner-box">
                <img src={banner} alt="banner" className='img-fluid banner-box-img' />
                <div className="bannertext">
                    <h2>Netflix</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae asperiores qui provident facilis? Fuga itaque fugit error suscipit beatae numquam?</p>
                    <div className="banner-button">
                        <button type='button' className='btn btn-light more-btn'>More</button>
                        <button type='button' className='btn btn-outline-light'>watch Trailer</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
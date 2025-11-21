"use client"
import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

const InfiniteScroll = () => {

    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img6.png" alt="Slider" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img5.png" alt="Slider" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img4.png" alt="Slider" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img3.png" alt="Slider" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img2.png" alt="Slider" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <Image width={100} height={100} src="/slider/img1.png" alt="Slider" className='w-36' />
            </Slider.Slide>
        </Slider>
    )
}

export default InfiniteScroll
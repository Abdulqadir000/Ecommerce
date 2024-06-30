// components/Carousel.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <Image
            width={1250}
            height={400}
            objectFit="cover"
            src="/images/image1.jpg"
            alt="Image 1"
          />
        </div>
        <div>
          <Image
            width={1250}
            height={300}
            objectFit="cover"
            src="/images/image2.jpg"
            alt="Image 2"
          />
        </div>
        <div>
          <Image
            width={1250}
            height={300}
            objectFit="cover"
            src="/images/image3.jpg"
            alt="Image 3"
          />
        </div>
      </Slider>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row mt-10">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import { client, urlFor } from "../lib/sanity";
// import Image from "next/image";
// import Link from "next/link";

// async function getData() {
//   const query = "*[_type == 'heroImage'][0]"
//   const data = await client.fetch(query);
//   return data
// }

// export default async function Hero() {
//   const data = await getData()
//   return (
//     <section className="max-w-2xl mx-auto px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
//       <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//         <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//           <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
//             Top Fashion for a top price!
//           </h1>
//           <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
//             We sell only the most exculsive and high quality product for you.
//             We are thr best so come and shop with us.
//           </p>
//         </div>

//         <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//           <div className="relative left-12 top-12 z-10 ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">

//             <Image
//               src={urlFor(data.image1).url()}
//               alt="Pic"
//               className="h-full w-full object-center"
//               priority
//               width={500}
//               height={500}
//             />
//           </div>
//           <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
//             <Image
//               src={urlFor(data.image2).url()}
//               alt="Pic"
//               className="h-full w-full object-center"
//               width={500}
//               height={500}
//               priority
//             />

//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//   <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
//     <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
//       Men
//     </Link>
//     <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
//       Women
//     </Link>
//     <Link href="/Teens" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
//       Teens
//     </Link>
//   </div>
// </div>

//     </section>
//   )
// }

import React from 'react';



import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
const Calltoaction = () => {

 
           const [ref, inView] = useInView({
                   triggerOnce: true, 
                   threshold: 0.1,    
                 });
               
                 
               
               const styles = useSpring({
                 opacity: inView ? 1 : 0,
                   transform: inView ? 'translateX(0px)' : 'translateX(50px)', // ⬆️ Geser dari bawah
                   delay: inView ? 300 : 0,
                   config: { tension: 170, friction: 20 },
               });
     
        return (
       
            <>
            <section className=" dark:bg-gray-900 bg-purple-800  pt-32 pb-32 overflow-x-hidden">
    <animated.div style={{ ...styles }}   ref={ref}>
     
            <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 ">
    <a href="https://wa.me/628816982294?text=Halo%20saya%20ingin%20buat%20Website" target="_blank" rel="noreferrer"
        className="border rounded-2xl py-1 px-4 text-white text-sm mb-5 ">Solusi Digital Terbaik untuk Bisnis Anda

</a>
    <h1 className="mx-auto max-w-4xl font-display text-2xl md:text-5xl font-bold tracking-normal text-white sm:text-5xl">Bangun Website Profesional 
        <span className="relative whitespace-nowrap text-orange-400 mt-6">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span className="relative text-purple-300"> dalam Hitungan Hari</span>
        </span>
    </h1>
    <p className="mx-auto mt-8 max-w-xl text-lg text-white leading-7">Hubungi kami sekarang untuk konsultasi GRATIS dan mulailah perjalanan menuju website yang lebih andal dan profesional.</p>
    <a className="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-black/80 hover:scale-105 transition duration-300 ease-in-out"  href="https://wa.me/628816982294?text=Halo%20saya%20ingin%20Maintance/redesign%20Website">Konsultasi Sekarang →
    </a>
</main>
           
           </animated.div>
          </section>
          </>
      

          
        );
   
  
    
};


export default Calltoaction;



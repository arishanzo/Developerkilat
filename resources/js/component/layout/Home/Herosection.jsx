
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const HeroSection = () => {


       const [ref, inView] = useInView({
        triggerOnce: true, 
        threshold: 0.1,    
      });
    
      
    
    const styles = useSpring({
      opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)', // ⬆️ Geser dari bawah
        delay: inView ? 300 : 0,
        config: { tension: 170, friction: 20 },
        
    });
    
    return (

        
        <>


<section className="mx-auto md:relative  text-gray-600 body-font  dark:bg-gray-900 md:pt-12 md:pb-20 overflow-x-hidden md:p-16  overflow-y-hidden">
  
          <animated.div style={{ ...styles }}  ref={ref}>
    <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center  md:px-16  sm:grid-cols-12 md:max-w-[1650px]   md:grid-cols-12">
      
        <div
            className="lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center block sm:col-span-7 justify-center md:col-span-6 text-center ">
         

         <div class="absolute top-40 -left-10  w-[100px] h-[200px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 opacity-20 rounded-full blur-3xl"></div>
   <div class="absolute top-10 right-0 w-[200px] h-[100px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-blue-500 opacity-20 rounded-full blur-3xl"></div>

          <a href="/template" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">Pilih Template</span> <span className="text-sm font-medium">Untuk Digital Anda.</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-8 text-3xl md:text-5xl   text-gray-900 font-bold tracking-tight dark:text-white md:max-w-xl sm:text-2xl xl:text-5xl ">Percayakan Kebutuhan Digitalisasi <span className='text-purple-800 font-extrabold  dark:text-purple-500 '>Bisnis</span> Dan Strategi <span className='text-purple-800 font-extrabold  dark:text-purple-500 '> SEO</span> Anda Kepada Kami</h1>
        
       
        <p className="mb-4 px-4 font-sans sm:p-0 text-gray-500 dark:text-gray-400 py-3.5 md:max-w-[650px] md:mb-12 md:text-lg  lg:mb-5 lg:text-xl text-justify">
            Bangun website impian Anda dengan desain modern, responsif, dan sesuai kebutuhan bisnis Anda. Tingkatkan kehadiran online Anda bersama kami!
            Kami siap membantu Anda memiliki website yang profesional, cepat, dan SEO-friendly untuk meningkatkan brand dan penjualan Anda.
            </p>
       
        <div className="flex justify-center md:justify-start">
        <a  href="https://wa.me/6288805317354?text=Halo%20saya%20ingin%20buat%20Website" target="_blank" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6 md:text-sm text-xs">Konsultasi</a>
        <button onClick={() => {
    const section = document.getElementById('pembayaran');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }}
        
        className="flex  max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] dark:bg-white">
            <p className="text-black md:text-sm text-xs">Cek Harga Website</p>
        </button>
        </div>
        </div>
       

        <div className='sm:col-span-7 justify-center md:col-span-6'>
      <img className="object-cover object-center rounded" alt="hero" src="./img/depan.png" />
      </div>
      </div>
      </animated.div>
   
                                       </section>



                                       
  <div className="flex flex-col w-full h-full">
    <div x-data x-init="
            $nextTick(() => {
                $refs.content.appendChild($refs.item.cloneNode(true));
            });
        " 
        className="w-full overflow-hidden text-lg italic tracking-wide text-white uppercase sm:text-xs md:text-2xl lg:text-base xl:text-xl"
        >
        <div className="relative w-full  overflow-hidden ">
            <div className="absolute left-0 z-20 w-40 dark:w-full h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div className="absolute right-0 z-20 w-40 dark:w-full h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div x-ref="content" className="flex animate-marquee">
                <div x-ref="item" className="flex items-center justify-center flex-shrink-0 w-full py-2 space-x-2 container-block-02">
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web1.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web2.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web3.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web4.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web5.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web6.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web7.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web8.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web9.jpg" alt=""/>
              
                </div>


               
            </div>
        </div>
    </div>
    <div x-data x-init="
            $nextTick(() => {
                $refs.content.appendChild($refs.item.cloneNode(true));
            });
        " 
        className="w-full mx-auuto overflow-hidden text-lg italic tracking-wide text-white  sm:text-xs md:text-2xl lg:text-base xl:text-xl"
        >
        <div className="relative w-full  overflow-hidden">
            <div className="absolute left-0 z-20 w-full  h-full bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div className="absolute right-0 z-20 w-full h-full bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent"></div>
            <div x-ref="content" className="flex animate-marquee-reverse">
            <div x-ref="item" className="flex items-center justify-center flex-shrink-0 w-full py-2 space-x-2 container-block-02">
            <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web1.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web2.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web3.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web4.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web5.jpg" alt=""/>
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web6.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web7.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web8.jpg" alt=""/>
                
                <img className="h-20 md:h-80 max-w-full rounded-lg" src="./img/templateweb/web9.jpg" alt=""/>
              
                </div>


    
               
            </div>
        </div>
    </div>
</div>
    </>
    );
}



export default HeroSection;
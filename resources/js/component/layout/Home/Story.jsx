import { FaCode } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";


import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const Story = () => {

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

    return(

          <animated.div style={{ ...styles }}   ref={ref}>
        <section class="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 lg:py-20">
    <div class="mx-auto  px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <p class="text-sm font-bold uppercase tracking-widest text-gray-700">Sedikit Kisah</p>
            <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-300">Perjalanan Kami Sejak
                <span className='text-purple-800 font-extrabold  dark:text-purple-500 '> Tahun 2022</span>
            </h2>
            <p class="mx-auto mt-4 max-w-4xl text-lg font-normal text-gray-400 lg:text-xl lg:leading-8">
              Dimulai dari langkah kecil, kami terus tumbuh dan berkembang hingga hari ini. Dari 2022 hingga kini, komitmen kami tetap sama: memberikan yang terbaik.
            </p>
        </div>
        <ul class="mx-auto mt-12 grid  md:max-w-[1500px] grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
            <li class="flex-start group relative flex lg:flex-col">
                <span
                    class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    class="inline-flex dark:bg-purple-900 dark:border-none h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-purple-900">
                   <FaCode className="group-hover:text-white dark:text-white" />
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        class="text-xl dark:text-purple-500 font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Jatuh Cinta Dengan Coding
                    </h3>
                    <p class="mt-2 font-bold text-base text-gray-400">Tahun 2021 - 2022</p>
                    <h4 class="mt-2 text-base text-gray-700">Bagi Kami, coding bukan cuma tentang logika, tapi juga tentang cinta pada proses.</h4>
                </div>
            </li>
            <li class="flex-start group relative flex lg:flex-col">
                <span
                    class="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    class="inline-flex h-10 w-10 dark:bg-purple-900 dark:border-none shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-purple-900">
                 <GoProjectSymlink className="group-hover:text-white dark:text-white"/>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        class="text-xl dark:text-purple-500 font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Mengerjakan Beberapa Project
                    </h3>
                      <p class="mt-2 font-bold text-base text-gray-400">Tahun 2022</p>
                    <h4 class="mt-2 text-base text-gray-700">Kami memulainya dengan project kecil di tahun 2022, Project tersebut dari teman dan lingkungan sekitar.</h4>
                </div>
            </li>
            <li class="flex-start group relative flex lg:flex-col">
                <span
                    class="absolute left-[18px] top-14 h-[calc(100%_-_32px)]  w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
                    aria-hidden="true"></span>
                <div
                    class="inline-flex h-10 w-10 shrink-0 dark:bg-purple-900 dark:border-none  items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-purple-900">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-600 group-hover:text-white dark:text-white">
                        <path
                            d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12C22 9.79086 17.5228 8 12 8C6.47715 8 2 9.79086 2 12M22 12C22 14.2091 17.5228 16 12 16C6.47715 16 2 14.2091 2 12M12 22C6.47715 22 2 17.5228 2 12M12 22C14.2091 22 16 17.5228 16 12C16 6.47715 14.2091 2 12 2M12 22C9.79086 22 8 17.5228 8 12C8 6.47715 9.79086 2 12 2M2 12C2 6.47715 6.47715 2 12 2"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                       <h3
                        class="text-xl dark:text-purple-500 font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Staff IT & WEB Developer
                    </h3>
                      <p class="mt-2 font-bold text-base text-gray-400">Tahun 2022 - 2023</p>
                    <h4 class="mt-2 text-base text-gray-700">Kami berpengalaman menjadi Staff IT dan Web Developer jarak jauh di salah satu perusahaan di Jawa Timur</h4>
                </div>
            </li>
            <li class="flex-start group relative flex lg:flex-col">
                <div
                    class="inline-flex h-10 w-10 shrink-0 items-center dark:bg-purple-900 dark:border-none  justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-purple-900">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-600 group-hover:text-white dark:text-white">
                        <path
                            d="M5.50049 10.5L2.00049 7.9999L3.07849 6.92193C3.964 6.03644 4.40676 5.5937 4.9307 5.31387C5.39454 5.06614 5.90267 4.91229 6.42603 4.86114C7.01719 4.80336 7.63117 4.92617 8.85913 5.17177L10.5 5.49997M18.4999 13.5L18.8284 15.1408C19.0742 16.3689 19.1971 16.983 19.1394 17.5743C19.0883 18.0977 18.9344 18.6059 18.6867 19.0699C18.4068 19.5939 17.964 20.0367 17.0783 20.9224L16.0007 22L13.5007 18.5M7 16.9998L8.99985 15M17.0024 8.99951C17.0024 10.1041 16.107 10.9995 15.0024 10.9995C13.8979 10.9995 13.0024 10.1041 13.0024 8.99951C13.0024 7.89494 13.8979 6.99951 15.0024 6.99951C16.107 6.99951 17.0024 7.89494 17.0024 8.99951ZM17.1991 2H16.6503C15.6718 2 15.1826 2 14.7223 2.11053C14.3141 2.20853 13.9239 2.37016 13.566 2.5895C13.1623 2.83689 12.8164 3.18282 12.1246 3.87469L6.99969 9C5.90927 10.0905 5.36406 10.6358 5.07261 11.2239C4.5181 12.343 4.51812 13.6569 5.07268 14.776C5.36415 15.3642 5.90938 15.9094 6.99984 16.9998V16.9998C8.09038 18.0904 8.63565 18.6357 9.22386 18.9271C10.343 19.4817 11.6569 19.4817 12.7761 18.9271C13.3643 18.6356 13.9095 18.0903 15 16.9997L20.1248 11.8745C20.8165 11.1827 21.1624 10.8368 21.4098 10.4331C21.6291 10.0753 21.7907 9.6851 21.8886 9.27697C21.9991 8.81664 21.9991 8.32749 21.9991 7.34918V6.8C21.9991 5.11984 21.9991 4.27976 21.6722 3.63803C21.3845 3.07354 20.9256 2.6146 20.3611 2.32698C19.7194 2 18.8793 2 17.1991 2Z"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div class="ml-6 lg:ml-0 lg:mt-10">
                    <h3
                        class="text-xl dark:text-purple-500 font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                        Memulai Membangun Layanan
                    </h3>
                    
                      <p class="mt-2 font-bold text-base text-gray-400">Tahun 2024 - Sekarang</p>
                    <h4 class="mt-2 text-base text-gray-700">Menjadi langkah awal kami dalam membangun layanan profesional. Kami mulai menyusun sistem yang dapat membantu lebih banyak orang melalui teknologi.</h4>
                </div>
            </li>
        </ul>
    </div>
</section>
   </animated.div>
    )

};

export default Story;
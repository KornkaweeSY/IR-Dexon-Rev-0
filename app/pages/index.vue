<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Chart1 from '~/components/chart1.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination]



</script>

<template>
    <div>
        <section id="home" class="relative h-screen overflow-hidden bg-linear-to-r from-blue-500 to-blue-700">
            <video autoplay loop muted playsinline preload="auto" class="absolute inset-0 w-full h-full object-cover" onloadeddata="this.play()">
                <source src="/video/banner.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="relative z-10 h-full flex flex-col items-center justify-center">
                <div class="container mx-auto px-6 text-white">
                    <div class="max-w-4xl mx-auto">
                        <div class="flex flex-col gap-4 items-center text-center">
                            <div class="inline-block">
                                <p class="text-sm md:text-base font-semibold tracking-[0.3em] text-gray-300 uppercase mb-4 animate-fade-in">
                                    Welcome to
                                </p>
                            </div>
                            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl leading-tight animate-slide-up">
                                <span class="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                    Investor Relations
                                </span>
                            </h1>
                            <!-- <p class="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-lg animate-fade-in-delay">
                                Discover comprehensive financial insights and strategic updates from DEXON
                            </p> -->
                            <div class="flex gap-4 mt-8 animate-fade-in-delay-2">
                                <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    Explore More
                                </button>
                                <button class="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                    Contact IR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 z-10 pb-12 text-white">
                <div class="container mx-auto px-6">
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 p-8">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div class="flex flex-col gap-3 border-r border-white/20 pr-8 last:border-r-0">
                                <div class="flex items-baseline gap-3">
                                    <span class="text-sm font-medium text-gray-300">SET: DEXON</span>
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-5xl font-bold">1.10</span>
                                    <span class="text-lg text-gray-300 mb-1">THB</span>
                                </div>
                                <div class="text-xs text-gray-400 mt-1">
                                    Last Updated: 07 Jan 2026 16:37
                                </div>
                            </div>
                            
                            <div class="flex flex-col gap-3 border-r border-white/20 pr-8 last:border-r-0">
                                <div class="text-sm font-medium text-gray-300">
                                    Change (% Change)
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl font-bold text-green-400">+0.75</span>
                                </div>
                                <div class="text-lg text-green-400 font-semibold">
                                    +1.76%
                                </div>
                            </div>
                            
                            <div class="flex flex-col gap-3 border-r border-white/20 pr-8 last:border-r-0">
                                <div class="text-sm font-medium text-gray-300">
                                    Volume (Shares)
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl font-bold">80,200.00</span>
                                </div>
                                <!-- <div class="text-sm text-gray-400">
                                    28,549,686 shares
                                </div> -->
                            </div>
                            
                            <div class="flex flex-col gap-3 justify-center items-center">
                                <button class="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lgZ">
                                    Stock Quote 
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1_copy_10" data-name="Layer 1 copy 10"><g id="_138" data-name="138"><path d="m256 0c-141.38 0-256 114.62-256 256s114.62 256 256 256 256-114.62 256-256-114.62-256-256-256zm-60.12 402.89-22.88-22.89 124.05-124-124-124 22.86-22.86 146.87 146.86z" fill="#fdfdfd" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></g></g></g></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-semibold text-start mb-12">Important Financial Information 9M/2025</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <Chart1 />
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <Chart2 />
                    </div>
                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <Chart3 />
                    </div>
                </div>
            </div>
        </section>

        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <h2 class="text-4xl font-semibold text-start mb-12">SET Announcements</h2>
                <Swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="30"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: false,
                    }"
                    :pagination="{ clickable: true }"
                    :navigation="true"
                    :breakpoints="{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }"
                    class="mySwiper"
                >
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">�</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Q4 2025 Results</h3>
                            <!-- <p class="text-gray-600 mb-4">Strong financial performance with 15% revenue growth</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">🎯</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Strategic Partnership</h3>
                            <!-- <p class="text-gray-600 mb-4">New collaboration to expand market presence</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">🌱</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Sustainability Initiative</h3>
                            <!-- <p class="text-gray-600 mb-4">Committed to carbon neutrality by 2030</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">�</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation Award</h3>
                            <!-- <p class="text-gray-600 mb-4">Recognized for technological excellence</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">�</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation Award</h3>
                            <!-- <p class="text-gray-600 mb-4">Recognized for technological excellence</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">�</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation Award</h3>
                            <!-- <p class="text-gray-600 mb-4">Recognized for technological excellence</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                            <div class="text-6xl mb-6">�</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Innovation Award</h3>
                            <!-- <p class="text-gray-600 mb-4">Recognized for technological excellence</p> -->
                            <button class="text-blue-600 font-semibold hover:text-blue-800 transition">Read More →</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

        <section class="py-20 bg-linear-to-b from-gray-50 to-white">
            <div class="container mx-auto px-6 flex flex-col gap-6">
                <h2 class="text-4xl font-semibold text-start mb-12">You may be interested in</h2>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div class="col-span-1 md:col-span-2 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-7/8">
                            <img src="/img/img1.jpg" alt="Gallery Image 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">IR News Subscription</h3>
                                    <p class="text-sm text-gray-200 line-clamp-2">Stay updated with the latest investor relations news and announcements</p>
                                    <button class="self-start flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        Read More 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 md:col-span-3 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-4/3">
                            <img src="/img/img2.jpg" alt="Gallery Image 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">Financial Reports</h3>
                                    <p class="text-sm text-gray-200 line-clamp-2">Access comprehensive quarterly and annual financial statements</p>
                                    <button class="self-start flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        Read More 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div class="col-span-1 md:col-span-3 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-4/3">
                            <img src="/img/img3.jpg" alt="Gallery Image 3" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">Corporate Governance</h3>
                                    <p class="text-sm text-gray-200 line-clamp-2">Learn about our commitment to transparency and ethical business practices</p>
                                    <button class="self-start flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        Read More 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 md:col-span-2 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-7/8">
                            <img src="/img/img4.jpg" alt="Gallery Image 4" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                                <div class="flex flex-col gap-3">
                                    <h3 class="text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">Shareholder Information</h3>
                                    <p class="text-sm text-gray-200 line-clamp-2">Important information for our valued shareholders and investors</p>
                                    <button class="self-start flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        Read More 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 1s ease-out;
}

.animate-slide-up {
    animation: slideUp 1s ease-out 0.2s both;
}

.animate-fade-in-delay {
    animation: fadeIn 1s ease-out 0.4s both;
}

.animate-fade-in-delay-2 {
    animation: fadeIn 1s ease-out 0.6s both;
}
</style>
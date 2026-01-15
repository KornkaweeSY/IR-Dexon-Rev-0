<script setup lang="ts">
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import Chart1 from '~/components/chart1.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination]
const { t } = useLanguage()


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
                                <p class="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-gray-300 uppercase mb-3 sm:mb-4 animate-fade-in">
                                    {{ t('index.welcome') }}
                                </p>
                            </div>
                            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-2xl leading-tight animate-slide-up">
                                <span class="bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                                    {{ t('index.investor_relations') }}
                                </span>
                            </h1>
                            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto animate-fade-in-delay-2">
                                <button class="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                    {{ t('index.explore') }}
                                </button>
                                <button class="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                                    {{ t('index.contact_ir') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden md:block lg:block absolute bottom-0 left-0 right-0 z-10 pb-6 sm:pb-8 md:pb-12 text-white">
                <div class="container mx-auto px-4 sm:px-6">
                    <div class="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 p-4 sm:p-6 md:p-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            <div class="flex flex-col gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-8 last:border-b-0 last:border-r-0">
                                <div class="flex items-baseline gap-3">
                                    <span class="text-sm font-medium text-gray-300">{{ t('index.set') }}</span>
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-3xl sm:text-4xl md:text-5xl font-bold">1.10</span>
                                    <span class="text-base sm:text-lg text-gray-300 mb-1">{{ t('index.currentcy') }}</span>
                                </div>
                                <div class="text-xs text-gray-400 mt-1">
                                    {{ t('index.last_updated') }}: 07 Jan 2026 16:37
                                </div>
                            </div>
                            
                            <div class="flex flex-col gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-8 last:border-b-0 last:border-r-0">
                                <div class="text-sm font-medium text-gray-300">
                                    {{ t('index.change') }}
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-2xl sm:text-3xl font-bold text-green-400">+0.75</span>
                                </div>
                                <div class="text-lg text-green-400 font-semibold">
                                    +1.76%
                                </div>
                            </div>
                            
                            <div class="flex flex-col gap-2 sm:gap-3 border-b sm:border-b-0 sm:border-r border-white/20 pb-4 sm:pb-0 sm:pr-8 last:border-b-0 last:border-r-0">
                                <div class="text-sm font-medium text-gray-300">
                                    {{ t('index.volume') }}
                                </div>
                                <div class="flex items-baseline gap-2">
                                    <span class="text-2xl sm:text-3xl font-bold md:text-2xl">80,200.00</span>
                                </div>
                            </div>
                            
                            <div class="flex flex-col gap-2 sm:gap-3 justify-center items-center">
                                <button class="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold md:text-[10px] lg:text-[18px] transition-all duration-300 hover:scale-105 hover:shadow-lgZ">
                                    {{ t('stock.quote') }} 
                                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width="18" height="18" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1_copy_10" data-name="Layer 1 copy 10"><g id="_138" data-name="138"><path d="m256 0c-141.38 0-256 114.62-256 256s114.62 256 256 256 256-114.62 256-256-114.62-256-256-256zm-60.12 402.89-22.88-22.89 124.05-124-124-124 22.86-22.86 146.87 146.86z" fill="#fdfdfd" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/></g></g></g></g></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-8 sm:mb-10 md:mb-12">{{ t('index.important_financial_info') }} 9M/2025</h2>
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

        <section class="py-10 sm:py-12 md:py-16 lg:py-10 bg-gray-50">
            <div class="container mx-auto px-4 sm:px-6">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-8 sm:mb-10 md:mb-12">{{ t('index.set_announcements') }}</h2>
                <div class="">
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
                        class="mySwiper pb-12!"
                    >
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">17 December 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Notification of Board Resolution regarding the change of Chief Executive Officer</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">28 November 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Invitation for shareholders to propose agenda items for the 2026 Annual General Meeting of Shareholders and nominate candidates for election as company directors</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">10 November 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Management Discussion and Analysis Quarter 3 Ending 30 Sep 2025  (Revised)</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">10 November 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Notification of Board Resolution regarding the change of Chief Executive Officer</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">10 November 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Notification of the establishment of a subsidiary</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="h-[250px] flex flex-col items-start justify-between gap-4 bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                <p class="text-[19px] text-[#b7b7b7] font-bold">07 November 2025</p>
                                <h3 class="text-[19px] font-bold mb-4 text-[#1e1450] line-clamp-3">Financial Performance Quarter 3 (F45) (Reviewed)</h3>
                                <button class="text-red-600 font-semibold hover:text-red-800 transition">{{ t('index.read_more') }} →</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

        <section class="py-10 sm:py-16 md:py-20 bg-linear-to-b from-gray-50 to-white">
            <div class="container mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:gap-6">
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-8 sm:mb-10 md:mb-12">{{ t('index.interested_in') }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
                    <div class="col-span-1 md:col-span-2 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-7/8">
                            <img src="/img/img1.jpg" alt="Gallery Image 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <h3 class="text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">{{ t('index.ir_news_title') }}</h3>
                                    <p class="text-xs sm:text-sm text-gray-200 line-clamp-2">{{ t('index.ir_news_desc') }}</p>
                                    <button class="self-start flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        {{ t('index.read_more') }} 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-4/3">
                            <img src="/img/img2.jpg" alt="Gallery Image 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <h3 class="text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">{{ t('index.financial_reports_title') }}</h3>
                                    <p class="text-xs sm:text-sm text-gray-200 line-clamp-2">{{ t('index.financial_reports_desc') }}</p>
                                    <button class="self-start flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        {{ t('index.read_more') }} 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
                    <div class="col-span-1 md:col-span-3 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-4/3">
                            <img src="/img/img3.jpg" alt="Gallery Image 3" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <h3 class="text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">{{ t('index.corporate_governance_title') }}</h3>
                                    <p class="text-xs sm:text-sm text-gray-200 line-clamp-2">{{ t('index.corporate_governance_desc') }}</p>
                                    <button class="self-start flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        {{ t('index.read_more') }} 
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 md:col-span-2 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div class="relative overflow-hidden aspect-7/8">
                            <img src="/img/img4.jpg" alt="Gallery Image 4" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-10">
                                <div class="flex flex-col gap-2 sm:gap-3">
                                    <h3 class="text-xl sm:text-2xl font-bold leading-tight group-hover:text-blue-300 transition-colors duration-300">{{ t('index.shareholder_info_title') }}</h3>
                                    <p class="text-xs sm:text-sm text-gray-200 line-clamp-2">{{ t('index.shareholder_info_desc') }}</p>
                                    <button class="self-start flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 group-hover:gap-3">
                                        {{ t('index.read_more') }} 
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
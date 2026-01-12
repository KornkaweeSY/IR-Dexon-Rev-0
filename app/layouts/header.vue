<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue'

const isOverviewOpen: Ref<boolean> = ref(false)
const isFinancialsOpen: Ref<boolean> = ref(false)
const isStockInfoOpen: Ref<boolean> = ref(false)
const isShareholderInfoOpen: Ref<boolean> = ref(false)
const isReportsAndPresentationsOpen: Ref<boolean> = ref(false)
const isNewsAndEventsOpen: Ref<boolean> = ref(false)
const overviewRef: Ref<HTMLElement | null> = ref(null)
const financialsRef: Ref<HTMLElement | null> = ref(null)
const stockInfoRef: Ref<HTMLElement | null> = ref(null)
const shareholderInfoRef: Ref<HTMLElement | null> = ref(null)
const reportsAndPresentationsRef: Ref<HTMLElement | null> = ref(null)
const newsAndEventsRef: Ref<HTMLElement | null> = ref(null)

// Scroll-based header style switching
const isScrolled: Ref<boolean> = ref(false)
const scrollThreshold: number = 1200 // pixels from top to trigger style change

const handleScroll = (): void => {
    const currentScrollY = window.scrollY
    
    // Check if scrolled past home section (approximately)
    if (currentScrollY > scrollThreshold) {
        isScrolled.value = true
    } else {
        isScrolled.value = false
    }
}

const toggleOverview = (): void => {
    isOverviewOpen.value = !isOverviewOpen.value
    isFinancialsOpen.value = false
    isStockInfoOpen.value = false
}

const toggleFinancials = (): void => {
    isFinancialsOpen.value = !isFinancialsOpen.value
    isOverviewOpen.value = false
    isStockInfoOpen.value = false
}

const toggleStockInfo = (): void => {
    isStockInfoOpen.value = !isStockInfoOpen.value
    isOverviewOpen.value = false
    isFinancialsOpen.value = false
}

const toggleShareholderInfo = (): void => {
    isShareholderInfoOpen.value = !isShareholderInfoOpen.value
    isOverviewOpen.value = false
    isFinancialsOpen.value = false
    isStockInfoOpen.value = false
}

const toggleReportsAndPresentations = (): void => {
    isReportsAndPresentationsOpen.value = !isReportsAndPresentationsOpen.value
    isOverviewOpen.value = false
    isFinancialsOpen.value = false
    isStockInfoOpen.value = false
    isShareholderInfoOpen.value = false
}

const toggleNewsAndEvents = (): void => {
    isNewsAndEventsOpen.value = !isNewsAndEventsOpen.value
    isOverviewOpen.value = false
    isFinancialsOpen.value = false
    isStockInfoOpen.value = false
    isShareholderInfoOpen.value = false
    isReportsAndPresentationsOpen.value = false
}

const closeOverview = (): void => {
    isOverviewOpen.value = false
}

const closeFinancials = (): void => {
    isFinancialsOpen.value = false
}

const closeStockInfo = (): void => {
    isStockInfoOpen.value = false
}

const closeShareholderInfo = (): void => {
    isShareholderInfoOpen.value =false
}

const closeReportsAndPresentations = (): void => {
    isReportsAndPresentationsOpen.value = false
}

const closeNewsAndEvents = (): void => {
    isNewsAndEventsOpen.value = false
}



const handleClickOutside = (event: MouseEvent): void => {
    const target = event.target as Node
    
    if (overviewRef.value && !overviewRef.value.contains(target)) {
        closeOverview()
    }
    if (financialsRef.value && !financialsRef.value.contains(target)) {
        closeFinancials()
    }
    if (stockInfoRef.value && !stockInfoRef.value.contains(target)) {
        closeStockInfo()
    }
    if (shareholderInfoRef.value && !shareholderInfoRef.value.contains(target)) {
        closeShareholderInfo()
    }
    if (reportsAndPresentationsRef.value && !reportsAndPresentationsRef.value.contains(target)) {
        closeReportsAndPresentations()
    }
    if (newsAndEventsRef.value && !newsAndEventsRef.value.contains(target)) {
        closeNewsAndEvents()
    }
}

onMounted((): void => {
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
})

onUnmounted((): void => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header class="fixed left-0 right-0 z-50 backdrop-blur-sm header-transition" :class="isScrolled ? 'bg-white/90 text-gray-700' : 'bg-white/5'">
        <nav class="container mx-auto px- py-1">
            <div class="flex items-center justify-between">
                <div class="flex items-end justify-center">
                    <div class="relative h-10 w-auto">
                        <Transition name="logo-fade" mode="out-in">
                            <img v-if="!isScrolled" key="white" src="/logo/dexon_white.png" alt="IR-Dexon Logo" class="h-10">
                            <img v-else key="navy" src="/logo/dexon_navy.png" alt="IR-Dexon Logo" class="h-10">
                        </Transition>
                    </div>
                    <div class="border-l-2 h-10 ml-2 flex items-end px-2 transition-colors duration-300" :class="isScrolled ? 'border-gray-300' : 'border-white/30'">
                        <h2 class="font-semibold transition-colors duration-300" :class="isScrolled ? 'text-gray-700' : 'text-white'">INVESTOR</h2>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-1">
                    <div class="flex items-center space-x-4">
                        <a href="https://www.dexon-technology.com/" target="_blank" class="transition-colors duration-300" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">Go to Corporate Site</a>
                        <select name="language" id="language" class="px-3 py-1 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer backdrop-blur-sm" :class="isScrolled ? 'border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-blue-500' : 'border-white/30 text-white bg-white/10 hover:bg-white/20 focus:ring-white/50'">
                            <option value="en" class="text-gray-800">EN</option>
                            <option value="th" class="text-gray-800">TH</option>
                        </select>
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <div class="relative" ref="overviewRef">
                            <button @click="toggleOverview" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                Overview
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isOverviewOpen" class="absolute left-0 mt-2 w-64 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#business" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        Business Overview
                                    </a>
                                    <a href="#directors" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 dropdown-item">
                                        Board of Directors and Sub-Committees
                                    </a>
                                    <a href="#governance" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        Corporate Governance
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="financialsRef">
                            <button @click="toggleFinancials" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                Financials Info
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isFinancialsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        Financial Performance
                                    </a>
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 dropdown-item">
                                        Financial Statements and MD&A
                                    </a>
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        Fact Sheets
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="stockInfoRef">
                            <button @click="toggleStockInfo" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                Stock Info
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isStockInfoOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        Stock Information
                                    </a>
                                    <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        Stock Performance
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="shareholderInfoRef">
                            <button @click="toggleShareholderInfo" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                Shareholder Info
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isShareholderInfoOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        Shareholder Information
                                    </a>
                                    <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        Shareholder Services
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="reportsAndPresentationsRef">
                            <button @click="toggleReportsAndPresentations" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                Reports and Presentations
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isReportsAndPresentationsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        Reports and Presentations
                                    </a>
                                    <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        News and Events
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="newsAndEventsRef">
                            <button @click="toggleNewsAndEvents" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                News and Events
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isNewsAndEventsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#news" @click="closeNewsAndEvents" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        News and Events
                                    </a>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
/* 🎨 Header Transition - ปรับระยะเวลาได้ที่ตัวแปร headerTransitionDuration (บรรทัด 20) */
.header-transition {
    transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: #2563eb;
    transition: all 0.3s ease-in-out;
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 100%;
}

.dropdown-item {
    position: relative;
    transition: all 0.2s ease-in-out;
}

.dropdown-item::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #2563eb;
    transition: width 0.3s ease-in-out;
}

.dropdown-item:hover::before {
    width: 100%;
}

.dropdown-item:hover {
    color: #2563eb;
    padding-left: 1.25rem;
}

/* 🎨 Logo Fade Animation - ใช้ระยะเวลาเดียวกับ header transition (0.8s) */
.logo-fade-enter-active {
    transition: opacity 0.1s ease-in-out;
}

.logo-fade-leave-active {
    transition: opacity 0.1s ease-in-out;
}

.logo-fade-enter-from {
    opacity: 0;
}

.logo-fade-enter-to {
    opacity: 1;
}

.logo-fade-leave-from {
    opacity: 1;
}

.logo-fade-leave-to {
    opacity: 0;
}

/* 🎨 Dropdown Fade Animation - ปรับระยะเวลาได้ที่ตัวแปร dropdownAnimationDuration */
.dropdown-fade-enter-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-fade-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 1, 1);
}

.dropdown-fade-enter-from {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
}

.dropdown-fade-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.dropdown-fade-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
}
</style>
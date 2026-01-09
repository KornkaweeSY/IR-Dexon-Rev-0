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

const isHeaderVisible: Ref<boolean> = ref(true)
let lastScrollY: number = 0
const scrollThreshold: number = 500

/* const handleScroll = (): void => {
    const currentScrollY = window.scrollY
    
    if (currentScrollY < scrollThreshold) {
        isHeaderVisible.value = true
    } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        isHeaderVisible.value = false
    } else if (currentScrollY < lastScrollY) {
        isHeaderVisible.value = true
    }
    
    lastScrollY = currentScrollY
} */

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
    // window.addEventListener('scroll', handleScroll)
})

onUnmounted((): void => {
    document.removeEventListener('click', handleClickOutside)
    // window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header class="fixed left-0 right-0 z-50 bg-white/5 backdrop-blur-sm transition-transform duration-800" :class="isHeaderVisible ? 'top-0' : '-top-24'">
        <nav class="container mx-auto px- py-1">
            <div class="flex items-center justify-between">
                <div class="flex items-end justify-center">
                    <!-- <img src="/logo/dexon_white.png" alt="IR-Dexon Logo" class="h-10"> -->
                    <img src="/logo/dexon_navy.png" alt="IR-Dexon Logo" class="h-10">
                    <div class="border-l-2 border-white/30 h-10 ml-2 flex items-end px-2">
                        <h2 class="text-white font-semibold">INVESTOR</h2>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-1">
                    <div class="flex items-center space-x-4 text-white">
                        <a href="" class="hover:text-blue-200 transition">Go to Corporate Site</a>
                        <select name="language" id="language" class="px-3 py-1 rounded-md border border-white/30 text-sm text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all cursor-pointer backdrop-blur-sm">
                            <option value="en">EN</option>
                            <option value="th">TH</option>
                        </select>
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <div class="relative" ref="overviewRef">
                            <button @click="toggleOverview" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                Overview
                            </button>
                            <div v-show="isOverviewOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isOverviewOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
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
                        </div>
                        <div class="relative" ref="financialsRef">
                            <button @click="toggleFinancials" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                Financials Info
                            </button>
                            <div v-show="isFinancialsOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isFinancialsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
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
                        </div>
                        <div class="relative" ref="stockInfoRef">
                            <button @click="toggleStockInfo" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                Stock Info
                            </button>
                            <div v-show="isStockInfoOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isStockInfoOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
                                <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                    Stock Information
                                </a>
                                <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                    Stock Performance
                                </a>
                            </div>
                        </div>
                        <div class="relative" ref="shareholderInfoRef">
                            <button @click="toggleShareholderInfo" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                Shareholder Info
                            </button>
                            <div v-show="isShareholderInfoOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isShareholderInfoOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
                                <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                    Shareholder Information
                                </a>
                                <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                    Shareholder Services
                                </a>
                            </div>
                        </div>
                        <div class="relative" ref="reportsAndPresentationsRef">
                            <button @click="toggleReportsAndPresentations" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                Reports and Presentations
                            </button>
                            <div v-show="isReportsAndPresentationsOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isReportsAndPresentationsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
                                <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                    Reports and Presentations
                                </a>
                                <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                    News and Events
                                </a>
                            </div>
                        </div>
                        <div class="relative" ref="newsAndEventsRef">
                            <button @click="toggleNewsAndEvents" class="text-white hover:text-blue-200 py-2 relative nav-link">
                                News and Events
                            </button>
                            <div v-show="isNewsAndEventsOpen" class="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50" :class="isNewsAndEventsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
                                <a href="#news" @click="closeNewsAndEvents" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                    News and Events
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
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
</style>
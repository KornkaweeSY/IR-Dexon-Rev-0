<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { locale, t, setLocale } = useLanguage()

const changeLanguage = (event: Event) => {
    const target = event.target as HTMLSelectElement
    setLocale(target.value as 'en' | 'th')
}

const isMobileMenuOpen: Ref<boolean> = ref(false)
const isMobileOverviewOpen: Ref<boolean> = ref(false)
const isMobileFinancialsOpen: Ref<boolean> = ref(false)
const isMobileStockInfoOpen: Ref<boolean> = ref(false)
const isMobileShareholderInfoOpen: Ref<boolean> = ref(false)
const isMobileReportsOpen: Ref<boolean> = ref(false)
const isMobileNewsOpen: Ref<boolean> = ref(false)

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

const isScrolled: Ref<boolean> = ref(false)
const scrollThreshold: Ref<number> = ref(1200)

const updateScrollThreshold = (): void => {
    if (import.meta.client) {
        scrollThreshold.value = window.innerWidth >= 1024 ? 1200 : 900
    }
}

const handleScroll = (): void => {
    const currentScrollY = window.scrollY
    
    // Check if scrolled past home section (approximately)
    if (currentScrollY > scrollThreshold.value) {
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

const toggleMobileMenu = (): void => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const toggleMobileOverview = (): void => {
    isMobileOverviewOpen.value = !isMobileOverviewOpen.value
}

const toggleMobileFinancials = (): void => {
    isMobileFinancialsOpen.value = !isMobileFinancialsOpen.value
}

const toggleMobileStockInfo = (): void => {
    isMobileStockInfoOpen.value = !isMobileStockInfoOpen.value
}

const toggleMobileShareholderInfo = (): void => {
    isMobileShareholderInfoOpen.value = !isMobileShareholderInfoOpen.value
}

const toggleMobileReports = (): void => {
    isMobileReportsOpen.value = !isMobileReportsOpen.value
}

const toggleMobileNews = (): void => {
    isMobileNewsOpen.value = !isMobileNewsOpen.value
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
    updateScrollThreshold()
    document.addEventListener('click', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateScrollThreshold)
})

onUnmounted((): void => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', updateScrollThreshold)
})
</script>

<template>
    <header class="fixed left-0 right-0 z-50 backdrop-blur-sm header-transition" :class="isScrolled ? 'bg-white/90 text-gray-700' : 'bg-white/5'">
        <nav class="container mx-auto px- py-1">
            <div class="hidden lg:flex items-center justify-between">
                <div class="flex items-end justify-center">
                    <div class="relative h-10 w-auto">
                        <a href="https://www.dexon-technology.com/" target="_blank">
                            <Transition name="logo-fade" mode="out-in">
                                <img v-if="!isScrolled" key="white" src="/logo/dexon_white.png" alt="IR-Dexon Logo" class="h-10">
                                <img v-else key="navy" src="/logo/dexon_navy.png" alt="IR-Dexon Logo" class="h-10">
                            </Transition>
                        </a>
                    </div>
                    <div class="border-l-2 h-10 ml-2 flex items-end px-2 transition-colors duration-300" :class="isScrolled ? 'border-gray-300' : 'border-white/30'">
                        <h2 class="font-semibold transition-colors duration-300" :class="isScrolled ? 'text-gray-700' : 'text-white'">INVESTOR</h2>
                    </div>
                </div>
                <div class="flex flex-col items-end gap-1">
                    <div class="flex items-center space-x-4">
                        <a href="https://www.dexon-technology.com/" target="_blank" class="transition-colors duration-300" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">{{ t('nav.gotoCorporateSite') }}</a>
                        <select v-model="locale" @change="changeLanguage" name="language" id="language" class="px-3 py-1 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer backdrop-blur-sm" :class="isScrolled ? 'border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-blue-500' : 'border-white/30 text-white bg-white/10 hover:bg-white/20 focus:ring-white/50'">
                            <option value="en" class="text-gray-800">{{ t('nav.en') }}</option>
                            <option value="th" class="text-gray-800">{{ t('nav.th') }}</option>
                        </select>
                    </div>
                    <div class="hidden md:flex space-x-8 items-center">
                        <div class="relative" ref="overviewRef">
                            <button @click="toggleOverview" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.overview') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isOverviewOpen" class="absolute left-0 mt-2 w-64 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#business" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.businessOverview') }}
                                    </a>
                                    <a href="#directors" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 dropdown-item">
                                        {{ t('nav.boardOfDirectors') }}
                                    </a>
                                    <a href="#governance" @click="closeOverview" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        {{ t('nav.corporateGovernance') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="financialsRef">
                            <button @click="toggleFinancials" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.financials') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isFinancialsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.financialPerformance') }}
                                    </a>
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 dropdown-item">
                                        {{ t('nav.financialStatements') }}
                                    </a>
                                    <a href="#financials" @click="closeFinancials" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        {{ t('nav.factSheets') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="stockInfoRef">
                            <button @click="toggleStockInfo" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.stock') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isStockInfoOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.stockInformation') }}
                                    </a>
                                    <a href="#stock" @click="closeStockInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        {{ t('nav.stockPerformance') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="shareholderInfoRef">
                            <button @click="toggleShareholderInfo" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.shareholder') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isShareholderInfoOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.shareholderInformation') }}
                                    </a>
                                    <a href="#shareholder" @click="closeShareholderInfo" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        {{ t('nav.shareholderServices') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="reportsAndPresentationsRef">
                            <button @click="toggleReportsAndPresentations" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.reports') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isReportsAndPresentationsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.reportsAndPresentations') }}
                                    </a>
                                    <a href="#reports" @click="closeReportsAndPresentations" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-b-lg dropdown-item">
                                        {{ t('nav.newsAndEvents') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                        <div class="relative" ref="newsAndEventsRef">
                            <button @click="toggleNewsAndEvents" class="py-2 relative nav-link transition-colors duration-300 font-medium" :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'">
                                {{ t('nav.news') }}
                            </button>
                            <Transition name="dropdown-fade">
                                <div v-if="isNewsAndEventsOpen" class="absolute left-0 mt-2 w-64 bg-white/90 rounded-lg shadow-xl z-50 overflow-hidden backdrop-blur-sm" :class="isScrolled ? 'bg-white' : 'bg-white/90'">
                                    <a href="#news" @click="closeNewsAndEvents" class="block px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-t-lg dropdown-item">
                                        {{ t('nav.newsAndEvents') }}
                                    </a>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div class="flex lg:hidden items-center justify-between px-4 py-1">
                <!-- Logo -->
                <div class="flex items-end justify-center">
                    <div class="relative h-8 w-auto">
                        <a href="https://www.dexon-technology.com/" target="_blank">
                            <Transition name="logo-fade" mode="out-in">
                                <img v-if="!isScrolled" key="white" src="/logo/dexon_white.png" alt="IR-Dexon Logo" class="h-8">
                                <img v-else key="navy" src="/logo/dexon_navy.png" alt="IR-Dexon Logo" class="h-8">
                            </Transition>
                        </a>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <select v-model="locale" @change="changeLanguage" name="language-mobile" class="px-2 py-1 rounded-md border text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer backdrop-blur-sm" :class="isScrolled ? 'border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-blue-500' : 'border-white/30 text-white bg-white/10 hover:bg-white/20 focus:ring-white/50'">
                        <option value="en" class="text-gray-800">{{ t('nav.en') }}</option>
                        <option value="th" class="text-gray-800">{{ t('nav.th') }}</option>
                    </select>
                    <!-- Hamburger Button -->
                    <button @click="toggleMobileMenu" class="p-2 rounded-md transition-colors duration-300" :class="isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Dropdown Menu -->
            <Transition name="mobile-menu">
                <div v-if="isMobileMenuOpen" class="lg:hidden absolute top-full left-0 right-0 shadow-xl backdrop-blur-md" :class="isScrolled ? 'bg-white/95' : 'bg-white/80'">
                    <div class="container mx-auto px-4 py-4 max-h-[80vh] overflow-y-auto">
                        <!-- Corporate Site -->
                        <div class="flex flex-col gap-2 pb-3 border-b border-gray-200">
                            <a href="https://www.dexon-technology.com/" target="_blank" class="text-gray-700 hover:text-blue-600 py-2 text-sm font-medium">
                                {{ t('nav.gotoCorporateSite') }}
                            </a>
                        </div>
                        <!-- Overview -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileOverview" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.overview') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileOverviewOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileOverviewOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#business" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.businessOverview') }}</a>
                                    <a href="#directors" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.boardOfDirectors') }}</a>
                                    <a href="#governance" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.corporateGovernance') }}</a>
                                </div>
                            </Transition>
                        </div>

                        <!-- Financials -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileFinancials" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.financials') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileFinancialsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileFinancialsOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#financials" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.financialPerformance') }}</a>
                                    <a href="#financials" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.financialStatements') }}</a>
                                    <a href="#financials" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.factSheets') }}</a>
                                </div>
                            </Transition>
                        </div>

                        <!-- Stock -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileStockInfo" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.stock') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileStockInfoOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileStockInfoOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#stock" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.stockInformation') }}</a>
                                    <a href="#stock" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.stockPerformance') }}</a>
                                </div>
                            </Transition>
                        </div>

                        <!-- Shareholder -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileShareholderInfo" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.shareholder') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileShareholderInfoOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileShareholderInfoOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#shareholder" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.shareholderInformation') }}</a>
                                    <a href="#shareholder" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.shareholderServices') }}</a>
                                </div>
                            </Transition>
                        </div>

                        <!-- Reports -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileReports" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.reports') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileReportsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileReportsOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#reports" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.reportsAndPresentations') }}</a>
                                    <a href="#reports" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.newsAndEvents') }}</a>
                                </div>
                            </Transition>
                        </div>

                        <!-- News -->
                        <div class="border-b border-gray-200">
                            <button @click="toggleMobileNews" class="w-full flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 font-medium">
                                <span>{{ t('nav.news') }}</span>
                                <svg class="w-5 h-5 transition-transform duration-300" :class="{ 'rotate-180': isMobileNewsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <Transition name="mobile-dropdown">
                                <div v-if="isMobileNewsOpen" class="pl-4 pb-3 space-y-2">
                                    <a href="#news" class="block py-2 text-gray-600 hover:text-blue-600 text-sm">{{ t('nav.newsAndEvents') }}</a>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
            </Transition>
        </nav>
    </header>
</template>

<style scoped>
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

/* Mobile Menu Animations */
.mobile-menu-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-menu-leave-active {
    transition: all 0.25s ease-in;
}

.mobile-menu-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.mobile-menu-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.mobile-menu-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Mobile Dropdown Animations */
.mobile-dropdown-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-dropdown-leave-active {
    transition: all 0.2s ease-in;
}

.mobile-dropdown-enter-from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}

.mobile-dropdown-enter-to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
}

.mobile-dropdown-leave-from {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
}

.mobile-dropdown-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
}
</style>
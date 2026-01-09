<script setup>
import Header from './header.vue'
import Footer from './footer.vue'
</script>

<template>
    <div>
        <Header />
        <main>
        <slot />
        </main>
        <Footer />
    </div>
</template>

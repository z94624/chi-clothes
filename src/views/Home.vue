<template>
    <div>
        <Header />

        <div class="homeContent">
            <About />
            <Product />
            <Contact />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Header } from '../layout/components/Header';
</script>

<style scoped lang="scss">
.homeContent {
    margin-top: 79px;
}
</style>

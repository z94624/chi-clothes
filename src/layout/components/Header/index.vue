<template>
    <n-page-header class="header flex justify-center p-3">
        <template #avatar>
            <YuanLogo width="64" height="63" />
        </template>
        <template #title>
            <div class="text-6xl font-bold">昱安服裝</div>
        </template>
    </n-page-header>
</template>

<script setup lang="ts">
import YuanLogo from './../../../assets/YuanLogo.vue';
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 50;
    background-color: #fff;
    box-shadow: 0px 5px 19.8px 0.2px rgba(0, 0, 0, 0.08);
}
</style>

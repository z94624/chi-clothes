<template>
    <div class="px-3 py-6 bg-[#f8f9fa]">
        <div class="ml-3">
            <span class="title">聯絡方式</span>
            <span class="titleDesc ml-3">Contact</span>
        </div>

        <div class="ml-3">
            <span>如欲了解產品，可到府或通訊軟體洽詢</span>
        </div>

        <div class="px-3 pt-6 flex flex-wrap">
            <div v-for="info in infos" :key="info.title" class="sm:flex sm:flex-wrap sm:gap-3 p-3 w-1/2">
                <n-icon :size="48" :component="info.icon" />
                <n-space vertical>
                    <div class="itemTitle">{{ info.title }}</div>
                    <div class="itemDesc">{{ info.description1 }}</div>
                    <div class="itemDesc break-words">{{ info.description2 }}</div>
                </n-space>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Component } from 'vue';
import { AccessTimeFilled, LocationOnOutlined, LocalPhoneOutlined, EmailOutlined } from '@vicons/material';

const infos: {
    icon: Component;
    title: string;
    description1: string;
    description2: string;
}[] = [
        {
            icon: AccessTimeFilled,
            title: '營業時間',
            description1: '平假日 7:30 - 22:00',
            description2: '(全年無休)',
        },
        {
            icon: LocationOnOutlined,
            title: '地址',
            description1: '高雄市鳳山區溪濱路 90 號',
            description2: '',
        },
        {
            icon: LocalPhoneOutlined,
            title: '電話',
            description1: '(07)792-4859',
            description2: '0925-138-059',
        },
        {
            icon: EmailOutlined,
            title: '通訊軟體',
            description1: 'LINE：0925-138-059',
            description2: 'MAIL：aas860814@yahoo.com.tw',
        },
    ];
</script>

<style scoped lang="scss"></style>
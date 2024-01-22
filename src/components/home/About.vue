<template>
    <div class="px-3 py-6">
        <div class="ml-3">
            <span class="title">關於我們</span>
            <span class="subTitle ml-3">ABOUT US</span>
        </div>

        <div class="ml-3">
            <n-breadcrumb>
                <n-breadcrumb-item :clickable="false">休閒服</n-breadcrumb-item>
                <n-breadcrumb-item :clickable="false">團體服</n-breadcrumb-item>
                <n-breadcrumb-item :clickable="false">工作服</n-breadcrumb-item>
                <n-breadcrumb-item :clickable="false">公司行號訂製服</n-breadcrumb-item>
                <n-breadcrumb-item :clickable="false">各式紡織產品</n-breadcrumb-item>
            </n-breadcrumb>
        </div>

        <div class="flex flex-wrap justify-evenly mt-6">
            <div v-for="(feature, fIdx) in features" :key="feature.title">
                <n-space align="center" vertical class="featureWrapper p-3">
                    <div class="icon flex justify-center items-center" :class="[`${fIdx % 2 ? 'iconEven' : 'iconOdd'}`]">
                        <n-icon-wrapper :size="108" :border-radius="54" :color="feature.color">
                            <n-icon size="55" color="#fff" :component="feature.icon" />
                        </n-icon-wrapper>
                    </div>
                    <div class="title">{{ feature.title }}</div>
                    <div class="desc">{{ feature.description1 }}</div>
                    <div class="desc">{{ feature.description2 }}</div>
                </n-space>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Component } from 'vue';
import { FactoryOutlined } from '@vicons/material';
import { Tshirt, CalendarCheckRegular } from '@vicons/fa';
import { Certificate24Filled } from '@vicons/fluent';

const features: {
    icon: Component;
    color?: string;
    title: string;
    description1: string;
    description2: string;
}[] = [
        {
            icon: FactoryOutlined,
            color: '#1c564a',
            title: '選擇多樣化',
            description1: '多家廠商',
            description2: '提供各式價位選擇',
        },
        {
            icon: Tshirt,
            color: '#6fb92c',
            title: '只屬於「您」',
            description1: '量身訂做',
            description2: '專屬您的衣服',
        },
        {
            icon: Certificate24Filled,
            color: '#1c564a',
            title: 'SGS 認證',
            description1: '第三方監督',
            description2: '服務品質保障',
        },
        {
            icon: CalendarCheckRegular,
            color: '#6fb92c',
            title: '全年無休',
            description1: '昱安給您',
            description2: '最有效率的服務',
        },
    ];
</script>

<style scoped lang="scss">
.featureWrapper {
    .icon {
        width: 120px;
        height: 120px;
        border-radius: 50%;

        &.iconOdd {
            border: 1px solid #1c564a;
        }

        &.iconEven {
            border: 1px solid #6fb92c;
        }
    }

    .title {
        font-size: 24px;
        font-weight: 900;
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
    }

    .desc {
        font-size: 16px;
        font-weight: 500;
        font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
        color: #454545;
    }
}
</style>
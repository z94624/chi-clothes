<template>
    <div class="py-6">
        <div class="ml-6">
            <span class="title">產品介紹</span>
            <span class="titleDesc ml-3">PRODUCTS</span>
        </div>

        <div v-for="product in products" :key="product.name">
            <div class="ml-6 mt-3">
                <span class="subTitle">{{ product.name }}</span>
                <span class="subTitleDesc ml-3">{{ product.desc }}</span>
            </div>
            <n-carousel :slides-per-view="4" autoplay draggable show-arrow class="mt-3">
                <n-card v-for="shirt in product.data" :key="shirt.id" content-class="productContent" :content-style="{
                    padding: 0,
                }" footer-class="productDesc" :footer-style="{
    padding: '20px',
    textAlign: 'center',
}">
                    <img class="carousel-img" :src="shirt.image">

                    <template #footer>
                        <span class="title">{{ shirt.name }}</span>
                    </template>
                </n-card>

                <template #arrow="{ prev, next }">
                    <n-space justify="center" class="mt-3">
                        <n-button size="large" tertiary circle @click="prev">
                            <template #icon>
                                <n-icon size="28" :component="NavigateBeforeFilled" />
                            </template>
                        </n-button>
                        <n-button size="large" tertiary circle @click="next">
                            <template #icon>
                                <n-icon size="28" :component="NavigateNextFilled" />
                            </template>
                        </n-button>
                    </n-space>
                </template>
            </n-carousel>
            <n-divider />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NavigateNextFilled, NavigateBeforeFilled } from '@vicons/material';

interface shirtSpec {
    id: number;
    image: string;
    name: string;
}

const fulcome: shirtSpec[] = [
    {
        id: 1,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '花紋 POLO 衫',
    },
    {
        id: 2,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '花紋 POLO 衫',
    },
    {
        id: 3,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '素面 POLO 衫',
    },
    {
        id: 4,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '素面 POLO 衫',
    },
    {
        id: 5,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '線條 POLO 衫',
    },
    {
        id: 6,
        image: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
        name: '長袖 POLO 衫',
    },
];

const products: {
    name: string,
    desc: string,
    data: shirtSpec[],
}[] = [
        {
            name: 'FULCOME',
            desc: '價位：中階',
            data: fulcome,
        },
        {
            name: 'SG',
            desc: '價位：平價',
            data: fulcome,
        },
    ];
</script>

<style scoped lang="scss">
.productContent {
    .carousel-img {
        width: 100%;
        object-fit: contain;
    }
}

.productDesc {
    .title {
        color: #111;
        font-size: 20px;
    }
}
</style>
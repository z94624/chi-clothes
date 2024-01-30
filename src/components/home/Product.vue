<template>
    <div class="py-6">
        <div class="ml-6">
            <span class="title">產品介紹</span>
            <span class="titleDesc ml-3">PRODUCTS</span>
        </div>

        <div v-for="(product, pIdx) in products" :key="product.name">
            <div class="ml-6 mt-3">
                <span class="subTitle">{{ product.name }}</span>
                <span class="subTitleDesc ml-3">{{ product.desc }}</span>
            </div>
            <n-carousel :slides-per-view="4" autoplay draggable show-arrow class="mt-3">
                <n-card v-for="shirt in product.data" :key="shirt.id" :content-style="{
                    padding: 0,
                    height: '210px',
                    flex: 'unset',
                }" footer-class="productDesc" :footer-style="{
    padding: '20px',
    textAlign: 'center',
}">
                    <n-image class="h-full" :img-props="{
                        class: ['h-full']
                    }" object-fit="contain" :src="getClothesImage(shirt.id)" />

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
            <n-divider v-if="pIdx !== products.length - 1" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NavigateNextFilled, NavigateBeforeFilled } from '@vicons/material';

import { getClothesImage } from '@/utils/image';

interface shirtSpec {
    id: string;
    name: string;
}

const fulcome: shirtSpec[] = [
    {
        id: 'fu_1',
        name: '短袖素面 POLO 衫',
    },
    {
        id: 'fu_2',
        name: '短袖線條 POLO 衫',
    },
    {
        id: 'fu_3',
        name: '短袖花紋 POLO 衫',
    },
    {
        id: 'fu_4',
        name: '長袖線條 POLO 衫',
    },
    {
        id: 'fu_5',
        name: '長袖花紋 POLO 衫',
    },
];

const sg: shirtSpec[] = [
    {
        id: 'sg_1',
        name: '短袖素面 POLO 衫',
    },
    {
        id: 'sg_2',
        name: '短袖素面 POLO 衫',
    },
    {
        id: 'sg_3',
        name: '短袖線條 POLO 衫',
    },
    {
        id: 'sg_4',
        name: '長袖素面 POLO 衫',
    },
    {
        id: 'sg_5',
        name: '長袖線條 POLO 衫',
    },
];

const products: {
    name: string,
    disc: string,
    desc: string,
    data: shirtSpec[],
}[] = [
        {
            name: 'FULCOME',
            disc: 'fu',
            desc: '價位：中階',
            data: fulcome,
        },
        {
            name: 'SG',
            disc: 'sg',
            desc: '價位：平價',
            data: sg,
        },
    ];
</script>

<style scoped lang="scss">
.productDesc {
    .title {
        color: #111;
        font-size: 20px;
    }
}
</style>
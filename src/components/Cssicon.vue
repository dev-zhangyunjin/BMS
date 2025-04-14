<template>
    <Icon :icon="name" />
</template>

<script setup name="icon">
/**
* @author 张云进
* @description 字体图标
*/
import { Icon } from "@iconify/vue";
const props = defineProps({
    name: {
        type: String,
        default: ''
    }
})
</script>

<style lang='scss' scoped></style>

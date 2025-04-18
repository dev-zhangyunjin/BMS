<template>
    <Icon :icon="name" class="icon" />
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

<style lang='scss' scoped>
.icon {
    font-size: 1.8rem;
}
</style>

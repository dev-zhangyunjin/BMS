<template>
  <router-view />
</template>

<script setup name="app">
/**
* @author 张云进
* @description 容器
*/
import useStore from "@/pinia";
onMounted(() => {
  useStore().setting.initTheme();
})
</script>

<style lang='scss' scoped></style>

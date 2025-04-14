<template>
    <el-scrollbar>

        <div class="tags-container">
            <div class="tags-item" v-for="i in 20" :class="i === activeKey ? 'active' : ''" @click="handleTo(i)">
                <span>首页{{ i }}</span>
                <Cssicon name="material-symbols:close-rounded" v-if="i !== 1" class="delete" />
            </div>
        </div>
    </el-scrollbar>

</template>

<script setup>
/**
* @author 张云进
* @description 
*/
const activeKey = ref(1)
const handleTo = (i) => {
    activeKey.value = i
}
</script>

<style lang='scss' scoped>
.tags-container {
    display: flex;
    padding: 6px 0;

    .tags-item {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        font-size: 0.9rem;
        color: rgba(160, 174, 192, 1);
        border: 1px solid #fff;
        padding: 4px;
        cursor: pointer;
        margin: 0 2px 0 0;
        border-radius: 2px;

        span {
            padding-right: 2px;
        }

        .delete:hover {
            // color: #fff;
        }
    }

    .active {
        color: #fff;
        background-color: rgba(63, 140, 255, 1);
        font-size: 0.95rem;
    }
}
</style>

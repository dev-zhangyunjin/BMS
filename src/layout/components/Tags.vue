<template>
    <el-scrollbar>
        <div class="tags-container">
            <div class="tags-item" v-for="i in 20" :class="i === activeKey ? 'active' : ''" @click="handleTo(i)">
                <span>首页{{ i }}</span>
                <Cssicon name="material-symbols:close-rounded" v-if="i !== 1" class="delete"
                    @click.stop="handleDelete" />
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
const handleDelete = () => {

}
</script>

<style lang='scss' scoped>
.tags-container {
    display: flex;
    margin-top: 6px;
    padding: 6px;
    // background-color: #FFF;

    .tags-item {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        font-size: 0.72rem;
        color: rgba(160, 174, 192, 1);
        border: 1px solid #eeeeee;
        padding: 4px 2px 4px 6px;
        background-color: #fff;
        cursor: pointer;
        margin: 0 2px 0 0;
        border-radius: 2px;

        span {
            padding-right: 4px;
        }

        .delete:hover {
            // padding-left: 6px;
            background-color: rgba(160, 174, 192, 1);
            border-radius: 50%;
            color: #fff;
        }
    }

    .active {
        color: #fff;
        background-color: rgba(63, 140, 255, 1);
        font-size: 0.72rem;

        &::before {
            content: '';
            width: 8px;
            height: 8px;
            background-color: #fff;
            border-radius: 50%;
            margin-right: 4px;
        }
    }


}
</style>

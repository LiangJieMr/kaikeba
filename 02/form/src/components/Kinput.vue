<template>
    <div>
        <!-- 自定义组件实现v-model必须实现:value,@input -->
        <!-- v-bind="$attrs"存储props之外的部分 -->
        <input v-bind="$attrs" :value="value" @input="onInput">
        <span>{{value}}</span>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: '1231'
        }
    },
    methods: {
        onInput(e) {
            //通知父组件数值变化
            this.$emit('input',e.target.value)
        }
    },
}
</script>
<style scoped>
    
</style>
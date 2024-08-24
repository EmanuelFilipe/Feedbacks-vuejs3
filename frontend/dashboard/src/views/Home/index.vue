<template>
    <div>
        <h1 class="font-black text-brand-main">Home</h1>
    </div>
</template>

<script>
/* eslint-disable */
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
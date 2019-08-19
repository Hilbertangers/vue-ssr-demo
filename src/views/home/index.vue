<template>
    <div class="home-page">home: {{item}}
        test watch
    </div>
</template>

<script>
export default {
    asyncData ({ store }) {
        return store.dispatch('fetchItem', '栗子')
    },
    title () {
        return '基金买卖网-全国首批独立基金销售机构，众禄基金旗下基金股票投资理财平台'
    },
    data () {
        return {
        }
    },
    computed: {
        item () {
            return this.$store.state.items['栗子']
        }
    },
    created () {
    }
};
</script>

<style lang="scss" scoped>
.home-page {
    color: pink;
}
</style>


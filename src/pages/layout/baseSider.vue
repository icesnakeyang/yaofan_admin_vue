<template>
    <Menu active-name="menuDashboard" theme="dark" width="auto" @on-select="onSelect">
        <MenuItem name="menuDashboard">
            <Icon type="ios-speedometer" size="24"/>
            <span>控制台</span>
        </MenuItem>
        <MenuItem name="menuPointExchange">
            <Icon type="md-cash" size="24"/>
            <span>积分兑换处理</span>
        </MenuItem>
        <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
        </MenuItem>
    </Menu>
</template>

<script>
    export default {
        name: "baseSider",
        methods: {
            onSelect(name) {
                if (name === 'menuPointExchange') {
                    this.$router.push({
                        name: 'pointApprove'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
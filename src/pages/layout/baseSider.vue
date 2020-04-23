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
        <MenuItem name="menuUsers">
            <Icon type="ios-settings"></Icon>
            <span>注册用户</span>
        </MenuItem>
        <MenuItem name="menuUserAction">
            <Icon type="ios-settings"></Icon>
            <span>用户行为</span>
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
                if(name==='menuUsers'){
                    this.$router.push({
                        name:'userList'
                    })
                }
                if(name==='menuUserAction'){
                    this.$router.push({
                        name:'userActionDashboard'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>

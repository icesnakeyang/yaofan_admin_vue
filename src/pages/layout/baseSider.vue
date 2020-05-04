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
        <Submenu name="memuUserAction">
            <template slot="title">
                <Icon type="ios-body" />
                用户行为
            </template>
            <MenuItem name="menuUserActionDashboard">
                <Icon type="md-stats" />
                <span>Dashboard</span>
            </MenuItem>
            <MenuItem name="menuUserActionList">
                <Icon type="ios-list-box" />
                <span>用户行为日志</span>
            </MenuItem>
        </Submenu>
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
                if(name==='menuUserActionDashboard'){
                    this.$router.push({
                        name:'userActionDashboard'
                    })
                }
                if(name==='menuUserActionList'){
                    this.$router.push({
                        name:'userActionList'
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>

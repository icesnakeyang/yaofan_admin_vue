<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div>
            <MenuItem name="menuTitle">
                <span class="gogo_title">次第乞食——管理后台</span>
            </MenuItem>
        </div>
        <div style="float: right">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                Item 1
            </MenuItem>
        </div>
    </Menu>
</template>

<script>
    export default {
        name: "dashboardHeader"
    }
</script>

<style scoped>

</style>
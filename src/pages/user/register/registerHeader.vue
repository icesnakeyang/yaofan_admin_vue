<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .layout-footer-center {
        text-align: center;
    }
</style>
<template>
    <Menu mode="horizontal" theme="dark" active-name="1">
        <div>
            <MenuItem name="menuTitle">
                <span class="gogo_title">次第乞食——管理后台</span>
            </MenuItem>
        </div>
        <div class="layout-nav">
            <MenuItem name="1">
                <Icon type="ios-paper"></Icon>
                Item 1
            </MenuItem>
        </div>
    </Menu>
</template>
<script>
    export default {}
</script>
<style>
    .gogo_title {
    @import font-size: 24 px;
    }
</style>

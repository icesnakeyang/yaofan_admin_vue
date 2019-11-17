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
    <Layout class="layout">
        <Header>
            <router-view name="header"></router-view>
        </Header>
        <Content class="content">
            <router-view name="content"></router-view>
        </Content>
        <Footer>
            <router-view name="footer"></router-view>
        </Footer>
    </Layout>
</template>

<script>
    export default {
        name: "guestLayout"
    }
</script>

<style scoped>
    @import "../../assets/gogoStyle.css";

    .layout {
        padding: 0px;
        margin: 0px;
        height: 100%;
    }

    .content {
        padding: 10px;
        height: 100%;
    }
</style>
<style scoped>
    .layout {
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all .3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout style="height: 100%">
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <router-view name="header"></router-view>
                </Header>
                <Layout>
                    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" style="margin-top: 0">
                        <router-view name="sider"></router-view>
                    </Sider>
                    <Layout>
                        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                            <router-view name="content"></router-view>
                        </Content>
                        <Footer>
                            <router-view name="footer"></router-view>
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>

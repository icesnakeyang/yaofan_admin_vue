<template>
    <div>
        <div class="layout">
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                    <router-view name="sider"></router-view>
                </Sider>
                <!--<router-view name="header"></router-view>-->
                <router-view name="header"></router-view>
                <content class="gogo_content">
                    <router-view name="content"></router-view>
                </content>
                <!--<router-view name="footer"></router-view>-->
            </Layout>
        </div>
    </div>
</template>

<script>
    export default {
        name: "baseLayout"
    }
</script>

<style scoped>
    @import "../../assets/gogoStyle.css";
</style>
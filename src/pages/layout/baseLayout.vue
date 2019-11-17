<template>
    <div>
        <div class="layout">
            <Layout>
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
<template>
    <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                  size="24"></Icon>
        </Header>
    </Layout>
</template>

<script>
    export default {
        name: "baseHeader"
    }
</script>

<style scoped>

</style>
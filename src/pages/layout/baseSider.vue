<template>
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
            <Icon type="ios-speedometer" />
            <span>控制台</span>
        </MenuItem>
        <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
        </MenuItem>
        <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
        </MenuItem>
    </Menu>
</template>

<script>
    export default {
        name: "baseSider"
    }
</script>

<style scoped>

</style>
<template>
    <Card style="margin: 20px;">
        <p>时间：{{createTime}}</p>
        <p>创建人：{{taskLog.createUserName}}</p>
        <Divider/>
        <div v-html="taskLog.content"></div>
    </Card>
</template>

<script>
    import moment from "moment";

    export default {
        name: "taskLogRow",
        props:{
            taskLog:{}
        },
        computed:{
            createTime(){
                return moment(this.taskLog.createTime).format('YYYY-MM-DD HH:mm')
            }
        },
        mounted() {
            console.log(this.taskLog)
        }
    }
</script>

<style scoped>

</style>

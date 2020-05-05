<template>
    <div>
        <Card style="margin: 20px;">
            <p slot="title">
                任务详情
            </p>
            <p>标题：{{task.title}}</p>
            <p>创建时间：{{taskCreateTime}}</p>
            <p>创建人：{{task.createUserName}}</p>
            <p>乙方：{{task.partyBName}}</p>
            <p>任务积分：{{task.point}}</p>
            <p>团队：{{task.teamName}}</p>
            <p>当前任务状态：{{task.status}}</p>
            <Divider/>
            <p>任务内容</p>
            <div v-html="task.detail"></div>
        </Card>

        <Card style="margin: 20px">
            <p slot="title">
                任务日志
            </p>
            <div v-for="(item, index) in taskLogList" :key="index">
                <TaskLogRow :taskLog="item"></TaskLogRow>
            </div>
        </Card>
    </div>
</template>

<script>
    import {apiGetTask} from "@/api/api";
    import moment from "moment";
    import TaskLogRow from './taskLogRow'

    export default {
        name: "taskPage",
        components: {
            TaskLogRow
        },
        data() {
            return {
                task: {},
                taskLogList: []
            }
        },
        computed: {
            taskCreateTime() {
                return moment(this.task.createTime).format('YYYY-MM-DD HH:mm')
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    taskId: this.$store.state.task_id
                }
                apiGetTask(params).then((response) => {
                    console.log(response)
                    this.task = response.data.data.task
                    this.taskLogList = response.data.data.taskLogs
                }).catch((error) => {
                    console.log(error)
                })
            }
        },
        mounted() {
            if (this.$route.params.taskId) {
                this.$store.dispatch('saveTaskId', this.$route.params.taskId)
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

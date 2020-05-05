<template>
    <div v-if="action">
        <Card>
            <p slot="title">用户行为日志</p>
            <p>用户：{{action.userName}}</p>
            <p>用户：{{actionCreateTime}}</p>
            <p>行为：{{action.action}}</p>
            <p>结果：{{action.result}}</p>
            <p>备注：{{action.memo}}</p>
            <Divider/>
            <Button type="primary" @click="onGoTask">查看任务</Button>
        </Card>
    </div>
</template>

<script>
    import {apiGetUserAction} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "actionDetail",
        data() {
            return {
                actionId: null,
                action: null
            }
        },
        computed: {
            actionCreateTime() {
                return moment(this.action.createTime).format('YYYY-MM-DD HH:mm')
            }
        },
        methods: {
            loadAllData() {
                console.log(this.$store.state)
                let params = {
                    actionId: this.$store.state.action_id
                }
                apiGetUserAction(params).then((response) => {
                    console.log(response)
                    this.action = response.data.data.action
                }).catch((error) => {
                    console.log(error)
                })

            },
            onGoTask() {
                let s1 = this.action.memo.indexOf('taskId:')
                let taskId = this.action.memo.substring(s1 + 7, s1 + 43)
                this.$router.push({
                    name: 'taskPage',
                    params: {
                        taskId
                    }
                })

            }
        },
        mounted() {
            if (this.$route.params.actionId) {
                this.$store.dispatch('saveActionId', this.$route.params.actionId)
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

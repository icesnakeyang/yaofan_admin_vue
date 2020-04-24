<template>
    <div>
        <div>
            <Table :columns="cols" :data="userActionList"></Table>
        </div>
    </div>
</template>

<script>
    import { apiTotalUserActionType} from "../../../api/api";

    export default {
        name: "userActionDashboard",
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                userActionList: [],
                cols: [
                    {
                        title: '行为',
                        key: 'action'
                    }
                ],
                totalUserAction: 0,
                total_WX_LOGIN: 0,
                total_CREATE_TASK: 0
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
                // apiListUserAction(params).then((response) => {
                //     console.log(response)
                //     // this.userActionList = response.data.data.userActLogs
                //     // this.totalUserAction = response.data.data.totalUserAction
                // })

                apiTotalUserActionType(params).then((response) => {
                    console.log(response)
                    this.total_WX_LOGIN = response.data.data.total_WX_LOGIN
                    this.total_CREATE_TASK = response.data.data.total_CREATE_TASK
                    this.userActionList = response.data.data.userActLogs
                    console.log(this.userActionList)
                })
            },
            onPageChange(e) {
                console.log(e)
                this.pageIndex = e
                this.loadAllData()
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

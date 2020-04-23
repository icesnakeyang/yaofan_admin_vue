<template>
    <div>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="8">
                微信登录：
                {{total_WX_LOGIN}}
            </Col>
            <Col :xs="20" :sm="16" :md="12" :lg="8">
                创建任务：
                {{total_CREATE_TASK}}
            </Col>
            <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        </Row>
        <Table :columns="cols" :data="userActionList"></Table>
        <Page :total="totalUserAction" @on-change="onPageChange" />
    </div>
</template>

<script>
    import {apiListUserAction, apiTotalUserActionType} from "../../../api/api";

    export default {
        name: "userActionDashboard",
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                userActionList: [],
                cols: [
                    {
                        title: 'ids',
                        key: 'ids'
                    },
                    {
                        title: '行为',
                        key: 'action'
                    },
                    {
                        title: '备注',
                        key: 'memo'
                    }
                ],
                totalUserAction: 0,
                total_WX_LOGIN: 0,
            total_CREATE_TASK:0
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
                apiListUserAction(params).then((response) => {
                    console.log(response)
                    this.userActionList = response.data.data.userActLogs
                    this.totalUserAction = response.data.data.totalUserAction
                })
                console.log(this.userActionList)

                apiTotalUserActionType(params).then((response) =>{
                    console.log(response)
                    this.total_WX_LOGIN = response.data.data.total_WX_LOGIN
                    this.total_CREATE_TASK = response.data.data.total_CREATE_TASK
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

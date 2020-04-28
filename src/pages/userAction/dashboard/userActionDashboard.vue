<template>
    <div>
        <Row>
            <Col :xs="2" :sm="4" :md="4" :lg="4">
                <Card class="box_1">
                    <p slot="title">登录次数</p>
                    {{total_WX_LOGIN}}
                </Card>
            </Col>
            <Col :xs="20" :sm="16" :md="4" :lg="4">
                <Card class="box_2">
                    <p slot="title">创建任务</p>
                    {{total_CREATE_TASK}}
                </Card>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="4">
                <Card class="box_3">
                    <p slot="title">今日任务</p>
                    {{total_CREATE_TASK_today}}
                </Card>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="4">
                <Card class="box_4">
                    <p slot="title">今日登录</p>
                    {{total_WX_LOGIN_today}}
                </Card>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="4">
                <Card class="box_4">
                    <p slot="title">昨日任务</p>
                    {{total_CREATE_TASK_lastday}}
                </Card>
            </Col><Col :xs="2" :sm="4" :md="4" :lg="4">
                <Card class="box_4">
                    <p slot="title">昨日登录</p>
                    {{total_WX_LOGIN_lastday}}
                </Card>
            </Col>
        </Row>
        <div>
            <Card>
                <p slot="title">今日用户行为</p>
                <Table :columns="cols" :data="userActionList"></Table>
                <Page :total="totalUserAction" @on-change="onPageChange"></Page>
            </Card>
        </div>
    </div>
</template>

<script>
    import {apiListUserAction, apiTotalUserActionType} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "userActionDashboard",
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                userActionList: [],
                cols: [
                    {
                        title: '#',
                        type: 'index'
                    },
                    {
                        title: '行为',
                        key: 'action'
                    },
                    {
                        title: '时间',
                        render: (h, params) => {
                            return h('div', [
                                h('span', moment(params.row.createTime).format('YYYY-MM-DD HH:mm'))
                            ]);
                        }
                    },
                    {
                        title: '用户',
                        key: 'userName'
                    }
                ],
                totalUserAction: 0,
                total_WX_LOGIN: 0,
                total_CREATE_TASK: 0,
                total_CREATE_TASK_today: 0,
                total_WX_LOGIN_today: 0,
                total_CREATE_TASK_lastday: 0,
                total_WX_LOGIN_lastday: 0
            }
        },
        methods: {
            loadAllData() {
                let params = {}
                apiTotalUserActionType(params).then((response) => {
                    this.total_WX_LOGIN = response.data.data.total_WX_LOGIN
                    this.total_CREATE_TASK = response.data.data.total_CREATE_TASK
                    this.total_CREATE_TASK_today = response.data.data.total_CREATE_TASK_today
                    this.total_WX_LOGIN_today = response.data.data.total_WX_LOGIN_today
                    this.total_CREATE_TASK_lastday = response.data.data.total_CREATE_TASK_lastday
                    this.total_WX_LOGIN_lastday = response.data.data.total_WX_LOGIN_lastday
                })

                params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    startTime: new Date()
                }

                apiListUserAction(params).then((response) => {
                    this.userActionList = response.data.data.userActLogs
                    this.totalUserAction = response.data.data.totalUserAction

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
    .box_1 {
        background: #82b3ee;
        padding: 20px;
        margin: 20px;
    }

    .box_2 {
        background: #b3eed3;
        padding: 20px;
        margin: 20px;
    }

    .box_3 {
        background: #eee7c3;
        padding: 20px;
        margin: 20px;
    }

    .box_4 {
        background: #ee96a0;
        padding: 20px;
        margin: 20px;
    }
</style>

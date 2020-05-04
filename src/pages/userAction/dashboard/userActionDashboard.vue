<template>
    <div>
        <Row>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_1">
                    <p slot="title">登录次数</p>
                    {{total_WX_LOGIN}}
                </div>
            </Col>
            <Col :xs="20" :sm="16" :md="4" :lg="1">
                <div class="box_2">
                    <p slot="title">创建任务</p>
                    {{total_CREATE_TASK}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_3">
                    <p slot="title">今日任务</p>
                    {{total_CREATE_TASK_today}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_4">
                    <p slot="title">今日登录</p>
                    {{total_WX_LOGIN_today}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_5">
                    <p slot="title">昨日任务</p>
                    {{total_CREATE_TASK_lastday}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_6">
                    <p slot="title">昨日登录</p>
                    {{total_WX_LOGIN_lastday}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_7">
                    <p slot="title">本周登录</p>
                    {{total_WX_LOGIN_thisweek}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_8">
                    <p slot="title">本周任务</p>
                    {{total_CREATE_TASK_thisweek}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_9">
                    <p slot="title">本月登录</p>
                    {{total_WX_LOGIN_thismonth}}
                </div>
            </Col>
            <Col :xs="2" :sm="4" :md="4" :lg="1">
                <div class="box_10">
                    <p slot="title">本月任务</p>
                    {{total_CREATE_TASK_thismonth}}
                </div>
            </Col>
        </Row>
        <div>
            <Card>
                <p slot="title">今日用户行为</p>
                <Card style="margin: 20px">
                    <Dropdown @on-click="onActType">
                        <a href="javascript:void(0)">
                            {{selectActType}}
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list" >
                            <DropdownItem name="1">微信登录</DropdownItem>
                            <DropdownItem name="2">创建任务</DropdownItem>
                            <DropdownItem name="4">创建日志</DropdownItem>
                            <DropdownItem divided name="3">全部</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown style="margin-left: 20px">
                        <Button type="primary">
                            下拉菜单
                            <Icon type="ios-arrow-down"></Icon>
                        </Button>
                        <DropdownMenu slot="list">
                            <DropdownItem>驴打滚</DropdownItem>
                            <DropdownItem>炸酱面</DropdownItem>
                            <DropdownItem disabled>豆汁儿</DropdownItem>
                            <DropdownItem>冰糖葫芦</DropdownItem>
                            <DropdownItem divided>北京烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Card>
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
                total_WX_LOGIN_lastday: 0,
                total_WX_LOGIN_thisweek: 0,
                total_CREATE_TASK_thisweek: 0,
                total_WX_LOGIN_thismonth:0,
                total_CREATE_TASK_thismonth:0,
                monthDays:[],
                selectActType:'选择用户行为',
                action:null
            }
        },
        methods: {
            loadAllData() {
                let params = {}
                apiTotalUserActionType(params).then((response) => {
                    console.log(response)
                    this.total_WX_LOGIN = response.data.data.total_WX_LOGIN
                    this.total_CREATE_TASK = response.data.data.total_CREATE_TASK
                    this.total_CREATE_TASK_today = response.data.data.total_CREATE_TASK_today
                    this.total_WX_LOGIN_today = response.data.data.total_WX_LOGIN_today
                    this.total_CREATE_TASK_lastday = response.data.data.total_CREATE_TASK_lastday
                    this.total_WX_LOGIN_lastday = response.data.data.total_WX_LOGIN_lastday
                    this.total_WX_LOGIN_thisweek = response.data.data.total_WX_LOGIN_thisweek
                    this.total_CREATE_TASK_thisweek = response.data.data.total_CREATE_TASK_thisweek
                    this.total_WX_LOGIN_thismonth = response.data.data.total_WX_LOGIN_thismonth
                    this.total_CREATE_TASK_thismonth = response.data.data.total_CREATE_TASK_thismonth
                    this.monthDays=response.data.data.monthDays
                })

                params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    startTime: new Date(),
                    action:this.action
                }

                apiListUserAction(params).then((response) => {
                    console.log(response)
                    this.userActionList = response.data.data.userActLogs
                    this.totalUserAction = response.data.data.totalUserAction
                })


            },
            onPageChange(e) {
                console.log(e)
                this.pageIndex = e
                this.loadAllData()
            },

            onActType(item){
                if(item==='1'){
                    this.selectActType='微信登录'
                    this.action='WX_LOGIN'
                }else{
                    if(item==='2'){
                        this.selectActType='创建任务'
                        this.action='CREATE_TASK'
                    }else{
                        if(item==='3'){
                            this.selectActType='选择用户行为'
                            this.action=null
                        }else{
                            if(item==='4'){
                                this.selectActType='创建日志'
                                this.action='CREATE_TASK_LOG'
                            }
                        }
                    }
                }
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
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_2 {
        background: #b3eed3;
        padding: 4px;
        margin: 4px;
        text-align: center;

    }

    .box_3 {
        background: #eee7c3;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_4 {
        background: #ee96a0;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_5 {
        background: #ee8cc6;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_6 {
        background: #eec2ee;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_7 {
        background: #cac3ee;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_8 {
        background: #adeeda;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_9 {
        background: #e1eeb8;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }

    .box_10 {
        background: #aba2ee;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }
    .box_4 {
        background: #ee96a0;
        padding: 4px;
        margin: 4px;
        text-align: center;
    }
</style>

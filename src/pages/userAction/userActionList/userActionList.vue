<template>
    <div>
        <Card style="margin: 20px;">
            <Row>
                <Col span="12">
                    <span>开始日期：</span>
                    <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px" @on-change="onDate1"></DatePicker>
                </Col>
                <Col span="12">
                    <span>截止日期：</span>
                    <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px" @on-change="onDate2"></DatePicker>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col span="12">
                    <span>用户行为：</span>
                    <Select v-model="action" style="width:200px"  @on-change="onSelectAction">
                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </Col>
            </Row>
            <Divider/>
            <Button type="primary" @click="onQuery">查询</Button>
        </Card>
        <Card style="margin: 20px">
            <Table border :columns="cols" :data="actionList"></Table>
            <div style="margin: 20px">
                <Page :total="totalAction" @on-change="onPage"/>
            </div>
        </Card>
    </div>
</template>

<script>
    import {apiListUserAction} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "userActionList",
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                actionList: [],
                totalAction: 0,
                startTime:null,
                endTime:null,
                cols: [
                    {
                        title: 'ids',
                        key: 'ids'
                    },
                    {
                        title: '用户',
                        key: 'userName',
                        render:(h,params)=>{
                            return h('div',[
                                h('Button',{
                                    props:{
                                        type:'text',
                                        size:'small'
                                    },
                                    on:{
                                        click:()=>{
                                            console.log(params.row.userId)
                                            this.$router.push({
                                                name:'userDataAction',
                                                params:{
                                                    userId:params.row.userId
                                                }
                                            })
                                        }
                                    }
                                }, params.row.userName)
                            ])
                        }
                    },
                    {
                        title: '行为',
                        key: 'action'
                    },
                    {
                        title: '时间',
                        key: 'createTime',
                        render: (h, params) => {
                            return h('div', [
                                h('span', moment(params.row.createTime).format('YYYY-MM-DD HH:mm'))
                            ]);
                        }
                    },
                    {
                        title: '状态',
                        key: 'result'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.row.uuid)
                                            this.$router.push({
                                                name:'actionDetail',
                                                params:{
                                                    actionId:params.row.uuid
                                                }
                                            })
                                        }
                                    }
                                }, '详情')
                            ]);
                        }
                    }
                ],
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                console.log(picker)
                                console.log(this.startTime)
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                console.log(picker)
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                console.log(picker)
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                action:null,
                cityList: [
                    {
                        value: 'LOGIN',
                        label: 'LOGIN'
                    },
                    {
                        value: 'WX_LOGIN',
                        label: 'WX_LOGIN'
                    },
                    {
                        value: 'CREATE_TASK',
                        label: 'CREATE_TASK'
                    },
                    {
                        value: 'GRAB',
                        label: 'GRAB'
                    },
                    {
                        value: 'CREATE_TASK_LOG',
                        label: 'CREATE_TASK_LOG'
                    },
                    {
                        value: 'CREATE_COMPLETE',
                        label: 'CREATE_COMPLETE'
                    }
                ]
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    startTime:this.startTime,
                    endTime:this.endTime,
                    action:this.action
                }
                apiListUserAction(params).then((response) => {
                    console.log(response)
                    this.actionList = response.data.data.userActLogs
                    this.totalAction = response.data.data.totalUserAction
                }).catch((error) => {
                    console.log(error)
                })
            },
            onPage(e) {
                console.log(e)
                this.pageIndex = e
                this.loadAllData()
            },
            onDate1(e){
                console.log(e)
                this.startTime=e
            },
            onDate2(e){
              console.log(e)
              this.endTime=e
            },
            onQuery(){
                this.pageIndex=1
                this.loadAllData()
            },
            onSelectAction(){
                console.log(this.action)
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

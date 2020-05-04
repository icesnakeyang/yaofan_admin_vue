<template>
    <div>
        <Table :columns="cols1" :data="actionList"/>
        <div style="margin: 20px">
            <Page :total="totalAction" @on-change="onPage"/>
        </div>
    </div>
</template>

<script>
    import {apiListUserAction} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "userDataAction",
        data() {
            return {
                pageIndex: 1,
                pageSize: 10,
                actionList: [],
                totalAction: 0,
                cols1: [
                    {
                        title: 'ids',
                        key: 'ids'
                    },
                    {
                        title: '用户',
                        key: 'userName'
                    },
                    {
                        title: '时间',
                        render: (h, params) => {
                            return h('span', moment(params.row.createTime).format('YYYY-MM-DD HH:mm'))
                        }
                    },
                    {
                        title: '行为',
                        key: 'action'
                    },
                    {
                        title: '状态',
                        key: 'result'
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params.row.uuid)
                                            this.$router.push({
                                                name: 'actionDetail',
                                                params: {
                                                    actionId: params.row.uuid
                                                }
                                            })
                                        }
                                    }
                                }, '详情')
                            ])
                        }
                    }
                ]
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    startTime: this.startTime,
                    endTime: this.endTime,
                    userId: this.$store.state.user_id
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
            }
        },
        mounted() {
            if(this.$route.params.userId){
                this.$store.dispatch('saveUserId',this.$route.params.userId)
            }
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

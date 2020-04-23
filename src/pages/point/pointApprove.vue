<template>
    <div>
        <Table border :columns="columsHeader" :data="dataRow">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">审核</Button>
            </template>
        </Table>
        <Page :total="100" show-total />
        <Modal
                title="Title"
                v-model="modal7"
                :closable="false">
            <p>用户编号：{{userId}}</p>
            <p>用户：{{userName}}</p>
            <p>电话：{{userPhone}}</p>
            <p>申请时间：{{applyTime}}</p>
            <p>兑换积分：{{pointOut}}</p>
            <p>申请说明：{{remark}}</p>
        </Modal>
    </div>
</template>

<script>
    import {apiListUnProcessWithdraw} from "../../api/api";
    import moment from 'moment'

    export default {
        name: "pointApprove",
        data() {
            return {
                modal7: false,
                userId: 'userid',
                userPhone: 'user phone',
                userName: 'snake',
                applyTime: '2019-2-2',
                pointOut: '2400',
                remark: '我要吃饭',
                columsHeader: [
                    {
                        title: '申请时间',
                        key: 'create_time',
                        render: (h, params) => {
                            return h('div',
                                moment(params.row.create_time).format('YYYY-MM-DD HH:mm')
                            )
                        }
                    },
                    {
                        title: '用户',
                        key: 'create_user_name'
                    },
                    {
                        title: '电话',
                        key: 'create_user_phone'
                    },
                    {
                        title: '兑换积分',
                        key: 'point_out'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                dataRow: []
            }
        },
        methods: {
            loadAllData() {
                apiListUnProcessWithdraw({}).then((response) => {
                    window.console.log(response)
                    if (response.data.code === 0) {
                        this.dataRow = response.data.data.pointWithdrawApplyList
                    }
                })
            },
            show(index) {
                window.console.log(index)

                this.modal7 = true
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

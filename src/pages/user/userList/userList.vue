<template>
    <div>
        <Table border :columns="columsHeader" :data="userList">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.userId)">详情</Button>
            </template>
        </Table>
        <div style="padding: 10px">
            <Page :total="totalRegisterUser" show-total @on-change="onChangePage"/>
        </div>

    </div>
</template>

<script>
    import {apiListRegisterUser} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "userList",
        data() {
            return {
                userList: [],
                pageIndex: 1,
                pageSize: 10,
                columsHeader: [
                    {
                        title: '用户Token',
                        key: 'token'
                    },
                    {
                        title: '注册时间',
                        key: 'createTime',
                        render: (h, params) => {
                            return h('div',
                                moment(params.row.createTime).format('YYYY-MM-DD HH:mm')
                            )
                        }
                    },
                    {
                        title: '用户',
                        key: 'name'
                    },
                    {
                        title: '电话',
                        key: 'phone'
                    },
                    {
                        title: '城市',
                        key: 'city'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                totalRegisterUser: 0
            }
        },
        methods: {
            loadAllData() {
                let params = {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize
                }
                apiListRegisterUser(params).then((response) => {
                    this.userList = response.data.data.userInfos
                    this.totalRegisterUser = response.data.data.totalRegisterUser
                    console.log(this.userList)
                })
            },
            onChangePage(e) {
                console.log(e)
                this.pageIndex = e
                this.loadAllData()
            },
            show(userId) {
                console.log(userId)
                this.$router.push({
                    name:'userDetail',
                    params:{
                        userId
                    }
                })
            }
        },
        mounted() {
            this.loadAllData()
        }
    }
</script>

<style scoped>

</style>

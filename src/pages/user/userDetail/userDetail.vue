<template>
    <div>
        <Card>
            <p slot="title">用户信息</p>
            <p>姓名：{{userInfo.name}}</p>
            <p>注册时间：{{createTime}}</p>
            <p>当前状态：{{userInfo.status}}</p>
            <p>电话：{{userInfo.phone}}</p>
            <p>身份证号码：{{userInfo.idCard}}</p>
            <p>微信OpenId：{{userInfo.openId}}</p>
            <p>微信昵称：{{userInfo.nickName}}</p>
            <p>微信城市：{{userInfo.city}}</p>
            <p>微信省份：{{userInfo.province}}</p>
            <p>微信国家：{{userInfo.country}}</p>
        </Card>
    </div>
</template>

<script>
    import {apiGetUser} from "../../../api/api";
    import moment from "moment";

    export default {
        name: "userDetail",
        data(){
            return{
                userInfo:{}
            }
        },
        computed:{
            createTime(){
                return moment(this.userInfo.createTime).format('YYYY-MM-DD HH:mm')
            }
        },
        methods:{
            loadAllData(){
                let params={
                    userId:this.$route.params.userId
                }
                console.log(this.$route.params)
                console.log(params)
                apiGetUser(params).then((response)=>{
                    console.log(response)
                    this.userInfo=response.data.data.userInfo
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

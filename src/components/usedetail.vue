<template>
  <div class="userdetail">
      <div class="head">
          <i class="iconfont icon-shouye" @click="toMain"></i>
      </div>
      <div class="content">
          <div class="top">

          </div>
          <div class="bottom">
              <group>
                  <cell :title="a" is-link></cell>
                  <cell :title="b" is-link></cell>
                  <cell :title="c" is-link></cell>
                  <cell :title="d" is-link></cell>
                  <cell :title="e" is-link></cell>
              </group>
          </div>
      </div>
      <button class="bnt" @click="logOut">注销</button>
  </div>
</template>
<script>
import {Cell,Group} from 'vux'
import store from './../components/vuex/store'
import {mapStore} from 'vuex'
export default {
    data(){
        return{
            a:'我的消息',
            b:'账户余额',
            c:'邀请好友',
            d:'设置',
            e:'充值'
        }
    },
    components:{
        Cell,
        Group
    },
    methods:{
        toMain(){
            this.$router.push('/');
        },
        logOut(){
            sessionStorage.removeItem('account');
            sessionStorage.removeItem('password');
            this.$store.state.user.account = '';
            this.$store.state.user.password = '';
            this.$store.state.user.readbooks = new Set([]);
            this.$router.push('/user/login');
        }
    },
    store
}
</script>
<style lang="scss">
.userdetail{
    width: 100%;
    text-align: center;
    .bnt{
        width: 200px;
        height: 50px;
        margin-top: 40px;
        background: #35495e;
        border: 1px solid #35495e;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
    }
    .head{
        width: 100%;
        height: 60px;
        background: #35495e;
        .iconfont{
            color: #fff;
            font-size: 25px;
            line-height: 60px;
            margin-left: 90%;
        }
    }
    .content{
        text-align: left;
    }
}
</style>

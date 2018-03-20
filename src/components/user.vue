<template>
  <div class="mylogin">
      <div class="head">
        <i class="iconfont icon-fanhui back" @click="toMain"></i>
        <span>登陆</span>
      </div>
      <div class="title">
          <h2>will阅读</h2>
      </div>
      <div class="login">
          <div class="account">
              <i class="iconfont icon-yonghu"></i>
              <input type="text" placeholder="手机号/用户名" v-model="account">
          </div>
          <div class="password">
              <i class="iconfont icon-mima"></i>
              <input type="password" placeholder="请输入密码" v-model="password">
          </div>
      </div>
      <button class="bnt" @click="bntClick">登 陆</button>
  </div>
</template>
<script>
import store from './../components/vuex/store'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            account:'',
            password:''
        }
    },
    methods:{
        toMain(){
            this.$router.push('/');
        },
        bntClick(){
            if(this.account && this.password){
                sessionStorage.setItem('account',this.account);
                sessionStorage.setItem('password',this.password);
                this.$router.push({path:'/user/detail'});
                this.$store.state.user.account = this.account;
                this.$store.state.user.password = this.password;
            }else{
                return;
            }
            
        }
    },
    store
}
</script>
<style lang="scss">
.mylogin{
    width: 100%;
    text-align: center;
    .iconfont{
        color: #fff;
        font-size: 25px;
    }
    .bnt{
        background: #35495e;
        border: 1px solid #35495e;
        border-radius: 10px;
        color: #fff;
        width: 250px;
        height: 50px;
        margin: 10px auto;
    }
    .head{
        width: 100%;
        height: 60px;
        display: flex;
        line-height: 60px;
        text-align: center;
        background: #35495e;
        .back{
            margin-left: 20px;
        }
        span{
            display: inline-block;
            color: #fff;
            font-size: 25px;
            margin-left: 20px;
        }
    }
    .title{
        width: 100%;
        margin: 10px auto;
        text-align: center;
        h2{
            font-size: 30px;
        }
    }
    .login{
        width: 250px;;
        margin: 50px auto;
        text-align: center;
        .iconfont{
            color: #35495e;
        }
        .account,.password{
            border: 1px solid #35495e;
            border-radius: 5px;
            height: 30px;
            margin: 20px auto;
            i{
                line-height: 30px;
            }
            input{
                line-height: 30px;
                background: transparent;
                border: 0 transparent;
                display: inline-block;
                height: 30px;
                outline: none;
            }
        }
    }
}    
</style>

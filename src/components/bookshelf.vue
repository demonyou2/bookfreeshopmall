<template>
  <div class="bookshelf">
      <div class="head">
          <i class="iconfont icon-fanhui back" @click="toMain"></i>
          <span>我的书架</span>
      </div>
      <div class="contentEmpty" v-if="isEmpty">
          <i class="iconfont icon-books"></i>
          <p>{{books}}</p>
      </div>
      <div class="contentNotEmpty" v-else>
          <h2>你已经阅读了：</h2>
          <p v-for="(item,index) in books" :key="index">
              {{item}}
          </p>
      </div>
  </div>
</template>
<script>
import store from './../components/vuex/store'
import {mapStore} from 'vuex'
export default {
    data(){
        return{
            bookList:new Set([]),
            isEmpty:true,
        }
    },
    mounted(){
        this.bookList = this.$store.state.user.readbooks;
    },
    methods:{
        toMain(){
            this.$router.push('/');
        }
    },
    computed:{
        books(){
            if(this.bookList.size === 0){
                return '你的书架空空如也'
            }else{
                this.isEmpty = false;
                let arr = [];
                for(let i of this.bookList){
                    arr.push(i);
                }
                return arr;
            }
        }
    },
    store
}
</script>
<style lang="scss">
.bookshelf{
    width: 100%;
    .head{
        width: 100%;
        height: 60px;
        background: #35495e;
        .iconfont{
        color: #fff;
        font-size: 25px;
        line-height: 60px;
        margin-left: 10px;
        }
        span{
            color: #fff;
            font-size: 25px;
        }
    }
    .contentEmpty{
        width: 300px;
        height: 300px;
        border: 1px solid #000;
        border-radius: 50%;
        text-align: center;
        margin: 100px auto;
        line-height: 300px;
        .iconfont{
            color: #000;
            font-size: 80px;
        }
        p{
            display: block;
            margin: 0;
            height: 20px;
            line-height: 20px;
            margin-top: -100px;
            font-size: 25px;
            font-weight: bold;
        }

    }
    .contentNotEmpty{
        width: 100%;
        text-align: center;
        h2{
            font-size: 30px;
        }
        p{
            font-size: 25px;
        }
    }
}
</style>

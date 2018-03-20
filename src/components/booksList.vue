<template>
    <transition name="fade">
        <div class="books">
            <div class="myHead">
                <div class="back">
                    <i class="iconfont icon-fanhui" @click="backPage"></i>
                </div>
                <div class="title">
                    <p>{{detail.title}}</p>
                </div>
            </div>
            <div class="lists">
                <ul>
                    <li v-for="(item,index) in detail.booklists" :key="index" @click="doNotHasCopyRight">
                        <div class="imgLeft">
                            <img :src="item.imgUrl">
                        </div>
                        <div class="content">
                            <h3>{{item.name}}</h3>
                            <p>{{item.author}}</p>
                            <span>{{item.text}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="copyright">Copyright&copy;will阅读</div>
        </div>
    </transition>    
</template>
<script>
import store from './../components/vuex/store'
import {mapState} from 'vuex'
import  {ToastPlugin} from 'vux'
export default {
  data(){
      return{
          id: '',
      }
  },
  created(){
      this.id = this.$route.params.id;
  },
  computed:{
      detail(){
          let id = this.id;
          return this.$store.state[id];
      }
  },
  components:{
      ToastPlugin
  },
  store,
  methods:{
      backPage(){
          this.$router.push('/');
      },
      doNotHasCopyRight(){
          this.$vux.toast.text('由于版权问题，不能阅读，请阅读首页中精品推荐和新书上架中的书籍', 'middle');
      }
  }
  
}
</script>
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.books{
    width: 100%;
    .myHead{
        width: 100%;
        height: 60px;;
        background: #35495e;
        display: flex;
        .back{
            height: 60px;
            line-height: 60px;
            flex: 1;
            margin-left: 10px;
            .iconfont{
                color: #fff;
                font-size: 20px;
            }
        }
        .title{
            height: 60px;
            flex: 5;
            p{
                font-size: 20px;
                color: #fff;
                display: inline-block;
                line-height: 20px;
            }
        }
    }
    .lists{
        width: 100%;
        ul{
            li{
                display: flex;
                list-style:none;
                width: 100%;
                height: 100px;
                border-bottom: 1px solid #ccc;
                margin: 5px -20px;
                .imgLeft{
                    height: 100px;
                    flex: 1;
                    img{
                        width: 48px;
                        height: 64px;
                        margin-right: 8px;
                        margin-top: 15px;
                    }
                }
                .content{
                    flex:7;
                    h3{
                        margin-top: 10px;
                        margin-bottom: -10px;
                        font-size: 15px;
                        width: 80%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p{
                        margin-bottom: 2px;
                        font-weight: bold;
                    }
                    span{
                        display: inline-block;
                        width: 80%;
                    }
                }
            }
        }
    }
    .copyright{
        margin:10px auto;
        text-align: center;
        font-size: 15px;
    }
}
</style>

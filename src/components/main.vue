<template>
  <div class="mymain">
    <div class="myHead">
        <div class="left" @click="toBookShelf">
            <i class="iconfont icon-books"></i>
            <span>书架</span>
        </div>
        <div class="title">
            <p>will阅读</p>
        </div>
        <div class="right">
            <i class="iconfont icon-sousuo" @click="toSearchPage"></i>
            <i class="iconfont icon-yonghu" @click="toUserLogin"></i>
        </div>
    </div>
    <div class="myNav">
        <ul v-for="(item,index) in navClass" :key="index" class="navs">
            <li v-for="(i,index) in item" :key="index" @click="changePages(i.id)">
                <i class="iconfont" :class="i.name"></i>
                <span>{{i.spanN}}</span>
            </li>
        </ul>
    </div>
    <div class="hr"></div>
    <swiper :list="adImgUrl" auto height="64px" style="margin-bottom:5px;" dots-class="custom-bottom" dots-position="center"></swiper>
    <div class="hr"></div>
    <my-recommend :message="recommendList"></my-recommend>
    <div class="hr"></div>
    <my-recommend :message="newsList"></my-recommend>
    <div class="copyright">Copyright&copy;will阅读</div>    
  </div>
</template>
<script>
import {Swiper,SwiperItem} from 'vux'
import myRecommend from './../components/recommend.vue'
const imgList = ['http://wap.cmread.com/r/p/content/repository/ues/image/s1/20171218091544535.jpg','http://wap.cmread.com/r/p/content/repository/ues/image/s1/20180130152550066.jpg','http://wap.cmread.com/r/p/content/repository/ues/image/s1/20180103152831984.jpg','http://wap.cmread.com/r/p/content/repository/ues/image/s1/20171218091402908.jpg'];
const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))
export default {
  data(){
      return{
        navClass:[
              [
                  {
                      id: 'sale',
                      name: 'icon-sale',
                      spanN: 'SALE'
                  },
                  {
                      id: 'man',
                      name: 'icon-nan',
                      spanN: '男士'
                  },
                  {
                      id: 'woman',
                      name: 'icon-nvsheng',
                      spanN: '女士'
                  },
                  {
                      id:'vip',
                      name: 'icon-vip',
                      spanN: '会员'
                  }
              ],
              [
                  {
                      id: 'sort',
                      name: 'icon-fenlei',
                      spanN: '分类'
                  },
                  {
                      id: 'rank',
                      name: 'icon-paixing',
                      spanN: '排行'
                  },
                  {
                      id: 'free',
                      name: 'icon-icon6',
                      spanN: 'FREE'
                  },
                  {
                      id: 'discover',
                      name: 'icon-faxian',
                      spanN: '发现'
                  }
              ]
          ],
        adImgUrl:demoList,
        recommendList:{
            title: '精品推荐',
            booklist:[
                [
                    {
                        id:'re1',
                        name: '狼群',
                        author: '刺血',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/s010/p01mzISnrzgZ/wa7K9l3pwBVJs4.jpg!s'
                    },
                    {
                        id:'re2',
                        name: '朝闻道',
                        author: '刘慈欣',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/s010/p01lVK4PONB1/8wCj8fqNQRAF5q.jpg!s'
                    },
                    {
                        id:'re3',
                        name: '活着活着就老了',
                        author: '冯唐',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01I6jWYGXKW/7C41hihoLzRuul.jpg!s'
                    },
                ],
                [
                    {
                        id:'re4',
                        name: '银河帝国3',
                        author: '【美】艾萨克·阿西莫夫',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01XQw2eKhCX/LAhPDRWihvHCQl.jpg!s'
                    },
                    {
                        id:'re5',
                        name: '简约至上',
                        author: '【英】科尔伯恩',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/s010/p01pWH8Iqka5/y8pXSxwM66Jbqo.jpg!s'
                    },
                    {
                        id:'re6',
                        name: '下一个淘宝卖家精英就是你',
                        author: '陶子',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/s010/p01KyrVJyt5p/IWP50j4FTTCqnc.jpg!s'
                    }
                ]
                
            ],
            ads:['http://image.read.duokan.com/mfsv2/download/fdsc3/p01mUlYpLHKm/h9pqI0DsZ32Yxz.jpg','http://image.read.duokan.com/mfsv2/download/fdsc3/p01KSvmdBUO5/OEzX5XydcbpKj7.jpg']
        },
        newsList:{
            title: '新书上架',
            booklist:[
                [
                    {
                        id:'new1',
                        name: '电商产品经理宝典：电商后台系统',
                        author: '刘志远',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01CgXCspsXE/fX4EeSmbGPs8gO.jpg!s'
                    },
                    {
                        id:'new2',
                        name: '有效学习',
                        author: '【美】乌尔里希·伯泽尔',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01hIDfnVdiW/i44qZJeZmsjPcP.jpg!s'
                    },
                    {
                        id:'new3',
                        name: '增长黑客实战',
                        author: '范冰',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p011K7GbJ4WE/6K8chnaE9zp1uy.jpg!s'
                    }
                ],
                [
                    {
                        id:'new4',
                        name: '如何让他买：改变消费者行为的十大策略',
                        author: '【澳】亚当·费里尔',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01jIfVKsEMp/UOTsbwcXiXYQ1W.jpg!s'
                    },
                    {
                        id:'new5',
                        name: '平衡掌控者：游戏数值战斗设计',
                        author: '似水无痕',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01ulxtDYb9P/IZdbSkyp1DNGrE.jpg!s'
                    },
                    {
                        id:'new6',
                        name: '看得见的世界史：英国',
                        author: '郭方',
                        imgUrl: 'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01Lea9dpoaX/iBxSe2J2fAcxXv.jpg!s'
                    }
                ]
            ],
            ads:['http://image.read.duokan.com/mfsv2/download/fdsc3/p01o97NiISsF/83iVA4ZfO0x1MF.jpg','http://image.read.duokan.com/mfsv2/download/fdsc3/p017XKezHq0g/jcncd3yctFpp9G.jpg']
        }
      }
  },
  components:{
      Swiper,
      SwiperItem,
      myRecommend
  },
  methods:{
      changePages(s){
          this.$router.push({path: '/'+s}); //跳转到对应id的路由
      },
      toSearchPage(){
          this.$router.push('/user/search');
      },
      toUserLogin(){
          let useaccount = sessionStorage.getItem('account');
          let usepassword = sessionStorage.getItem('password');
          if(useaccount && usepassword){
              this.$router.push('/user/detail');
          }else{
              this.$router.push('/user/login');
          }
      },
      toBookShelf(){
          let useaccount = sessionStorage.getItem('account');
          let usepassword = sessionStorage.getItem('password');
          if(useaccount && usepassword){
              this.$router.push('/user/bookshelf');
          }else{
              this.$router.push('/user/login');
          }
      }
  }
}
</script>
<style lang="scss">
.mymain{
    width: 100%;
    .iconfont{
        color: #fff;
        font-size: 30px;
    }
    .myHead{
        width: 100%;
        height: 60px;;
        background: #35495e;
        display: flex;
        text-align: center;
        color: #fff;
        line-height: 60px;
        .left{
            flex: 1;
            span{
                display: inline-block;
                height: 30px;
                font-size: 15px;
            }
        }
        .title{
            flex:1.5;
            p{
                font-size: 20px;
                display: inline;
            }
        }
        .right{
            flex:1;
            i{
                margin-left: 10px;
            }
        }
    }
    .myNav{
        width: 100%;
        margin-top: 15px;
        .iconfont{
            color: #000;
        }
        .navs{
            display: flex;
            justify-content: center;
            li{
                flex: 1;
                list-style: none;
                margin-left: 1px;
                span{
                    margin:2px 0 2px 2px;
                    display: block;
                    text-align: left;
                }
            }
        }
    }
    .hr{
        width: 100%;
        height: 1px;
        background: #ccc;
        margin-bottom: 5px;
    }
    .copyright{
        margin:10px auto;
        text-align: center;
        font-size: 15px;
    }
}
</style>


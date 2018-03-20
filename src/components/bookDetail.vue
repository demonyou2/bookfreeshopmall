<template>
    <transition name="slide-fade">
        <div class="bookdetail">
            <div class="detailhead">
                <div class="back">
                    <i class="iconfont icon-fanhui" @click="backPage"></i>
                </div>
                <div class="title">
                    <p>图书详情</p>
                </div>
            </div>
            <div class="content">
                <div class="top">
                    <div class="imgleft">
                        <img :src="bookdetail.imgUrl">
                    </div>
                    <div class="text">
                        <h3>{{bookdetail.name}}</h3>
                        <p>作者：{{bookdetail.author}}</p>
                        <p>版权：{{bookdetail.copyright}}</p>
                    </div>
                </div>
                <div @click="changeReadModelpage(bookid)">
                    <x-button plain type="primary" style="border-radius:99px;" class="custom-primary-grey" >免费阅读</x-button>
                </div>    
            </div>
            <div class="tab">
                <tab :line-width=2 active-color='#fc378c' v-model="index">
                        <tab-item class="vux-center" :selected="list1 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{item}}</tab-item>
                </tab>
                <swiper v-model="index" :show-dots="false">
                        <swiper-item>
                            <div class="description">
                                <div class="text" ref="text">
                                </div>
                                <span class="textbnt" v-if="isStretch" @click="hidden">隐藏简介</span>
                                <span class="textbnt" v-else @click="stretch">完整简介</span>
                            </div>
                        </swiper-item>
                        <swiper-item>
                            <div class="comment">暂无评论</div>
                        </swiper-item>
                        <swiper-item>
                            <div class="information">暂无信息</div>
                        </swiper-item>
                </swiper>
            </div>
        </div>
    </transition>    
</template>
<script>
import store from './../components/vuex/store'
import {mapState} from 'vuex'
import {XButton,Tab,TabItem,Swiper,SwiperItem} from 'vux'
export default {
    data(){
        return{
            bookid:'',
            index:0,
            list:['图书介绍','评论','更多信息'],
            list1:'图书介绍',
            isStretch:false,
            booklists:[
                {
                    id:'re1',
                    name:'狼群'
                },
                {
                    id:'re2',
                    name:'朝闻道'
                },
                {
                    id:'re3',
                    name:'活着活着就老了'
                },
                {
                    id:'re4',
                    name:'银河帝国'
                },
                {
                    id:'re5',
                    name:'简约至上'
                },
                {
                    id:'re6',
                    name:'下一个淘宝精英卖家就是你'
                },
                {
                    id:'new1',
                    name:'电商产品经理宝典：电商后台系统'
                },
                {
                    id:'new2',
                    name:'有效学习'
                },
                {
                    id:'new3',
                    name:'增长黑客实战'
                },
                {
                    id:'new4',
                    name:'如何让他买：改变消费者行为的十大策略'
                },
                {
                    id:'new5',
                    name:'平衡掌控者：游戏数值战斗设计'
                },
                {
                    id:'new6',
                    name:'看得见的世界史：英国'
                }
            ]
        }
    },
    components:{
        XButton,
        Tab,
        Swiper,
        SwiperItem,
        TabItem
    },
    created(){
        this.bookid = this.$route.params.id;
    },
    computed:{
        bookdetail(){
            let id = this.bookid;
            return this.$store.state.bookDetial[id]
        }
    },
    mounted(){
        let t = this.bookdetail.description;
        this.$refs.text.innerHTML = t;
    },
    methods:{
        backPage(){
            this.$router.push('/');
        },
        stretch(){
            this.$refs.text.style.height = '250px';
            this.isStretch = true;
        },
        hidden(){
            this.$refs.text.style.height = '140px';
            this.isStretch = false;
        },
        changeReadModelpage(s){
            let account = this.$store.state.user.account;
            let password = this.$store.state.user.password;
            if(account && password){
                this.$store.state.user.readbooks.add(this.bookdetail.name);
            }
            this.$router.push({path:'/readbook/' + s});
        }
    },
    store
}
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bookdetail{
    width: 100%;
    background: rgba(204,204,204,0.1);
    .detailhead{
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
    .content{
        .top{
            display: flex;
            margin: 10px auto;
            .imgleft{
                flex: 2;
                img{
                    width: 106px;
                    height: 141px;
                    margin-left: 5px;
                    border: 1px solid #ccc;
                }
            }
            .text{
                flex:5;
                margin-left: 10px;
                h3{
                    font-size: 20px;
                    margin: 0 0 60px 10px;
                    letter-spacing: 10px;
                }
                p{
                    font-size: 10px;
                    margin: 0 0 5px 10px;
                    letter-spacing: 2px;
                    width: 200px;
                }
            }
        }
        .custom-primary-grey{
            border-color: #CE3C39!important;
            color: #CE3C39!important;;
        }
    }
    .tab{
        margin-top: 10px;
        .vux-swiper{
            height: 500px !important;
        }
        .description{
            .text{
                height: 140px;
                overflow: hidden;
            }
            .textbnt{
                display: block;
                color: #00f;
                font-weight: bold;
                font-size: 15px;
                text-align: right;
                margin-top: 10px;
            }
        }
    }
}
</style>

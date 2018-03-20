<template>
<transition name="slide-fade">
        <div class="readmodel">
            <div class="model" ref="model">
                <div class="modelhead" v-show="isShow">
                    <i class="iconfont icon-fanhui back" @click="changePage"></i>
                </div>
                <div class="content" @click="isshow" ref="contents">
                    <h2>{{chapterName}}</h2>
                    <p>{{chapterTest}}</p>
                </div>
                <div class="chapterbnt">
                    <button class="bnt" @click="upChapter">上一章</button>
                    <button class="bnt" @click="nextChapter">下一章</button>
                </div>
                <div class="modelfoot" v-show="isShow">
                    <ul>
                        <li>
                            <i class="iconfont icon-mulu"></i>
                            <span>目录</span>
                        </li>
                        <li>
                            <i class="iconfont icon-yejianmoshi" v-if="isDay" @click="changeNightModel"></i>
                            <i class="iconfont icon-rijianmoshi" v-else @click="changeDayModel"></i>
                            <span ref="font">夜间</span>
                        </li>
                        <li>
                            <i class="iconfont icon-iconfonticonfontjixieqimo"></i>
                            <span>设置</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</transition>
</template>
<script>
import store from './../components/vuex/store'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            isShow: false,
            name:'',
            isDay: true,
            length:0,
            count:0,
            nowChapter:'',
            chapterName:'',
            chapterTest:''
        }
    },
    created(){
        this.name = this.$route.params.id;
    },
    mounted(){
        let height = window.screen.height
        this.$refs.model.style.height = height + 'px';
        this.length = this.text.length;
        this.nowChapter = this.text[this.count];
        this.chapterName = this.nowChapter.name;
        this.chapterTest = this.nowChapter.text;
    },
    computed:{
        text(){
            let name = this.name;
            return this.$store.state.bookDetial[name].content;
        }
    },
    methods:{
        isshow(){
            this.isShow = !this.isShow;
        },
        changePage(){
            // this.$router.push('/');
            this.$router.go(-1);
        },
        changeNightModel(){
            this.isDay = false;
            this.$refs.contents.style.background = '#000';
            this.$refs.contents.style.color = '#fff';
            this.$refs.font.innerText = '白天';
            this.$refs.font.style.fontSize = '12px';
        },
        changeDayModel(){
            this.isDay = true;
            this.$refs.contents.style.background = '#fff';
            this.$refs.contents.style.color = '#000';
            this.$refs.font.innerText = '夜间';
            this.$refs.font.style.fontSize = '12px';
        },
        upChapter(){
            this.count--;
            if(this.count <= -1){
                this.count = 0;
                return;
            }
            scrollTo(0,0);
            this.nowChapter = this.text[this.count];
            this.chapterName = this.nowChapter.name;
            this.chapterTest = this.nowChapter.text;
        },
        nextChapter(){
            this.count++;
            if(this.count >= this.length){
                this.count = this.length -1;
                return;
            }
            scrollTo(0,0);
            this.nowChapter = this.text[this.count];
            this.chapterName = this.nowChapter.name;
            this.chapterTest = this.nowChapter.text;
        }
    },
    store
}
</script>
<style lang="scss">
.readmodel{
    width: 100%;
    height: 100%;
    .model{
        // position: relative;
        .iconfont{
            color: #fff;
            font-size: 20px;
        }
        .modelhead{
            position: fixed;
            left: 0;
            top: 0;
            height: 60px;
            background: #35495e;
            width: 100%;
            .back{
                display: inline-block;
                line-height: 60px;
                margin-left: 20px;
            }
        }
        .modelfoot{
            position: fixed;
            height: 60px;
            width: 100%;
            left: 0;
            bottom: 0;
            background: #35495e;
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                margin-top: 0px;
                li{
                    margin-top: 10px;
                    list-style: none;
                    display: inline-block;
                    flex: 1;
                    span{
                        color: #fff;
                        display: block;
                    }
                }
            }
            .iconfont{
                font-size: 25px;
            }
        }
        .content{
            h2{
                font-size: 25px;
                text-align: center;
            }
            p{
                font-size: 18px;
                text-indent: 2em;
            }
        }
        .chapterbnt{
            width: 100%;
            text-align: center;
            .bnt{
                width: 100px;
                height: 40px;
                line-height: 30px;
                font-size: 15px;
                border-radius: 20px;
                background: #35495e;
                color: #fff;
                font-weight: bold;
            }
        }
    }
}
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
</style>

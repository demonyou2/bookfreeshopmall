<template>
  <div class="model">
    <div class="title">
        <h3>{{message.title}}</h3>
        <span @click="toAllPage">全部></span>
    </div>
    <div class="booklist">
        <ul v-for="(item,index) in message.booklist" :key="index">
            <li v-for="(i,index) in item" :key="index" @click="changeToDetail(i.id)">
                <img :src="i.imgUrl">
                <span>{{i.name}}</span>
                <span>{{i.author}}</span>
            </li>
        </ul>
        <div class="ads">
            <img :src="message.ads[0]">
            <img :src="message.ads[1]">
        </div>
    </div>
  </div>
</template>
<script>
export default {
   props:['message'],
   data(){
       return{

       }
   },
   methods:{
       changeToDetail(s){
           this.$router.push({path:'/bookdetail/' + s});
       },
       toAllPage(){
           this.$router.push('/sort');
       }
   }
}
</script>
<style lang="scss">
.model{
    width: 100%;
    .title{
        position: relative;
        h3{
            font-size: 15px;
            margin-left: 20px;
        }
        span{
            right: 20px;
            top:0;
            position: absolute
        }
    }
    .booklist{
        margin-top: 20px;
        ul{
            display: flex;
            margin-left: -15px;
            li{
                list-style: none;
                flex: 1;
                img{
                    width: 88px;
                    height: 117px;
                }
                span{
                    display: block;
                    width: 88px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align: center;
                }
            }
        }
        .ads{
            margin: 10px auto;
            text-align: center;
            letter-spacing: 20px;
            img{
                display: inline-block;
                width: 160px;
                height: 90px;
                border-radius: 5%;
            }
        }
    }
}
</style>

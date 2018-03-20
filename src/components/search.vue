<template>
  <div class="mysearch">
      <div class="head">
        <i class="iconfont icon-fanhui back" @click="toMain"></i>
        <span>搜索</span>
      </div>
      <div>
          <search position="absolute" top="60px" :results="results" @on-change="getResult">
          </search>
      </div>
  </div>
</template>
<script>
import {Search} from 'vux'
export default {
    data(){
        return{
            results:[]
        }
    },
    components:{
        Search
    },
    methods:{
        toMain(){
            this.$router.push('/');
        },
        getResult (val) {
            this.results = val ? getResult(this.value) : [];
        }
    }
}
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>
<style lang="scss">
.mysearch{
    width: 100%;
    height: 60px;;
    background: #35495e;
    .iconfont{
        color: #fff;
        font-size: 25px;
    }
    .head{
        width: 100%;
        display: flex;
        line-height: 60px;
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
}
</style>

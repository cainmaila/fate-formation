<template>
    <div class="page" v-if="config">
        <h1>{{til}}</h1>
        <div class="cont">{{cont}}</div>
        <div>{{config.input}}</div>
        <div><input class="inp" type="text" v-model="uid"></div>
        <div>
            <button @click="calculate">{{config.btn}}</button>
        </div>
        <div class="img"><img :src="imgurl" alt=""></div>
    </div>
</template>

<script>
import delegate from '@/delegate'
import md5 from 'md5'
export default {
    name:'Home',
    mixins:[delegate],
    data(){
        return {
            til:'',
            cont:'',
            imgurl:'',
            uid:'',
            num:0,
            selectId:-1
        }
    },
    methods:{
        calculate(){
            let md5Str = md5(this.uid)
            this.num = ('0.'+Math.sin(parseInt(md5Str, 16)).toString().substr(6))
        }
    },
    watch:{
        num(val){
            this.selectId = ~~(val*100)%this.config.list.length
        },
        selectId(val){
            if(val!==-1){
                let item =  this.config.list[val]
                this.til = item.til
                this.cont = item.cont
                this.imgurl = item.img
            }
        },
        config(val){
            this.til = val.til
            this.cont = val.cont
            this.imgurl = val.img
        }
    },
    mounted(){
        this.init()
    }
}
</script>

<style lang="postcss" scoped>
h1 {
    font-size: 24px;
}
.page {
    padding: 50px;
}
.cont {
    margin: 50px auto;
    padding: 50px;
    max-width: 70%;
    background: rgb(252, 252, 246);
    text-align: left;
}
.inp {
    margin: 15px 0px;
}
.img {
    margin: 20px auto;
    & img {
        max-width: 90%;
    }
}
</style>

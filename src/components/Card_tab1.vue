<template>
  <div class="card__tab1">
    <div class="card__title">
      <h2>{{ titleCardH }}</h2>
    </div>
    <div class="card__line"></div>
    <div class="card__lista" >
      <ul>
        <li >{{itemList}}</li>
        <li v-if="itemList1">{{itemList1}}</li>
        <li v-if="itemList2">{{itemList2}}</li>
        <li v-if="itemList4">{{itemList4}}</li>
        <li v-if="itemList5">{{itemList5}}</li>
        <li v-if="itemList6">{{itemList6}}</li>
        <li v-if="itemList7">{{itemList7}}</li>
        <li v-if="itemList8">{{itemList8}}</li>
      </ul>
    </div>
    <div class="radio">
      <radioButtos_tab1 @saveInputValue="onInputValueChange"></radioButtos_tab1>
    </div>
  </div>
</template>

<script>
import radioButtos_tab1 from "@/components/RadioButtons_tab1.vue";

export default {
  name: 'Card_tab1',
  components: {
    radioButtos_tab1,
  },
  props: {
    titleCardH: String,
    itemList: String,
    itemList1: String,
    itemList2: String,
    itemList3: String,
    itemList4: String,
    itemList5: String,
    itemList6: String,
    itemList7: String,
    itemList8: String,
  },
    data() {
    return {
      inputValue: true,
    };
  },

  methods:{
    onInputValueChange() {
      console.log(this.inputValue)
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.card__tab1{
height: 488px;
width: 225px;
border-radius: 2px;
background: #FFFFFF;
border: 1px solid #C9E3F9;
box-sizing: border-box;
border-radius: 2px;
margin: 10px 10px 10px 10px;
position: relative;

  .card__title{
    height: 75px;
    color: #105AA3;
    font-size: 14px;
    font-family: $font-roboto-slab;
  }
  .card__line {
    width: 72px;
    border-radius: 0px;
    border: 1px solid #C9E3F9;
    margin-left: 76px;
  }
  .card__lista{
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    text-align: start;
  
    ul, li {
      font-family: $font-roboto;
      font-size: 15px;
      color: $azulOscuro;
    }
  }
  .radio{
    bottom: 15px;
    left: 15px;
    position: absolute;
    pointer-events:auto;
  }
}
</style>

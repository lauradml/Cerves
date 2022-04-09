<template>
    <div class="radioButtons">
        <input type="radio" id="elegirRegimen" :value="true" v-model="inputValue" @input="ischecked" >
        <label for="elegirRegimen">Elegir régimen</label>
    </div>
    
</template>
<script>
export default {
name: 'radioButtos_tab1',
  data() {
    return {
    inputValue: this.value
    };
  },
props: {
    value: Boolean,
  },
methods:{
   ischecked() {
       this.$emit("saveInputValue", this.inputValue);
   }
}
}
</script>
<style scoped lang="scss">
@import "@/styles/variables.scss";

.radioButtons{
    height: 46px;
    width: 191px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $fondo;
}
.active{
    border: 2px solid #0a5397;
}
</style>
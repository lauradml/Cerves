<template>
  <div class="tab__2">
    <h2>Bebidas</h2>
    <div class="menu_tad2" >
      <div>
        <h3>Cervezas</h3>
      </div>
      <div>
        <ul>
          <li v-for="item in cerverList" :key="item.id">
            <div class="card_tab2">
              <div class="img__tab2" >
                <img :src="item.image_url" alt="">
              </div>
              <div class="description__tab2">
                <h4>{{item.name}}</h4>
                <p class="content__description">{{item.description}}</p>
                <p class="maridaje">ideal para combinar : {{item.food_pairing.join(', ')}}</p>
              </div>
              <div class="achool">
                 <p class="naranja" :class="{'amarillo': item.abv<=5, 'rojo': item.abv>10 }"> {{item.abv}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name:"Tab-2",
  data() {
    return {
    };
  },
  created() {
    this.$store.dispatch("getCerves");
    if (localStorage.getItem("cerverList")) {
      try {
        this.cerverList = JSON.parse(localStorage.getItem("cerverList"));
      } catch (e) {
        localStorage.removeItem("cerverList");
      }
    }
  },
  computed:{
        ...mapState({
        cerverList:'cerverList'
    }),
    cerverList: {
      get() {
        return this.$store.state.cerverList;
      },
    },
  }
}
</script>
<style lang="scss">
  @import "@/styles/variables.scss";

  .tab__2{
    display: flex;
    flex-direction: column;
  h2{
    font-family: $font-roboto-slab;
    color: $azulClaro;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin-top: 68px;
    margin-bottom: 72px;
    padding-left: 40px;
    }
    .menu_tad2{
      width:100%;
      background: #FFFFFF ;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid #DEE1E8;
      box-sizing: border-box;
      h3{
        font-family: $font-roboto-slab;
        color: $azulClaro;
        font-size: 24px;
        font-weight: bold;
        text-align: left;
        margin-top: 60px;
        padding-left: 40px;
      }
      ul,li{
        list-style: none;
        
      }
      .card_tab2{
        height: 180px;
        border: 1px solid #DEE1E8;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-right: 40px;
        margin-bottom: 40px;
        .img__tab2{
            width: 200px;
            height: 180px;
            display: flex;
            justify-content: center;
            overflow:hidden;
            object-fit: cover;
              img{                max-width: auto;
              max-height: 180px;
              object-fit: cover;
              padding: 10px 5px 10px 5px ;
            }
        }
        .description__tab2{
          width: 90%;
          height: 180px;
          text-align: start;
            h4{
              font-family: $font-roboto-slab;
              color: $azulOscuro;
              font-size: 18px;
              font-weight: bold;
              margin:17px 0px 4px 0px;
            }
            .content__description{
              height: 60px;
              font-family: $font-roboto-slab;
              font-size: 14px;
              margin: 0 auto;
              display:block;
              overflow:auto;
            }
            .maridaje{
              font-family: $font-roboto-slab;
              height: 44px;
              color: $azulClaro;
              font-size: 18px;
              font-weight: bold;
              display:block;
              overflow: clip;
            }
        }
        .achool{
          width: 86px ;
          height: 56px;
          font-family: $font-roboto-slab;
          font-weight: bold;
          text-align: left;
          
          .naranja{
            background: $naranja;
            height: 36px;
            display: flex;
            align-items: center;
            padding-left: 5px;
          }
          .amarillo{
            background: $amarillo;
          }
          .rojo{
            background: $rojo;
          }
        }
      }
    }
  }
  
  
</style>


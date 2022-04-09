<template>
  <div class="home">
    <h1>HOTEL <b>Mieres de caminApartamentos</b> <span>⭐️⭐️⭐️⭐️</span> </h1>
    <div class="card">
      <Card_tab1 
        titleCardH="Solo Alojamiento"
        itemList= "Sin régimen"
        itemList1= "Botella de agua de bienvenid"
      />
      <Card_tab1 
        titleCardH="Aojamiento y desayuno" 
        itemList= "Desayuno buffet completo"
      />
      <Card_tab1 
        titleCardH="Media pensión"
        itemList= "Desayuno buffet completo"
        itemList1= "Cena buffet"
        itemList2= "No icluye"
      />
      <Card_tab1 
        titleCardH="Todo incluido"
        itemList= "Dispondrás de comida y bebida todo el día y durante toda tu estancia."
        itemList1= "Restaurante buffet"
        itemList2= " Snack Bar"
        itemList3= "Servicio de bares (marcas nacionales)"

      />
      <Card_tab1 
        titleCardH="Unlimited Services"
        itemList= "Restaurante buffet con bebidas Premium"
        itemList1= "Restaurante a la carta (una cena por estancia)"
        itemList2= " Snack Bar con bebidas Premium"
        itemList3= "Acceso a SPA y 45 minutos de masaje por persona"
        itemList4= " Actividades deportivas (acuáticas sin motor)"
        itemList5= " Caja fuerte"
        itemList6= " Parking gratuito"
        itemList7= " Lavandería"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card_tab1 from '@/components/Card_tab1.vue'

export default {
  name: 'HomeView',
  components: {
    Card_tab1
  },
  data() {
    return {
      
    }
  },
  created(){
    
  },
  methods: {

  }
}

</script>
<style lang="scss">
@import "@/styles/variables.scss";

.home{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1{
  font-family: $font-roboto-slab;
  font-size: 30px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0px;
  color: $azulOscuro;
  margin: 30px 0px 30px 0px;
  span{
    font-size: 14px;
    margin-left: 30px;
  }
  
}
.card{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 30px 30px 30px 30px;
}
</style>

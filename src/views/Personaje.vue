<template>
<div class="container center">
  <div class="col sm-6">
    <div class="row">
     <h1 class="text-center mt-5">{{ character.name}}</h1>
  <div class="cards" style="width: 22rem;">
    <img :src="character.image" class="card-img-top" :alt="character.name">
    
    <div class="card-body">
      <!--<h3>{{ character.name }}</h3>-->
      <div class="status">
        <span
          :class="
            character.status == 'Alive' ? 'alive' :
            character.status == 'Dead' ? 'dead' :
            'default'"
        ></span>
        <span>{{ character.status }} - {{ character.species }}</span>
      </div>
      <div class="origen">
        <span>
          Origin: 
          {{ character.origin.name }}
        </span>
      </div>
      <div class="location">
        <span>
          Location: 
          {{ character.location.name }}
        </span>
         
      </div>
      <!--<a href="#" class="btn btn-secondary">Ver personaje</a> esto!!-->
    </div>
  </div>
    </div>
    </div>
</div>
 


</template>




<script>
export default {
  data() {
    return {
      character: {}
    }
  },
  methods: {
   async mostrarCharacter() {
     try {
       const data = await fetch(`https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
       const getCharacter = await data.json();
       this.character = getCharacter;

     }catch (error) {
       console.log(error);
       throw error;
     }
   } 
  },

  created() {
    this.mostrarCharacter();
  }

}
</script>

<style scoped>

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  /*margin: 20px 0 0 120px;*/
 /*background-image: url("./assets/rm.jpg");*/
}

h1 {
  font-family: 'Syne Mono', monospace;
  background-color: white;
  width: 400px;
  height: 50px;
  margin-right: 20px;
  border-radius: 5px;
  border: 1px solid #000;

}

.cards {
  background: #fff;
  margin-top: 40px;
  margin-bottom: 0;
  border-radius: 7px;
  border: 1px solid #000;
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.4);
  
}
.card-body {
  font-size: 14px;
  color: darkgray; 
  font-family: 'Hubballi', cursive;

}

.card-img-top {
  margin-top: 8px;
}


</style>
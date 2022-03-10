<template>
<div class="container center">
  <div class="col-sm-10">
    <div class="row">
      <h1 class="text-center mt-5">Personajes</h1>
  <div class="cards" style="width: 18rem;" v-for="character of characters" :key="character.id">
    <img :src="character.image" class="card-img-top" :alt="character.name">
    
    <div class="card-body">
      <h3>{{ character.name }}</h3>
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
        <!--<span>
          Location: 
          {{ character.location.name }}
        </span>-->
         
      </div>
      <router-link class="btn btn-secondary" :to="`/personaje/${character.id}`"> Ver Personaje</router-link>
      <!--<a href="#" class="btn btn-secondary">Ver personaje</a>-->
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
      characters: []
    };
  },
  methods: {
    async consumirCharacters() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const getCharacters = await data.json();
        this.characters = getCharacters.results;
        
      console.log(this.characters);
      }catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  created() {
    this.consumirCharacters();
  }
}
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Hubballi&family=Syne+Mono&display=swap');



.container {
  height: 100vh;
  display: flex;
  justify-content: center;
 /*background-image: url("./assets/rm.jpg");*/
}

h1 {
  font-family: 'Syne Mono', monospace;
  background-color: white;
  width: 900px;
  border-radius: 5px;
  border: 1px solid #000;
}

.cards {
  background: #fff;
  margin-top: 20px;
  margin-bottom: 0;
  margin-right: 20px;
  border-radius: 7px;
  border: 1px solid #000;
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.4);
  /*display: inline;
  align-content: space-between;*/
  
}
.card-body {
  font-size: 14px;
  color: darkgray; 
  font-family: 'Hubballi', cursive;

}

.card-img-top {
  margin-top: 8px;
}
.btn {
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 0px;
  font-family: 'Syne Mono', monospace;
}
</style>

<template>
<div class="container center">
  
      <h1 class="text-center mt-5">{{ character.name}}</h1>
  <div class="cards" style="width: 18rem;">
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
        <span>
          Location: 
          {{ character.location.name }}
        </span>
         
      </div>
      <!--<a href="#" class="btn btn-secondary">Ver personaje</a> esto!!-->
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
       this.character = getCharacter.results;

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

<style>

</style>
<template>
<div v-for="character of characters" :key="character.id">
    <img src="{{ character.image }}" :alt="imgCharacter">
    <div class="character__info">
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
       this.personaje = getCharacter;
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
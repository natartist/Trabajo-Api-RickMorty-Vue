<template>
  <div class="character" v-for="character of characters" :key="character.id">
    <img :src="character.image" :alt="character.name">
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
      characters: {}
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

<style>

</style>
<template>
<div class="container mt-5">
  <h2 class="fst-italic text-center mb-5">Episodios</h2>

  <div class="row" v-for="episode of episodes" :key="episode.id">
    <div class="col">
      <h3> {{  episode }}</h3>
      <!-- Autor-->
      <router-link class="episode" :to="`/personaje/${episode.personajeId}`">Personaje</router-link>
      <p>{{  post.body }}</p>
      <button class="btn btn-secondary" @click="episodesid(episode.id)">Ver comentarios</button>
      </div>
      </div>
      </div>


  
</template>

<script>
// @ is an alias to /src
//import Personaje from './views/Personaje.vue'

export default {
  name: 'HomeView',
  components: {
    
  }, 
  data() {
    return {
    episodes: [],
    
  }
},
methods: {
  episodesid(id) {
    console.log(id); 
    this.episodesFiltrados = this.episodes.filter( episode => episode.episodeId == id);
    console.log(this.episodesFiltrados);
},
 async consumirEpisode() {
   try {
const data = await fetch(`https://rickandmortyapi.com/api/episode`);
const getepisode = await data.json();
this.episodes = getepisodes;
console.log(this.episodes)
   } catch (error) {
     console.log(error);
     throw error;
   }
  
  }, 
  
},
created() {
  this.consumirEpisodes();
  
}
}

</script>

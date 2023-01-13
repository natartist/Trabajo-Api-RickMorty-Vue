<template>
  <div class="container-fluid">
    <div class="row fila1">
      <div class="title col-md-12 mt-5 mr-5">
        <h1 class="text-center">Personajes</h1>
      </div>
    </div>

    <!-- LLamada de personajes desde la API -->
    <div class="row fila2">
      <div
        class="cards mt-5 mb-5 col-12 ml-3 mr-3"
        v-for="character of characters"
        :key="character.id"
      >
        <img
          :src="character.image"
          class="card-img-top"
          :alt="character.name"
        />

        <div class="card-body">
          <h3>{{ character.name }}</h3>
          <div class="status">
            <span
              :class="
                character.status == 'Alive'
                  ? 'alive'
                  : character.status == 'Dead'
                  ? 'dead'
                  : 'default'
              "
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
          <router-link
            class="btn btn-secondary"
            :to="`/personaje/${character.id}`"
          >
            Ver Personaje</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async consumirCharacters() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const getCharacters = await data.json();
        this.characters = getCharacters.results;

        console.log(this.characters);
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  created() {
    this.consumirCharacters();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hubballi&family=Syne+Mono&display=swap");

.container {
  display: flex;
  justify-content: center;
  margin-left: 10px !important;
}
.fila2 {
  margin-left: 40px !important;
}

.fila1 {
  margin-left: 40px !important;
  margin-right: 40px !important;
}
.title {
  padding: 0px;
}

h1 {
  font-family: "Syne Mono", monospace;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(17, 17, 17);
  display: flex;
  justify-content: center;
}

.cards {
  background: #fff;
  margin-right: 25px;
  border-radius: 7px;
  border: 1px solid #000;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  width: 275px;
  height: 450px;

}
.card-body {
  font-size: 14px;
  color: darkgray;
  font-family: "Hubballi", cursive;
}

.card-img-top {
  margin-top: 8px;
}
.btn {
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 0px;
  font-family: "Syne Mono", monospace;
  position: absolute;
  bottom: 20px;
}
</style>

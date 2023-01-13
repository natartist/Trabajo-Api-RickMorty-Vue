<template>
  <div class="container center">
    <div class="row">
      <div class="col sm-8">
        <h1 class="text-center mt-5">{{ character.name }}</h1>
        <div class="cards">
          <img
            :src="character.image"
            class="card-img-top"
            :alt="character.name"
          />

          <div class="card-body">
            <div class="status">
              <span
                :class="
                  character.status == 'alive'
                    ? 'alive'
                    : character.status == 'dead'
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
              <span>
                Location:
                {{ character.location.name }}
              </span>
            </div>
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
      character: {},
    };
  },
  methods: {
    async mostrarCharacter() {
      try {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character/${this.$route.params.id}`
        );
        const getCharacter = await data.json();
        this.character = getCharacter;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },

  created() {
    this.mostrarCharacter();
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
}

h1 {
  font-family: "Syne Mono", monospace;
  background-color: white;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #000;
}

.cards {
  width: 400px;
  background: #fff;
  border-radius: 7px;
  border: 1px solid #000;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.4);
  margin-top: 40px;
  margin-bottom: 40px;
  /* transform: rotate(10deg) scale(1.1);
  opacity: 0.9;
  transition: all 0.3s ease-in-out; */
}

.alive {
  color: green;
}
.card-body {
  font-size: 18px;
  color: darkgray;
  font-family: "Hubballi", cursive;
}

.card-img-top {
  margin: 8px;
  width: 382px;
}
</style>

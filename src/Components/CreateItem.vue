<template>
<div>
  <h4>Create item</h4>
  <div class="column is-4">
    name<input type="text" class="input" v-model="name"><br>
    url<input type="text" class="input" v-model="url"><br>
    description<input type="text" class="input" v-model="description">
    <button
      @click="postItem({name, url, description})"
      :class="loadingClass">Click
      <div class="ld ld-square ld-tick"></div>
    </button>
  </div>
</div>
</template>

<script>
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
import {mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      name: '',
      url: '',
      description: '',
      loadingClass: 'button is-link ld-ext-right'
    }
  },
  methods: {
    ...mapActions({
      postItem: "items/postItem",
    })
  },
  computed: {
    ...mapGetters({
      
    })
  },
  async mounted(){
    
  },
  watch: {
    async '$store.state.items.loading'(v) {
      if(v) {
        this.loadingClass += ' running';
        await delay(1000);
        this.$store.commit('items/loading', false);
      } else {
        this.loadingClass = 'button is-link ld-ext-right';     
      }
    },
  }
}
</script>

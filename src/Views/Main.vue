<template>
<div class="section">
  <div class="box">
    <button 
      class="button"
      @click="showForm = !showForm">Show/Hide Create Item form
    </button>
    <div v-show="showForm">
      <create-item></create-item>
    </div>
  </div> <!-- create item -->

  <div class="box">
    <button
      class="button"
      @click="showItems = !showItems"
      >Show/Hide all items
    </button>
    <div v-show="showItems">
      <li v-for="item in items" :key="item._id">
        <router-link 
          :to="{path: '/items/' + item._id}">{{item.name}}
        </router-link>
        <button
          class="button"
          @click="deleteItem({id: item._id})">Delete
        </button>
      </li>
    </div>

  </div> <!-- all items -->
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CreateItemVue from '../Components/CreateItem.vue';

export default {
  components: {
    createItem: CreateItemVue
  },
  data() {
    return {
      showForm: true,
      showItems: true,
    }
  },
  methods: {
    ...mapActions({
      deleteItem: 'items/deleteItem',
    }),
  },
  computed: {
    ...mapGetters({
      items: 'items/items'
    }),
  },
  async mounted(){
    await this.$store.dispatch('items/getAllItems');
  },
  watch: {
    
  }
}
</script>

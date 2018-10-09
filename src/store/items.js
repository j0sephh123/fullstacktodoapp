import api from '@/common/api';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const items = {
  namespaced: true,
  state: {     
    items: [],
    oneItem: [],
    oneComment: [],
    redirect: false,
    loading: false,
  },
  mutations: {
    getAllItems(state, val) {
      state.items = val;
    },
    getOneItem(state, val) {
      state.oneItem = val;
    },
    getOneComment(state, val) {
      state.oneComment = val;
    },
    redirect(state, bool) {
      state.redirect = bool;
    },
    loading(state, bool) {
      state.loading = bool;
    }
  },
  actions: {
    // Basic
    async postItem({commit}, {name, url, description}) {
      const result = await api.post('items', {name, url, description});
      if(result.status === 200) {
        console.log(result.data);
        commit('loading', true);
      } else {
        console.log('failed to create a new item');
      }
    },  // post items
    async getAllItems({commit}) {
      console.log('get all items action');
      const result = await api.get('items');
      commit('getAllItems', result.data);
    },  // get items
    async deleteItem(state, {id}) {
      const result = await api.delete('items/' + id);
      console.log(result.data);
    },  // delete items/:id
    async getOneItem({commit}, {id}) {
      const result = await api.get('items/' + id);
      if(result.status === 200) {
        commit('getOneItem', result.data);
      }
    },  // get items/:id
    async editItem({}, {id, name, url, description}) {
      const result = await api.put('items/' + id, {name, url, description});
      console.log(result.data);
    }, // put items/:id

    // Comments
    async postComment({state, commit}, {comment}) {
      if(comment.length > 2) {
        const result = await api.post('comments/' , {item: state.oneItem._id, comment});
        console.log(result.data);
      } else {
        console.log('comment is too short');
      }
    }, // post comments/
    async deleteComment({}, {id}) {
      const result = await api.delete('comments/' + id);
      console.log(result.data)
    }, // delete comments/:id
    async editComment({}, {id, comment}) {
      const result = await api.put('comments/' + id, {comment});
      console.log(result.data);
    }, // not finished
    async getOneComment({commit}, {id}) {
      const result = await api.get('comments/' + id);
      if(result.status === 200) {
        commit('getOneComment', result.data);
      } else {
        console.log('get one comment failed.');
      }
    } // get comments/:id
  },
  getters: {
    items: state => state.items,
    oneItem: state => state.oneItem,
    oneComment: state => state.oneComment,
    redirect: state => state.redirect,
  }
}

export default items;
const state = {
  focus: 'details',
  edit: null,
  uid: null,
  isEditing: false
}

const getters = {
  isEditingTask: state => state.isEditing,
  editingTaskUid: state => state.uid,
  editingTaskFields: state => state.edit,
  editingFocus: state => state.focus
}

const mutations = {
  startTaskEditing (state, payload) {
    state.focus = payload.focus
    state.edit = payload.edit
    state.uid = payload.uid
    state.isEditing = true
  },

  cancelTaskEditing (state, payload) {
    state.isEditing = false
  },

  stopTaskEditing (state) {
    state.isEditing = false
    state.edit = null
    state.uid = null
    state.focus = 'details'
  }
}

export default {
  state,
  getters,
  mutations
}

import Mitaba from '@/backend/mitaba'
import bus from '@/event-bus'

const state = {
  key: 'local',
  guestKey: '',
  mode: '',
  avatar: 'static/img/040-ladybug.svg',
  email: '',
  firstName: 'Безымянный',
  lastName: 'Фрилансер',
  providers: []
}

const getters = {
  userKey: state => state.key,
  userGuestKey: state => state.guestKey,
  userMode: state => state.mode,
  userName: state => {
    if (state.firstName && state.lastName) {
      return `${state.firstName} ${state.lastName}`
    } else if (!state.firstName && !state.lastName) {
      return state.email
    } else {
      return state.firstName || state.lastName
    }
  },
  userProfile (state) {
    const fields = [
      'avatar',
      'email',
      'firstName',
      'lastName',
      'providers'
    ]
    const profile = {}
    fields.forEach(f => {
      profile[f] = state[f]
    })
    return profile
  }
}

const mutations = {
  setUserKey (state, payload) {
    state.key = payload.key
  },
  setUserGuestKey (state, payload) {
    state.guestKey = payload.guestKey
  },
  setUserMode (state, payload) {
    state.mode = payload.mode
  },
  setUserProfile (state, payload) {
    const fields = [
      'avatar',
      'email',
      'firstName',
      'lastName',
      'providers'
    ]
    fields.forEach(f => {
      state[f] = payload[f]
    })
  },
  clearUser (state, payload) {
    state.key = ''
    state.guestKey = ''
    state.mode = ''
    state.avatar = 'static/img/040-ladybug.svg'
    state.email = ''
    state.firstName = payload.locale === 'en' ? 'Unknown' : 'Безымянный'
    state.lastName = payload.locale === 'en' ? 'Freelancer' : 'Фрилансер'
    state.providers = []
  },
  setUnknownFreelancer (state, payload) {
    if (state.firstName.match(/Unknown|Безымянный/)) {
      state.firstName = payload.locale === 'en' ? 'Unknown' : 'Безымянный'
    }
    if (state.lastName.match(/Freelancer|Фрилансер/)) {
      state.lastName = payload.locale === 'en' ? 'Freelancer' : 'Фрилансер'
    }
  }
}

const actions = {
  getProfile (context, payload) {
    return Mitaba.getProfile().then(profile => {
      context.commit('setUserProfile', {
        email: profile.email,
        firstName: profile.first_name,
        lastName: profile.last_name,
        avatar: profile.avatar,
        providers: profile.providers
      })
      return profile
    }).catch(error => {
      const content = `Get Profile: ${error.message || error.response.statusText}`
      bus.$emit('toast', { content, type: 'error' })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

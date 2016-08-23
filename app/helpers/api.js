import { ref } from 'config/constants'

export function saveCheckin (checkin) {
  const checkinId = ref.child('checkins').push().key
  return ref.child(`checkins/${checkinId}`).set({...checkin, checkinId})
}

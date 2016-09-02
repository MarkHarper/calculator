import { ref } from 'config/constants'

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set(user)
    .then(() => user)
}

export function saveCheckin (checkin) {
  const checkinId = ref.child('checkins').push().key
  return ref.child(`checkins/${checkinId}`).set({...checkin, checkinId})
}

export function saveGoalToFirebase (user, goal) {
  return ref.child(`users/${user.get('uid')}/goal`)
    .set(goal)
}

// export function listenToGoals (cb, error) {
//   return ref.child('goal').on('value', (snapshot) => {
//     return cb(snapshot.val() || {})
//   }, error)
// }

// export function fetchGoals (user) {
//   return ref.child(`users/${user.get('uid')}/goal`)
// }

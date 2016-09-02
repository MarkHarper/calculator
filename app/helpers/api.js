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

export function listenToGoals (user, cb, error) {
  return ref.child(`users/${user.get('uid')}/goal`).on('value', (snapshot) => {
    return cb(snapshot.val() || {})
  }, error)
}

export function fetchGoal (user) {
  return ref.child(`users/${user.get('uid')}/goal`)
}

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

export function fetchUsersGoal (uid) {
  return ref.child(`users/${uid}/goal`).once('value')
    .then((snapshot) => snapshot.val() || {})
}

export function saveBasicInfoToFirebase(user, info) {
  return ref.child(`users/${user.get('uid')}/info`)
    .set(info)
}

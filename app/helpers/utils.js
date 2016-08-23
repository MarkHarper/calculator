export function formatUserInfo (name, avatar, uid) {
  return {
    name,
    avatar,
    uid,
  }
}

export function formatCheckin (user, protein, fats, carbs, currentWeight, currentBodyFat) {
  return {
    timestamp: Date.now(),
    user: user,
    protein,
    fats,
    carbs,
    currentWeight,
    currentBodyFat,
  }
}

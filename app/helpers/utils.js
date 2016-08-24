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
    userId: user.get('uid'),
    protein,
    fats,
    carbs,
    currentWeight,
    currentBodyFat,
  }
}

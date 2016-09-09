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

export function formatGoal (currentWeight, currentBodyFat, targetWeight, targetBodyFat) {
  return {
    timestamp: Date.now(),
    currentWeight,
    currentBodyFat,
    targetWeight,
    targetBodyFat,
  }
}

export function formatPieData (data) {
  return [
    {
      name: 'Proteins',
      value: data.proteins,
    },
    {
      name: 'Fats',
      value: data.fats,
    },
    {
      name: 'Carbs',
      value: data.carbs,
    },
  ]
}

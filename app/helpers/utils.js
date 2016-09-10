export function formatUserInfo (name, avatar, uid, preferredName, dateOfBirth, email) {
  return {
    name,
    avatar,
    uid,
    preferredName: preferredName ? preferredName : '',
    dateOfBirth: dateOfBirth ? dateOfBirth : '',
    email: email ? email : '',
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

export function formatGoal (data) {
  return {
    timestamp: Date.now(),
    currentWeight: data.currentWeight,
    currentBodyFat: data.currentBodyFat,
    targetWeight: data.targetWeight,
    targetBodyFat: data.targetBodyFat,
    exerciseTime: data.exerciseTime,
    exerciseIntensity: data.exerciseIntensity,
    fatPreference: data.fatPreference,
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

export function formatUserInfo (name, avatar, uid, preferredName, email, height) {
  return {
    name,
    avatar,
    uid,
    preferredName: preferredName ? preferredName : '',
    email: email ? email : '',
    height: height ? height : '',
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

export function formatPieData (data, kcals) {
  return kcals === true
  ? [
    {
      name: 'Protein',
      value: data.proteins,
    },
    {
      name: 'Fat',
      value: data.fats,
    },
    {
      name: 'Carbs',
      value: data.carbs,
    },
  ]
  : [
    {
      name: 'Protein',
      value: parseInt(data.proteins / 4),
    },
    {
      name: 'Fat',
      value: parseInt(data.fats / 9),
    },
    {
      name: 'Carbs',
      value: parseInt(data.carbs / 4),
    },
  ]
}

export function validateEmail (email) {
  let re = /^(([^<>()[\]\\.,:\s@\']+(\.[^<>()[\]\\.,:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

export function validateBirthDay (dateString) {
  dateString.replace('-', '/')
  // First check for the pattern
  if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(dateString)) {
    return false
  }

  // Parse the date parts to integers
  let parts = dateString.split('-')
  let day = parseInt(parts[2], 10)
  let month = parseInt(parts[1], 10)
  let year = parseInt(parts[0], 10)
  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month === 0 || month > 12) {
    return false
  }

  let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]

  // Adjust for leap years
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29
  }

  // Check the range of the day
  if (!(day > 0 && day <= monthLength[month - 1])) {
    return false
  }

  // Check the age
  return calculateAge(dateString) >= 25
}

function calculateAge (birthday) {
  let ageDifMs = Date.now() - new Date(birthday).getTime()
  let ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

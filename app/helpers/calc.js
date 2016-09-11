
/*
Fat Loss:
2lbs per weeks (BMI >= 30)
1 pound per week (BMI <30 && >=25)
0.5 lb per week or less (BMI < 25)

Muscle Gain:
2.5lbs per month (exp. < 2yrs)
1.5lbs per month (exp. >2yrs && <4yrs)
0.5lbs per month (exp. > 4yrs)

BMI Formula
( Weight * 703 ) / ( height^2 )
*/

export function macroCalc (data) {
  let cal = data.targetWeight * (data.exerciseTime + data.exerciseIntensity)
  return {
    proteins: data.targetWeight * 4,
    carbs: data.targetWeight * 9 * data.fatPreference,
    fats: cal - (data.targetWeight * 4) - (data.targetWeight * 9 * data.fatPreference),
  }
}

export function timelineCalc (data) {
  let dataArray = []
  let cBF = data.currentBodyFat / 100
  let cBW = data.currentWeight

  // calculate current/target lean mass
  let cLM = data.currentWeight - (data.currentWeight * (cBF))
  let tLM = data.targetWeight - (data.targetWeight * (data.targetBodyFat / 100))
  let week = 0

  while (((cBF * 100) > data.targetBodyFat || cLM < tLM || cBW > data.targetWeight) && week < 36) {
    // Fat Loss
    if ((cBF * 100) > data.targetBodyFat || cBW > data.targetWeight) {
      cBF = ((cBF * cBW) - 0.5) / cBW
    }

    // Muscle Gain
    if (cLM < tLM) {
      cLM += (2.5/4)
    }
    
    // Calculate new body weight from lean mass and body fat mass
    cBW = (cLM * 100) / (100 - (100 * cBF))
    week = week + 1
    dataArray.push({
      weight: cBW,
      bodyFat: cBF * 100,
      week: week,
    })
  }
  return dataArray
}

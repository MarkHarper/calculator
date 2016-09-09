
/*
Fat Loss:
// 2lbs per weeks (BMI >= 30)
// 1 pound per week (BMI <30 && >=25)
0.5 lb per week or less (BMI < 25)

Protein Gain:
2.5lbs per month (exp. < 2yrs)
// 1.5lbs per month (exp. >2yrs && <4yrs)
// 0.5lbs per month (exp. > 4yrs)
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
  let cLM = data.currentWeight - (data.currentWeight * (cBF))
  let tLM = data.targetWeight - (data.targetWeight * (data.targetBodyFat / 100))

  while ((cBF * 100) > data.targetBodyFat || cLM < tLM) {
    if ((cBF * 100) > data.targetBodyFat) {
      cBF = ((cBF * cBW) - 0.5) / cBW
    }

    if (cLM < tLM) {
      cLM += 2.5
    }
    cBW = (cLM * 100) / (100 - (100 * cBF))

    dataArray.push({
      weight: cBW,
      bodyFat: cBF * 100,
    })
  }

  return dataArray
}


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
  let cal = parseInt(data.targetWeight * (data.exerciseTime + data.exerciseIntensity))
  return {
    proteins: parseInt(data.targetWeight * 4),
    fats: parseInt(data.targetWeight * 9 * data.fatPreference),
    carbs: parseInt(cal - (data.targetWeight * 4) - (data.targetWeight * 9 * data.fatPreference)),
    cal: cal,
  }
}

export function timelineCalc (data) {
  if (data.currentBodyFat && data.targetBodyFat) {
    let dataArray = []
    let cBF = data.currentBodyFat / 100
    let cBW = data.currentWeight
    let h2 = data.height * data.height

    // calculate current/target lean mass
    let cLM = data.currentWeight - (data.currentWeight * (cBF))
    let tLM = data.targetWeight - (data.targetWeight * (data.targetBodyFat / 100))
    let week = 0
    while (((cBF * 100) > data.targetBodyFat || cLM < tLM || cBW > data.targetWeight) && week < 36) {
      // calculate BMI
      let bmi = 703 * (cBW / h2)

      // Fat Loss
      if ((cBF * 100) > data.targetBodyFat || cBW > data.targetWeight) {
        if (bmi < 25) {
          cBF = ((cBF * cBW) - 0.5) / cBW
        } else if (bmi >= 25 && bmi < 30) {
          cBF = ((cBF * cBW) - 1) / cBW
        } else {
          cBF = ((cBF * cBW) - 2) / cBW
        }
      }

      // Muscle Gain
      if (cLM < tLM) {
        if (week < 104) {
          cLM += (2.5 / 4)
        } else if (week >= 104 && week < 208) {
          cLM += (1.5 / 4)
        } else {
          cLM += (0.5 / 4)
        }
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
  } else {
    let fCal = data.currentWeight * (data.exerciseTime + data.exerciseIntensity)
    let nCal = data.targetWeight * (data.exerciseTime + data.exerciseIntensity)
    let cBW = data.currentWeight
    if (data.targetWeight < data.currentWeight) {
      let dataArray = []
      let lbsPerWeek = ((fCal - nCal) * 7) / 3500
      let week = 0
      while (cBW > data.targetWeight) {
        cBW = cBW - lbsPerWeek
        week = week + 1
        dataArray.push({
          weight: parseInt(cBW),
          bodyFat: 0,
          week: week,
        })
      }
      return dataArray
    } else if (!data.targetWeight > data.currentWeight) {
      let dataArray = []
      let lbsPerWeek = ((nCal - fCal) * 7) / 3500
      let week = 0
      while (cBW < data.targetWeight) {
        cBW = cBW + lbsPerWeek
        week = week + 1
        dataArray.push({
          weight: parseInt(cBW),
          bodyFat: 0,
          week: week,
        })
      }
      return dataArray
    } else {
      let dataArray = []
      dataArray.push({
        weight: parseInt(data.currentWeight),
        bodyFat: 0,
        week: 1,
      })
      return dataArray
    }
  }
}

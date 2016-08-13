{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
        appsAvailable
      }
    }
  },
  apps: {
    macros: {
      userStats: {
        currentWeight,
        currentBodyFat,
        currentTrainingHours,
        currentTrainingIntensity,
        targetWeight,
        targetBodyFat,
        fatConsumptionPreference
      },
      nutrientStatsDaily: {
        protein,
        carbs,
        fats,
        calories
      },
      performance: {
        daysToTarget,
        checkinSuccessRate
      }
    }
  },
  modal: {
    checkin,
    isOpen
  },
  checkins: {
    [checkinId]: {
      lastUpdated,
      info: {
        avatar,
        checkinId,
        name,
        timestamp,
        uid,
        type,
        updateStats: {
          protein,
          fats,
          carbs,
          calories,
          currentWeight,
          currentBodyFat
        }
      }
    }
  },
  listeners: {
    [listenerId]: true
  }
}
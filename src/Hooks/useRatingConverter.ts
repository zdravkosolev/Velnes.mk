export const useRatingConverter = (list: any) => {
    let valuesFromList: number[] = Object.values(list)
    let totalSum = 0

    for (let index = 0; index < valuesFromList.length; index++) {
        totalSum += valuesFromList[index]

    }

    return (totalSum / valuesFromList.length).toFixed(1)

}


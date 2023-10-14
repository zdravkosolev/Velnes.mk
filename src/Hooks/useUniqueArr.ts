export const useUniqueArr = (data: any) => {
    let customArr: string[] = [];

    data.forEach((el: any) => {
        if (!customArr.find((elArr: any) => elArr === el)) {
            customArr.push(el);
        }
    });



    return customArr;

}


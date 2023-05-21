// Функция используется для объединения двух массивов, чередуя их элементы, используется для отрисовки сообщений в чате

/* 
@params {
    arr1 - сообщения главного пользовтеля
    arr2 - сообщения собеседника
}
*/

const concatArr = (arr1: Array<string>, arr2: Array<string>) => {

    let res = [];
    let resLength = arr1.length + arr2.length;

    for (let i=0; i<resLength; i++) {
        if(arr1[i]) {
            let messObj = {
                id: 1,
                message: arr1[i]
            }
            res.push(messObj);
        }
        if(arr2[i]) {
            let messObj = {
                id: 2,
                message: arr2[i]
            }
            res.push(messObj);
        }
    }

    return res;

}

export default concatArr;

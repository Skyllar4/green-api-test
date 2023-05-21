export interface responseChatList {
    recendId: number,
    guessNumber: string,
    textMessage: string
}

/* 
    Проверка и очитска стэка уведомлений
    @params 
    instence - инстенс нашего юзера
    apiToken - Токен нашего юзера
    notificatinsArr - Массив, с результатами запросов, передается рекурсивно, пока не очитится стэк уведомлений
*/

async function getMessages(instence: string, apiToken: string, notificatinsArr: Array<responseChatList> = []) {

    let arr;
    let res = {
        recendId: 0,
        guessNumber: '',
        textMessage: ''
    } // Объект, который будет матировать и пушиться в notificatinsArr

    await fetch(`https://api.green-api.com/waInstance${instence}/receiveNotification/${apiToken}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(function (result)  {
        if (result === null) {
            arr = notificatinsArr;
        } else if (result.body.messageData && result.body.messageData.typeMessage === 'textMessage') {
            res.recendId = result.receiptId;
            res.guessNumber = result.body.senderData.sender.slice(0, -5);
            res.textMessage = result.body.messageData.textMessageData.textMessage;
            notificatinsArr.push(res);
            deleteNotification(res.recendId, instence, apiToken); // args
            getMessages(instence, apiToken, notificatinsArr); // args
        } else {
            deleteNotification(result.receiptId, instence, apiToken);
            getMessages(instence, apiToken, notificatinsArr); // args
         }
    })
    .catch(error => console.log('error', error));
    arr = notificatinsArr
    return arr;
}

const deleteNotification = async (notificationNumber: number, instence: string, apiToken: string) => {
    await fetch(`https://api.green-api.com/waInstance${instence}/deleteNotification/${apiToken}/${notificationNumber}`, {
        method: 'DELETE'
    })
    .then(response => response)
    .catch(error => console.log('error', error));
}

export default getMessages;

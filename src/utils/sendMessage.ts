import axios  from "axios";

interface messageData {
    chatId: string,
    message: string
}

const sendMessage = async (messageData: messageData, instance: string, apiToken: string) => {
    await axios.post(`https://api.green-api.com/waInstance${instance}/sendMessage/${apiToken}`, messageData)
    .then(function (res) {
        return res;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    })
    return;
} 

export default sendMessage;

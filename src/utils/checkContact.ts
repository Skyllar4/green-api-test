import axios  from "axios";

const checkContact = async (instance: string, apiToken: string, numberCheck: string) => {

    let res;

    await axios.post(`https://api.green-api.com/waInstance${instance}/checkWhatsapp/${apiToken}`, JSON.stringify({
        "phoneNumber": numberCheck
      }))
    .then(function (response) {
        res = response.data.existsWhatsapp;
    })
    .catch(function (error) {
        console.log(error);
        return false;
    })
    return res;

}

export default checkContact;

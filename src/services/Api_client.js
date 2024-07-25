import axios from "axios"

export async function getSongs (artistName){
    const URL = `https://itunes.apple.com/search?term=${artistName}&limit=25`;
    const response = await axios.get(URL);
    return response;
}

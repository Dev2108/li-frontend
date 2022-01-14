const BASE_URL = 'http://localhost:8001/api'

class  Config  {

    static responseUrl = `${BASE_URL}/response/`;
    static registerUrl =`${BASE_URL}/register/`;
    static tokenUrl =`${BASE_URL}/token/`;
    static refreshTokenUrl =`${BASE_URL}/token/refresh/`;
    static indexUrl =`${BASE_URL}/link/`;
    static fileUploadUrl = `${BASE_URL}/upload_file/`;
    static shortlistUrl = `${BASE_URL}/shortlist/`;
    static candidateListToolbarUrl = `${BASE_URL}/link/?`;
    static userUrl = `${BASE_URL}/user/`;
  
}
  export default Config;
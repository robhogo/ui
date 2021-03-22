import Repository from "@/repositories/repository.js";

const resource = "/user";

export default  {
    Login(request) {
        var response = Repository.post(`${resource}/authenticate`, request)
        .catch(error =>{
            response = error.response;
        });
        return response
    },
    Register(request) {
        return Repository.post(`${resource}/register`, request)
        .catch(error =>{
            return error.response;
        });
    },
    GetAll() {
        return Repository.get(`${resource}/`)
        .catch(error =>{
            return error.response;
        });
    }
}
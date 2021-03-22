import Repository from "@/repositories/repository.js";

const resource = "/user";

export default {
    Login(request) {
        return Repository.post(`${resource}/authenticate`, request)
            .catch(error => {
                return null;
            })
            .then(response => {
                if (response.status == 200) {
                    var token = JSON.stringify(response.data.token);
                    localStorage.setItem("token", token);
                    return token;
                }
                else {
                    return null;
                }
            });
    },
    Register(request) {
        return Repository.post(`${resource}/register`, request)
            .catch(error => {
                return error.response;
            })
            .then(response => {
                if (response.status == 200) {
                    return true;
                }
                else {
                    return false;
                }
            });
    },
    GetAll() {
        return Repository.get(`${resource}/`)
            .catch(error => {
                return error.response;
            });
    }
}
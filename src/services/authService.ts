import http from './http';
import AuthenticateRequest from "@/requests/AuthenticateRequest";
import RegisterRequest from "@/requests/RegisterRequest";

export default class AuthService {
 public async Login(request : AuthenticateRequest): Promise<String> {
    const response =  await http.post(`/user/authenticate`, request);
    return response.data;
  }

  public async Register(request : RegisterRequest): Promise<String> {
    const response =  await http.post(`/user/register`, request);
    return response.data;
  }
}

// A singleton instance
export const authService = new AuthService();
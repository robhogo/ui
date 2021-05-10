import http from './http';
import AuthenticateRequest from "@/requests/AuthenticateRequest";
import RegisterRequest from "@/requests/RegisterRequest";

export default class AuthService {
  private baseUrl: string = process.env.VUE_APP_USER;

 public async Login(request : AuthenticateRequest): Promise<String> {
   console.log(process.env.VUE_APP_USER);
    const response =  await http.post(`${this.baseUrl}/user/authenticate`, request);
    return response.data;
  }

  public async Register(request : RegisterRequest): Promise<String> {
    const response =  await http.post(`${this.baseUrl}/user/register`, request);
    return response.data;
  }
}

// A singleton instance
export const authService = new AuthService();
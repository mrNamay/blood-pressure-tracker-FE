import { AuthenticationApi, BloodPressureApi } from "./api";
import { Configuration } from "./configuration";

const getAccessToken = () => localStorage.getItem('token') || "";

export const authenticationApi = new AuthenticationApi(new Configuration({
    accessToken: getAccessToken,
}), undefined, fetch);

export const bloodPressureApi = new BloodPressureApi(new Configuration({
    accessToken: getAccessToken,
}), undefined, fetch)
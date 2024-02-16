import instance from "../axiosConfig/instance";

export const register = (data) => {
    return instance.post('user/addUser',data)
}
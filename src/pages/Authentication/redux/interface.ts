export interface LoginResponse {
    access_token: string
}
// export interface LoginRequest {
//     username: string,
//     password: string
// }
export interface LoginPayload {
    email: string,
    password: string,
};
export interface SignUpPayload{
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    phone: number,
    nationality: string,
    gender: Gender,
    password: string,
};

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other',
}

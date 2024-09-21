export default interface User{
    id: string;
    email: string;
    pseudo: string;
    role: string;
    password: string;
    created_at: string;
    first_name?: string;
    last_name?: string;
}
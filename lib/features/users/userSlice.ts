import  Url  from '../../Url';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import User from '@/lib/interface/users.interface';

interface userState {
    user: User | null
    status: "idle" | "loading" | "success" | "failed";
    error: string | null
};

const initialState: userState = {
    user: null,
    status: "idle",
    error: null
};

export const login = createAsyncThunk("users/logging", async (data: string) => {

    const response = await axios.get(Url.whoIsConnected, {
        headers: {
            Authorization: `Bearer ${data}`
        }
    });
    return response.data
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: state => {
            localStorage.removeItem("token");
            state.user = null;
            state.status = "idle";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })

            .addCase(login.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
            })

            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});



export const selectUser = (state: any) => state.user.user;
export const selectUserStatus = (state: any) => state.user.status;
export const { logout } = userSlice.actions;


export default userSlice.reducer;
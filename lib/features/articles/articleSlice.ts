import  Url  from '../../Url';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Article from '@/lib/interface/articles.interface';

interface articleState {
    article: Article[] 
    status: "idle" | "loading" | "success" | "failed";
    error: string | null
};

const initialState: articleState = {
    article: [],
    status: "idle",
    error: null
};

export const getArticles = createAsyncThunk("articles/getAll", async (data: string) => {

    const response = await axios.get(Url.getAllArticle, {
        headers: {
            Authorization: `Bearer ${data}`
        }
    });
    return response.data
});

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.status = "loading";
            })

            .addCase(getArticles.fulfilled, (state, action) => {
                state.status = "success";
                state.article = action.payload;
            })

            .addCase(getArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    },
});



export const selectArticle = (state: any) => state.article.article;
export const selectArticleStatus = (state: any) => state.article.status;


export default articleSlice.reducer;
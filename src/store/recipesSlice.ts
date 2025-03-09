import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "@/api/getRecipes";

export const fetchRecipes = createAsyncThunk(
  "recipes/search",
  async (data, _thunkAPI) => {
    const response = await getRecipes(data);
    return response;
  }
);

const initialState = {
  isLoading: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRecipes.pending, (state, action) => {});
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {});
  },
});

export default recipeSlice.reducer;

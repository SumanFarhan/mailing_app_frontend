import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.error = null;
    },
},
loginFailure: (state, action) => {
  state.isAuthenticated = false;
  state.error = action.payload;
},
},);

export const addSignupUser = createAsyncThunk(
    'user/add',
    async (data, thunkApi) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        };
        const res = await fetch('http://localhost:3007/signupUser', requestOptions)
        return res.json();
    }
)

// export const addLoginUser = createAsyncThunk(
//     'user/login',
//     async (data, thunkApi) => {
//         const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         };
//         console.log("inside login reducer");
//         const res = await fetch('http://localhost:3007/loginUser', requestOptions)
//         console.log("after login reducer");
//         return res.json();
//     }
// )


export const addLoginUser = createAsyncThunk('user/login', async (credentials) => {
    try {
      const response = await fetch('http://localhost:3007/loginUser', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        // Handle successful login
        return response.json();
      } else {
        // Handle login failure
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      // Handle network or other errors
      throw new Error(error.message);
    }
  });



const initialState = {
    userData: [],
    loginData: [],
    redirectToDashboard: false
}


export const addUser = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [addSignupUser.rejected]: (state) => {
            console.log('Signup Rejected');
        },
        [addSignupUser.fulfilled]: (state, action) => {
            console.log(JSON.stringify(action.payload));
            console.log('Signup done...');
            state.response = action.payload.message;
            alert(state.response);
        },
        [addSignupUser.pending]: state => {
            console.log('Signup Pending...');
        },
        [addLoginUser.pending]: state => {
            console.log('login Pending...');
        },
        [addLoginUser.fulfilled]: (state, action) => {
            state.loginData = action.payload;
            alert("Logedin Successfully",state.loginData)
            console.log('login done...');
            state.redirectToDashboard = true;
        },
        [addLoginUser.rejected]: (state) => {
            alert("Please create an Account!!")
        }
    }

})

export const { SignupReducer, LoginReducer ,} = addUser.actions
export const { loginSuccess, loginFailure } = authSlice.actions;

export default addUser.reducer 
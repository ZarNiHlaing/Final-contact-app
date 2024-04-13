import { ApiService } from "../service/ApiService";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    SignIn: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        body: arg,
      }),
    }),
    SignUp: builder.mutation({
      query: (arg) => ({
        url: "/register",
        method: "POST",
        body: arg,
      }),
    }),
    profile: builder.query({
      query: () => "user-profile",
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation ,useProfileQuery } = authEndpoints;

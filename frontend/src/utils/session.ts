import { GET } from "./axios";

export const fetchSessionAPI = async (dispatch: any) => {
    const response = await GET("/api/user/session");
    if (response?.data) {
      dispatch({
        type: "LOG_IN",
        payload: {
          isAuthenticated: response?.data?.isAuthenticated,
          currentUser: response?.data?.user,
        },
      });
    }
  };

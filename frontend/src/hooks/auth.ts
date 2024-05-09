import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppStore } from "store";

type CurrentUser = {
  id?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  name?: string;
};

export function useCurrentUser(): CurrentUser | undefined {
  const [state] = useAppStore();
  return state.currentUser;
}

export function useIsAuthenticated() {
  const [state] = useAppStore();
  let result = state.isAuthenticated;
  return result;
}

export function useEventLogout() {
  const navigate = useNavigate();
  const [, dispatch] = useAppStore();

  return useCallback(() => {
    dispatch({ type: "LOG_OUT" });
    navigate("/", { replace: true });
  }, [dispatch, navigate]);
}

export function useAuthWatchdog(
  afterLogin: () => void,
  afterLogout: () => void
) {
  const [state, dispatch] = useAppStore();

  useEffect(() => {
    if (state.isAuthenticated) {
      afterLogin?.();
    } else {
      afterLogout?.();
    }
  }, [state.isAuthenticated, dispatch, afterLogin, afterLogout]);
}

import { forwardRef, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

import { APP_LINK_COLOR, APP_LINK_UNDERLINE } from "components/config";

export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
};

export interface AppLinkProps extends MuiLinkProps {
  children: ReactNode;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
}

const Link = forwardRef<any, AppLinkProps>(
  (
    {
      children,
      color = APP_LINK_COLOR,
      underline = APP_LINK_UNDERLINE,
      to = "",
      href,
      openInNewTab = Boolean(href),
      ...restOfProps
    },
    ref
  ) => {
    const propsToRender = {
      color,
      underline,
      ...(openInNewTab && EXTERNAL_LINK_PROPS),
      ...restOfProps,
    };
    return href ? (
      <MuiLink ref={ref} href={href} {...propsToRender}>
        {children}
      </MuiLink>
    ) : (
      <MuiLink
        ref={ref}
        component={RouterLink}
        to={to as string}
        {...propsToRender}
      >
        {children}
      </MuiLink>
    );
  }
);

export default Link;

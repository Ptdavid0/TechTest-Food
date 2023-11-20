import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "src/theme/theme";

export const renderWithTheme = (children: React.ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

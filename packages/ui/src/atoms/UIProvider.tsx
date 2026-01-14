import { createTheme, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "../globals.css";

const theme = createTheme({
  colors: {
    brand: [
      "#c9e5bb", // 50 - lightest
      "#a6d592", // 100
      "#83c569", // 200
      "#60b540", // 300
      "#3da517", // 400
      "#2f8011", // 500 - base
      "#1e590a", // 600
      "#143f08", // 700
      "#0a2605", // 800
      "#040e02", // 900 - darkest
      "#020702", // 950
    ],
  },
  radius: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.625rem",
    xl: "0.75rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  primaryColor: "brand",
  defaultRadius: "md",
  fontFamily: '"Inter", sans-serif',
});

type Props = {
  children: ReactNode;
  withToaster?: boolean;
};

export default function UIProvider({ children, withToaster }: Props) {
  return (
    <MantineProvider theme={theme}>
      {children}
      {withToaster && (
        <Toaster
          toastOptions={{
            className: "!px-2.5 !py-1.5 !rounded-xl text-base dark:!bg-zinc-800 dark:!text-white shadow-lg",
          }}
          containerClassName="hello"
        />
      )}
    </MantineProvider>
  );
}

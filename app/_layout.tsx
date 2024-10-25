import { AuthenticationProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      {/* Authentication Provider */}
      <AuthenticationProvider>
        <Slot />
      </AuthenticationProvider>
    </>
  );
}

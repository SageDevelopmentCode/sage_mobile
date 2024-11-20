import { useFonts } from "expo-font";
import {
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import {
  Raleway_600SemiBold,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Raleway_600SemiBold,
    Nunito_900Black,
    Raleway_700Bold,
  });

  return fontsLoaded;
};

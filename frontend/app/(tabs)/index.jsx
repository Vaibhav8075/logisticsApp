import { Text, View } from "react-native";
import "../global.css"
import {Camera} from "lucide-react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Camera/>
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

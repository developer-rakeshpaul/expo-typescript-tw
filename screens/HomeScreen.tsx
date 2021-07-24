import * as React from "react";
import tailwind from "tailwind-rn";

import { Text, View } from "../components/Themed";

export default function HomeScreen() {
  return (
    <View style={tailwind("pt-12 items-center")}>
      <View style={tailwind("bg-blue-200 px-3 py-1 rounded-full")}>
        <Text style={tailwind("text-blue-800 font-semibold")}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getHeaderHeight } from "../../utils/utils";

export const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    height: getHeaderHeight(),
    width: "100%",
    backgroundColor: "grey",
  },
});

import { StyleSheet, View } from "react-native";
import { Excersise } from "../models/Excersise";

interface Props {
  excersise: Excersise;
}

export const ExcersiseListItem: React.FC<Props> = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: "#334E59",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

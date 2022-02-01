import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getDeviceWidth } from "../../utils/utils";

export enum Tabs {
  PROFILE = "Profile",
  HISTORY = "History",
  WORKOUT = "Workout",
  EXCERSISES = "Excersises",
  MEASURE = "Measure",
}

interface Props {
  setActiveTab: React.Dispatch<React.SetStateAction<Tabs>>;
}

export const Footer: React.FC<Props> = (props) => {
  const { setActiveTab } = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.tabs} onPress={() => setActiveTab(Tabs.PROFILE)}>
        <Icon size={32} name="user-alt" />
        <Text>Profile</Text>
      </Pressable>
      <Pressable style={styles.tabs} onPress={() => setActiveTab(Tabs.HISTORY)}>
        <Icon size={32} name="history" />
        <Text>History</Text>
      </Pressable>
      <Pressable style={styles.tabs} onPress={() => setActiveTab(Tabs.WORKOUT)}>
        <Icon size={32} name="plus" />
        <Text>Workout</Text>
      </Pressable>
      <Pressable
        style={styles.tabs}
        onPress={() => setActiveTab(Tabs.EXCERSISES)}
      >
        <Icon size={32} name="dumbbell" />
        <Text>Excersises</Text>
      </Pressable>
      <Pressable style={styles.tabs} onPress={() => setActiveTab(Tabs.MEASURE)}>
        <Icon size={32} name="weight" />
        <Text>Measure</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  tabs: {
    color: "#FFF",
    width: getDeviceWidth() / 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Dimensions } from "react-native";

export const HEADER_HEIGHT = 74;
export const FOOTER_HEIGHT = 60;

export const getDeviceWidth = () => {
  return Dimensions.get("window").width;
};

export const getContentViewHeight = () => {
  return Dimensions.get("window").height + 35 - HEADER_HEIGHT - FOOTER_HEIGHT;
};

export const getHeaderHeight = () => {
  return HEADER_HEIGHT;
};

export const getFooterHeight = () => {
  return FOOTER_HEIGHT;
};

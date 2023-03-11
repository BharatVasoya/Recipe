import React from "react";
import { Image, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

import COLORS from "../constant/Color";
import HomeScreen from "../screens/Home";
import BookmarkScreen from "../screens/Bookmark";
import ProfileScreen from "../screens/Profile";
import { FONT_SIZE } from "../constant/Constant";
import IMAGES from "../constant/Images";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Tab display option
const TabOption = ({ img, isFocus }) => {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={img}
                resizeMode='contain'
                style={{
                    tintColor: isFocus ? COLORS.PRIMARY : COLORS.GREY,
                    width: hp(3.5),
                    height: hp(3.5),
                }}
            />
        </View>
    )
}

// Home screen option
function HomeScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        options={{ title: "Home", headerShown: false, gestureEnabled: false }}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

// Bookmark screen option
function BookmarkScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="BookmarkScreen">
      <Stack.Screen
        options={{
          title: "Bookmark",
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Bookmark"
        component={BookmarkScreen}
      />
    </Stack.Navigator>
  );
}

// Profile screen option
function ProfileScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        options={{
          title: "Profile",
          headerShown: false,
          gestureEnabled: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.BLACK,
        showLabel: false,
        labelStyle: {
          textTransform: "none",
          fontSize: FONT_SIZE.SMALL,
        },
        style: {
          backgroundColor: "rgba(249, 249, 249, 0.94)",
          height: "10%",
          borderTopWidth: 0.3,
          borderTopColor: COLORS.GREY,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenStack}
        options={{
          title: "Home",
          headerShown: false,
          gestureEnabled: false,
          tabBarIcon: ({ focused }) => (
            <TabOption
              img={IMAGES.TabHome}
              isFocus={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreenStack}
        options={{
          title: "Bookmark",
          headerShown: false,
          gestureEnabled: false,
          tabBarIcon: ({ focused }) => (
            <TabOption
              img={IMAGES.TabBookmark}
              isFocus={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreenStack}
        options={{
          title: "Profile",
          headerShown: false,
          gestureEnabled: false,
          tabBarIcon: ({ focused }) => (
            <TabOption
              img={IMAGES.TabProfile}
              isFocus={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;

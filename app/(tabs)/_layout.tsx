import IonIcons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#656565ff",
        tabBarStyle: {
          backgroundColor: "#2c1d3dff",
          borderTopWidth: 1,
          borderTopColor: "orange",
          height: 80,
          padding: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <IonIcons size={size} color={color} name="flash-outline" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <IonIcons size={size} color={color} name="settings" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Produtos } from "../screens/Produtos";
import { Contatos } from "../screens/Contatos";
import { Entypo, Fontisto, Feather, FontAwesome } from "@expo/vector-icons";
import { Topo } from "../components/Header";
import { Detalhes } from "../screens/Detalhes";
import { CadastrarProdutos } from "../screens/CadastrarProdutos";
import { AtualizarProdutos } from "../screens/AtualizarProduto";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={Home}
        options={{
          headerTitle: () => <Topo />,
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ProdutosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos1"
        component={Produtos}
        options={{ headerTitle: () => <Topo /> }}
      />
      <Stack.Screen
        name="Detalhes"
        component={Detalhes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastrar"
        component={CadastrarProdutos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Atualizar"
        component={AtualizarProdutos}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const ContatosStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contatos1"
        component={Contatos}
        options={{ headerTitle: () => <Topo /> }}
      />
    </Stack.Navigator>
  );
};

export const RotasPrivadas = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#fff",
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProdutosStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Contatos"
        component={ContatosStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="group" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

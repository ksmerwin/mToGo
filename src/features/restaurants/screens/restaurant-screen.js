import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, View, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const RestaurantSearchContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <SafeArea>
      <RestaurantSearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </RestaurantSearchContainer>
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {},
});

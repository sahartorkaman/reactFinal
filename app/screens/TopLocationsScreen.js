import React, { useContext } from "react";
import { StyleSheet, FlatList, Text } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
// import ToplearnContext from "./../contexts/ToplearnContext";
import { useSelector } from "react-redux";
const TopLocationsScreen = () => {

    const courses = useSelector(state => state.courses);
    return (
        <Screen style={styles.container}>
           <Text>دوره های محبوب</Text>
        </Screen>
    );
};

export default TopLocationsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
});

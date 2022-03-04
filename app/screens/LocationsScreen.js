import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, FlatList, View, ScrollView, SafeAreaView, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";

import { decodeToken } from "../utils/token";
import { useSelector } from 'react-redux'
import Icon from "../components/shared/Icon";
import ItemSeparator from "../components/shared/ItemSeparator";
import CardH from "../components/shared/CardH";
import DrawerNavigator from "../containers/DrawerNavigator";
import { SearchBar } from "react-native-screens";
import SearchbarScreen from "./SearchbarScreen";
import ListSearchScreen from "./LisrSearchScreen";
const LocationsScreen = ({ navigation }) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();


    const courses = useSelector(state => state.locations);
    useEffect(() => {
        const myFunc = async () => {
            const token = await AsyncStorage.getItem("token");

        };
        myFunc();

        const getData = async () => {
            const apiResponse = await fetch(
                "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
            );
            const data = await apiResponse.json();
            setFakeData(data);
        };
        getData();

    }, []);

    return (
        <Screen style={styles.container}>

            {/* <DrawerNavigator /> */}


            {/* <TouchableOpacity

                onPress={navigation.openDrawer}
                Style={styles.style1}
            >


                <Icon name="airballoon" size={30} style={{

                    color: 'blue',
                    padding: 10,
                    margin: 5,
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',


                }} />

            </TouchableOpacity> */}
            <View style={styles.root}>
                <SafeAreaView >

                    <SearchbarScreen
                        searchPhrase={searchPhrase}
                        setSearchPhrase={setSearchPhrase}
                        clicked={clicked}
                        setClicked={setClicked}
                    />
                    {(

                        <ListSearchScreen
                            searchPhrase={searchPhrase}
                            setClicked={setClicked}
                            data={courses}


                        />

                    )}
                </SafeAreaView>
            </View>

            <ScrollView >
                <View >

                    <FlatList
                        horizontal={true}
                        data={courses}
                        keyExtractor={(course) => course._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LocationDetailsScreen", {
                                        course: item,
                                    })
                                }
                            >
                                <Card
                                    title={item.title}
                                    time="15:00:00"
                                    price={item.price}
                                    image={item.imageUrl}
                                    teacher=""
                                    info={item.info}
                                    stylee="0"

                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View >
                    <FlatList
                        horizontal={false}
                        data={courses}
                        keyExtractor={(course) => course._id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("LocationDetailsScreen", {
                                        course: item,
                                    })
                                }
                            >
                                <Card
                                    title={item.title}
                                    time="15:00:00"
                                    price={item.price}
                                    image={item.imageUrl}
                                    teacher=""
                                    info={item.info}
                                    stylee="1"

                                />
                            </TouchableOpacity>
                        )}
                    />
                </View>


            </ScrollView>

        </Screen>
    );
};

export default LocationsScreen;

const styles = StyleSheet.create({

    root: {
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        width: "100%",
        marginTop: 20,
        fontSize: 25,
        fontWeight: "bold",
        marginLeft: "10%",
    },
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    },
    style1: {
        marginTop: 100,
        padding: 15,

    }
});

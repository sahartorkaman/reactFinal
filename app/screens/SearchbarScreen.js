import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

const SearchbarScreen = ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    return (
        <View style={styles.container}>
            <View
                style={
                    clicked
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked
                }
            >

                {/* Input field */}
                <TextInput
                    style={styles.input}
                    placeholder=".....کجا می خوای بری"
                    value={searchPhrase}
                    onChangeText={setSearchPhrase}
                    onFocus={() => {
                        setClicked(true);
                    }}
                />
                {/* search Icon */}
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1 }}
                />
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {/* {clicked && (
                    <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                        setSearchPhrase("")
                    }} />
                )} */}
            </View>
            {/* cancel button, depending on whether the search bar is clicked or not */}
            {clicked && (
                <View>
                    {/* <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setClicked(false);
                        }}
                    ></Button> */}

                    <Entypo name="cross" size={20} color="black" style={{ padding: 1, width: '100%' }} onPress={() => {
                        setSearchPhrase("");
                        Keyboard.dismiss();
                        setClicked(false);
                    }} />
                </View>
            )}
        </View>
    );
};
export default SearchbarScreen;

// styles
const styles = StyleSheet.create({
    // container: {
    //     margin: 15,
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     flexDirection: "row",
    //     width: "90%",

    // },
    container: {
        backgroundColor: "lightgray",
        borderRadius: 20,
        flexDirection: "row",
        width: "90%",
        padding: 15,
        marginVertical: 10,

    },
    searchBar__unclicked: {
        padding: 15,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",

    },
    searchBar__clicked: {
        padding: 15,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: RFPercentage(2),
        fontFamily: "yekan",
        backgroundColor: 'white',
        marginLeft: 10,
        width: "90%",
        borderColor: 'white',
        textAlign: "center"
    }
}

);

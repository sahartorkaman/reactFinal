import React from "react";

import { View, StyleSheet, Image, ScrollView, } from "react-native";
import { numberWithCommas } from "../../utils/price";
import CustomText from "./CustomText";

const CardH = ({ title, price, teacher, time, image, Info = null, stylee }) => {

    return (
        <View style={styles.cardHorizontal} >
            <Image
                resizeMode="contain"
                source={{
                    uri: `https://rnapi.ghorbany.dev/${image}`,
                }}
                style={styles.courseImage}
            />
            <View style={{ padding: 10 }}>
                <CustomText fontFamily="yekan" size="1.5" styles={styles.title}>
                    {title}
                </CustomText>
                <View style={styles.courseDetails}>
                    <CustomText fontFamily="yekan" size="1.0">
                        قیمت دوره :
                        {price === 0
                            ? " رایگان"
                            : ` ${numberWithCommas(price)} تومان`}
                    </CustomText>
                    <CustomText fontFamily="yekan" size="1.0">
                        زمان دوره : {time}
                    </CustomText>
                </View>
                <View style={styles.userContainer}>
                    <CustomText
                        fontFamily="ih"
                        size="0.5"
                        styles={styles.teacher}
                    >
                        مدرس دوره : {teacher}
                    </CustomText>
                </View>
            </View>
            {Info ? (
                <View style={{ flex: 1 }}>
                    <CustomText fontFamily="yekan" size="2.0">
                        توضیحات دوره :
                    </CustomText>
                    <ScrollView>
                        <CustomText
                            fontFamily="ih"
                            size="1.2"
                            styles={styles.courseInformation}
                        >
                            {Info}
                        </CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

export default CardH;

const styles = StyleSheet.create({


    cardHorizontal: {
        marginTop: 5,
        padding: 5,

        //  backgroundColor: "teal",

        // color: "white",
        marginHorizontal: 5,
        //  height: 300,
        color: "black",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
    },
    courseImage: {
        width: "100%",
        height: 100,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 10,
        lineHeight: 25,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    userContainer: {
        marginVertical: 10,
    },
    title: {
        marginBottom: 7,
        alignSelf: "center",
    },
    teacher: {
        alignSelf: "center",
    },
});

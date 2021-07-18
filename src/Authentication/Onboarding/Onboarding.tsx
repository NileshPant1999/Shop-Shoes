import React, { useRef } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { multiply }  from 'react-native-reanimated'
import {interpolateColor, onScrollEvent, useScrollHandler, useValue} from 'react-native-redash'
import Slide from './Slide'
import Subslide from './Subslide'

const { width, height } = Dimensions.get("window")

const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: 0.61 * height,
        backgroundColor: "cyan",
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1,
    },
    footerContent: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    }
})


interface SlideProps{
    onPress(): void; 
}

export default function Onboarding() {

    const scroll =  useRef<Animated.ScrollView>(null);
    const {scrollHandler, x} = useScrollHandler();

    const slides = [
        {
            label: 'Relaxed',
            subtitle: 'Find Your Outfit',
            description: "Confused about your outfit? Don't worry! Find the best outfit here!",
            color: "#BFEAF5",
            picture: require("../assets/1.png"),
                
        },
        {
            label: 'Playful',
            subtitle: 'Hear it First, Wear it First',
            description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
            color: "#BEECC4",
            picture: require("../assets/2.png"),
               
        },
        {
            label: 'Original',
            subtitle: 'Your Style, Your Way',
            description: 'Create your individual & unique style and look amazing everyday',
            color: "#FFE4D9",
            picture:  require("../assets/3.png"),
        },
        {
            label: 'Funky',
            subtitle: 'Look Good, Feel Good',
            description: 'Discover the latest trends in fashion and explore your personality',
            color: "#FFDDDD",
            picture: require("../assets/4.png"),
                
        }
    ]

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_,i) => i*width),
        outputRange: slides.map(slide => slide.color),
    })

    
    return (
        <View style={styles.container}>
            <Animated.View 
                style={[styles.slider, { backgroundColor: backgroundColor as any }]}
                >
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    {...scrollHandler}
                    >
                        {slides.map(({ label, picture }, index) => (
                            <Slide key={index} right={!(index % 2)} {...{ label, picture }} />
                        ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor as any }} />
                <View style={styles.footerContent}>
                <Animated.View
                    style={{
                    flex: 1,
                    flexDirection: "row",
                    width: width * slides.length,
                    transform: [{ translateX: multiply(x, - 1) }]
                }}
                >
                    {slides.map(({ subtitle, description }, index) => (
                        <Subslide
                            key={index}
                            onPress={() => {
                                
                                if (scroll.current){
                                    scroll.current
                                    .getNode()
                                    .scrollTo({x: width * (index+1), animated: true})
                                }
                                return null;
                            }}
                            last={index === (slides.length - 1)} 
                            {...{ subtitle, description}}
                            
                            />
                    ))}
                </Animated.View>
            </View>  
        </View>
    </View>
    )
}


import React from 'react';
import { Platform, StyleSheet, Text, View, Switch } from 'react-native';
import Constants from 'expo-constants';
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import SwitchSelector from "react-native-switch-selector";

<Switch
        value={false}
        onValueChange={(val) => console.log(val)}
        disabled={false}
        activeText={require('../../assets/icons/list.png')}
        inActiveText={require('../../assets/icons/maps.png')}
        backgroundActive={'green'}
        backgroundInactive={'gray'}
        circleActiveColor={'#30a566'}
        circleInActiveColor={'#000000'}/>


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        // headerTransparent: true,
        headerStyle: {
            marginRight:20,
            elevation:0
        },
        headerTintColor: '#636e72',
        headerRight: <SwitchSelector 
                        initial={0}
                        textColor='#FFF' 
                        selectedColor='#ccc'
                        buttonColor='#FFF'
                        backgroundColor='#ccc'
                        fontSize={0}
                        height={29}
                        buttonMargin
                        hasPadding
                        options={[
                            {label:"list",value: "maps", imageIcon: require('../../assets/icons/list.png')},
                            {label:"maps",value: "list", imageIcon: require('../../assets/icons/maps.png')}
                        ]}

                    />
    }

    constructor(props) {
        super(props)

        this.state = {
            location: {
                latitude: 0.556174,
                longitude: 123.058548,
            },
            errorMessage: null
        }
    }

    componentWillMount = () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: "Oops! Ini tidak berkerja di Android Emulator"
            })
        } else {
            this._getLocationAsync()
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== 'granted') {
            this.setState({
                errorMessage: "Permission to access location was denied"
            })
        }

        let location = await Location.getCurrentPositionAsync({})
        this.setState({
            location: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,

            }
        })
    }

    render() {
        const { navigate } = this.props.navigation
        
        const { latitude, longitude, latitudeDelta, longitudeDelta } = this.state.location
        return (
            <View style={styles.container}>
                <View style={{ 
                    height: 50, 
                    backgroundColor: '#FFF', 
                    paddingLeft: 17, 
                }}>
                    <Text style={{ color: '#ccc' }}>20 tempat cuci kendaraan di dekat anda</Text>
                </View>
                <MapView
                    style={{ flex: 1 }}
                    showsUserLocation
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

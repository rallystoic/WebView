/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
    useEffect,
    useState,
    Button
} from 'react-native';

const GetData = () => {
  //const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

    const SendLogin = async () => {
        try {
            const response = await fetch('http://45.64.184.37:8648/v1/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: 'mickey.csq@gmail.com',
                    password: 'abc1234*',
                    memberProfileComId : 3
                })
            });
            console.log(response.status);
            const json = await response.json();
            console.log(json);
            //setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            // setLoading(false);
        }
    }

    // useEffect(() => {
    //     SendLogin();
    // }, []);

     return (
         <View>
         <Text>Hello World!</Text>
         <Button
           onPress={SendLogin}
           title="login"
           color="#841584"
           accessibilityLabel="click to login"
         />
         </View>
     )
}


export default GetData;

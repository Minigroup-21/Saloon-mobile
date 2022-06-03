import React, {Component} from "react";
import { View, Text, Image, Dimensions, StyleSheet, Pressable, TouchableOpacity, } from "react-native";
import { FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, ScrollView } from "react-native-gesture-handler";

const {width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
    },
    inputContainer: {
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#e6e6fa',
        borderColor: "#e6e6fa",
        borderWidth: 1,
        width: width / 1.3,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 10,
        height: 40,
        
    }

})

export default function Login({navigation}) {
    state = {
        name: "",
    };

    handleText = (text) => {
        this.setState({ name: text});
    };

    return(
        <View style={styles.container}>

            <View>
            <Image 
            style={{
                width: 415,
                height: 260,
                marginTop: -30,
                borderBottomLeftRadius: 70,
                backgroundColor: '#e6e6fa',
            }}
            source={{
                uri:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}/>
            </View>
            <View style={{marginBottom: 10, marginTop: 40,marginRight: 210,}}>
                <Text style={{ color:"black", paddingBottom:20, fontSize: 30, fontWeight:'600'}}>Login</Text>                
            </View>    

            

            <View style={styles.inputContainer}>
                <Text style={{ paddingTop:10, paddingBottom: 10, color: "rgba(0,0,0,0.6)", fontSize:18,}}>Email</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{paddingTop:20,paddingBottom: 10, color:"rgba(0,0,0,0.6)", fontSize:18,}}>Password</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <TouchableOpacity>
                <Text style={{marginLeft:150, color:"#778899", fontSize:15 }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            
           style={{
               padding: 10, 
               flexDirection: "row",
               paddingHorizontal: 50,
               alignItems: 'center',
               borderRadius: 10,
               }}>
           <Text style={{marginTop: 10,fontWeight: '500', color: "grey" }}>Not a member?{" "}
           <Text style={{color: "orange", fontWeight: 'bold'}}>Signup</Text></Text> 
           </TouchableOpacity>

            <View>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Home")
              }}
              activeOpacity={0.15}
             style={{
                backgroundColor: '#663399',   
                padding: 20, 
                paddingHorizontal: 80,
                flexDirection: 'row',
                alignItem: 'center',
                borderRadius: 30, 
                marginTop: 40, 
            }}>
                <Text style={{ fontSize: 20 }}>LOGIN</Text>
            </TouchableOpacity> 
               
            </View>
            

           

    </View>
    );
    
}


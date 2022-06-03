import React, {Component} from "react";
import { View, Text, Image, Dimensions, StyleSheet, Pressable, TouchableOpacity, } from "react-native";
import { FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, ScrollView } from "react-native-gesture-handler";
import { render } from "react-dom";

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

});

export default function SignUp({navigation}) {
    
    return(
        <View style={styles.container}>

            <View>
            <Image 
            style={{
                width: 415,
                height: 260,
                marginTop: -45,
                borderBottomLeftRadius: 70,
                backgroundColor: '#e6e6fa',
            }}
            source={{
                uri:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2Fsb29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}}/>
            </View>
            <ScrollView>
            <View style={{marginBottom: 10, marginTop: 30,marginRight: 170,}}>
                <Text style={{ color:"black", paddingBottom:20, fontSize: 30, fontWeight:'600'}}>Sign-Up</Text>                
            </View>    

            <View style={styles.inputContainer}>
                <Text style={{ paddingTop:5, paddingBottom: 10, color: "rgba(0,0,0,0.6)", fontSize:18,}}>First Name</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ paddingTop:5, paddingBottom: 10, color: "rgba(0,0,0,0.6)", fontSize:18,}}>Last Name</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ paddingTop:5, paddingBottom: 10, color: "rgba(0,0,0,0.6)", fontSize:18,}}>Email</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{paddingTop:5,paddingBottom: 10, color:"rgba(0,0,0,0.6)", fontSize:18,}}>Password</Text>
                <TextInput style={styles.input}  onChangeText= {(text) => this.handleText(text)}/>
            </View>

            <TouchableOpacity>
                <Text style={{marginLeft:150, color:"#778899", fontSize:18 }}>Forgot Password?</Text>
            </TouchableOpacity>

            

            <View>

                

                <TouchableOpacity style={{
                backgroundColor: '#663399',   
                padding: 20, 
                marginLeft: 20,
                marginRight: 20,
                flexDirection: 'row',
                alignItem: 'center',
                borderRadius: 30, 
                marginTop: 30,
                justifyContent: 'center' 
            }}>
            <Text style={{ fontSize: 20 }}>SIGN UP</Text>
            </TouchableOpacity> 
               
            </View>

            <TouchableOpacity
            onPress={() => {
                navigation.navigate("Login")
              }}
              activeOpacity={0.18}
             style={{
                 flexDirection: "row",
                 padding: 10,
                 marginTop: -15,  
                 }}>
                    <Text style={{color:"rgba(0,0,0,0.6)", fontSize: 18, padding: 25}}>Already have an account? 
                    <Text style={{color:"#663399"}}>Click here to Login</Text>
            </Text>
            </TouchableOpacity>
            </ScrollView>

           

    </View>
    );
}
    



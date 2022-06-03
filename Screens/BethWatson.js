import React, {Component} from "react";
import { View, Text, Image, Dimensions, StyleSheet, Pressable, TouchableOpacity, } from "react-native";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { TextInput, ScrollView } from "react-native-gesture-handler";

const {width, height } = Dimensions.get("screen");

export default function BethWatson({navigation}){
    return (
        <View  style={{flex:1, backgroundColor:"white",}}>
                   


            <View>
            <Image 
                style={{
                    width: width / 1,
                    height: 230,
                    //marginTop: 5
                    
                }}
                source={{
                    uri: "https://media.istockphoto.com/photos/hair-saloon-interior-chair-mirror-hairdryer-electric-lamp-bicycle-picture-id1309102043?b=1&k=20&m=1309102043&s=170667a&w=0&h=ViLAlM8NlF6UwC3E74sBoND4XrBb3TyOHJ0bdb3zgns="
                }}
                />
            </View>

            <View style={{marginLeft: 320, marginRight: 23, padding: 20, backgroundColor: 'white', borderRadius: 50, marginTop: -30}}>
                <FontAwesome5 name="heart" size={26} color="black" />
            </View>

            <View style={{flexDirection:'row', marginBottom: 50, marginTop:-90}}>
                        <Image
                        style ={{
                            width: 160,
                            height: 200,
                            flexDirection:'row-reverse',
                            marginRight:30,
                            borderRadius: 20
                        }} 
                        source ={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KULSDWZe9TintTPReI6sMpdI_gcAvKxT7A&usqp=CAU"
                        }}/>     
                    </View>
           

    

            <View style={{marginTop: -160, paddingTop: 20, alignItems: 'flex-end', paddingRight: 30}}>
                <Text style={{fontWeight: '500', fontSize: 25}}>Beth Watson</Text>

                <View style={{flexDirection:'row', marginTop:8, paddingRight: 63}}>
                    <View style={{marginRight: -30, flexDirection:'row'}}>
                        <FontAwesome name="star" size={18} color="#663399"/>
                        <Text style={{color:"#663399",fontSize:18, marginLeft: 5}}>4.7 (1000)</Text>
                    </View>
                </View>

            </View>


            











            <View style={{marginTop: 70, paddingTop: 20, paddingLeft: 20}}>
                <Text style={{fontWeight: '500', fontSize: 25}}>Service List</Text>
            </View>

            <View style={{
                    backgroundColor: 'white',   
                    padding: 20,
                    paddingTop: 20,
                    paddingBottom:15, 
                    width: 390,
                    height: 80,    
                    
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>Men's Hair Cut</Text>
                        <Text style={{color:"grey",fontSize:15,fontWeight:'300',marginTop:8}}>45 Min</Text>            
                    </View> 

                    <View style={{paddingLeft: 30,}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>$30</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', paddingHorizontal: 50,paddingTop: 2 }}>



                     <View>   
                    <TouchableOpacity
                     
                     style={{
                         backgroundColor: 'orange',   
                         borderRadius: 30,
                         padding: 10,
                         paddingLeft: 30,
                         paddingRight: 30, 
                         }}>
                     <Text style={{color: "white", fontSize: 18 }}>Book</Text>
                     </TouchableOpacity>
                     </View>   
                </View> 


                </View>
                <View style={{
                    backgroundColor: 'white',   
                    padding: 20,
                    paddingTop: 5,
                    paddingBottom:15, 
                    width: 390,
                    height: 70,    
                    
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>Women's Hair Cut</Text>
                        <Text style={{color:"grey",fontSize:15,fontWeight:'300',marginTop:8}}>60 Min</Text>            
                    </View> 

                    <View style={{paddingLeft: 0,}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>$30</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', paddingHorizontal: 50,paddingTop: 2 }}>



                     <View>   
                    <TouchableOpacity
                     
                     style={{
                         backgroundColor: 'orange',   
                         borderRadius: 30,
                         padding: 10,
                         paddingLeft: 30,
                         paddingRight: 30, 
                         }}>
                     <Text style={{color: "white", fontSize: 18 }}>Book</Text>
                     </TouchableOpacity>
                     </View>   
                </View> 

                

                </View>

                <View style={{
                    backgroundColor: 'white',   
                    padding: 20,
                    paddingTop: 5,
                    paddingBottom:15, 
                    width: 390,
                    height: 70,    
                    
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>Color & Blow Dry</Text>
                        <Text style={{color:"grey",fontSize:15,fontWeight:'300',marginTop:8}}>90 Min</Text>            
                    </View> 

                    <View style={{paddingLeft: 10,}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>$30</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', paddingHorizontal: 50,paddingTop: 2 }}>



                     <View>   
                    <TouchableOpacity
                     
                     style={{
                         backgroundColor: 'orange',   
                         borderRadius: 30,
                         padding: 10,
                         paddingLeft: 30,
                         paddingRight: 30, 
                         }}>
                     <Text style={{color: "white", fontSize: 18 }}>Book</Text>
                     </TouchableOpacity>
                     </View>   
                </View> 

                
                </View>

                <View style={{
                    backgroundColor: 'white',   
                    padding: 20,
                    paddingTop: 5,
                    paddingBottom:15, 
                    width: 390,
                    height: 90,    
                    
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItem: 'center',
                    borderRadius: 15, 
                    marginTop: 20,}}>
                    <View style={{alignItems: 'flex-start', flexDirection: 'column'}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>Oil Treatment</Text>
                        <Text style={{color:"grey",fontSize:15,fontWeight:'300',marginTop:8}}>30 Min</Text>            
                    </View> 

                    <View style={{paddingLeft: 40,}}>
                        <Text style={{color:"black",fontSize:20, fontWeight: '500'}}>$30</Text>
                    </View>

                    <View style={{alignItems: 'flex-end', paddingHorizontal: 50,paddingTop: 2 }}>



                     <View>   
                    <TouchableOpacity
                     
                     style={{
                         backgroundColor: 'orange',   
                         borderRadius: 30,
                         padding: 10,
                         paddingLeft: 30,
                         paddingRight: 30, 
                         }}>
                     <Text style={{color: "white", fontSize: 18 }}>Book</Text>
                     </TouchableOpacity>
                     </View>   
                </View> 

                
                    
            </View> 

            
            
                
                 

                

        </View>
        



    );
}


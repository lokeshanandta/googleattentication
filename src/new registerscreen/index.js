import { useNavigation } from '@react-navigation/native'
import React,{useState} from 'react'
import {View,TextInput,Text, TouchableOpacity,Modal, ScrollView} from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'

function NewUser ({navigation}){
  // const navigation=useNavigation()
  const [userName,setUserName]=useState()
  const [userNumber,setUserNumber]=useState()
  const [usermail,setUserMail]=useState()
  const [useraddress,setUserAddress]=useState()
  const [userLocation,setUserLocation]=useState()
  const [showModal,setShowModal]=useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  return(<View style={{flex:1,backgroundColor:"#365b85"}}>
    <View style={{margin:10,alignSelf:"center",}}>
      <Text style={{fontSize:30,fontWeight:"bold",color:"black"}}>New Register</Text>
    </View>
    <ScrollView>
    <View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Name</Text>
<View style={{borderColor:"black",borderWidth:2,height:40,}}>
<TextInput onChangeText={(el)=>setUserName(el)} style={{height:"100%",width:"100%"}}/></View></View>
<View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Mobile</Text>
<View style={{borderColor:"black",borderWidth:2,height:40}}>
<TextInput onChangeText={(el)=>setUserNumber(el)}/></View></View>
<View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>email</Text>
<View style={{borderColor:"black",borderWidth:2,height:40}}>
<TextInput onChangeText={(el)=>setUserMail(el)}/></View></View>
<View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Address</Text>
<View style={{borderColor:"black",borderWidth:2,height:40}}>
<TextInput onChangeText={(el)=>setUserAddress(el)}/></View></View>
<View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>Location</Text>
<View style={{borderColor:"black",borderWidth:2,height:40}}>
<TextInput onChangeText={(el)=>setUserLocation(el)}/></View></View>
<View style={{margin:10}}>
<Text style={{fontSize:20,fontWeight:"bold",color:"black"}}>State</Text>

<View style={{marginTop:10}}>
<AutocompleteDropdown
  clearOnFocus={false}
  closeOnBlur={true}
  closeOnSubmit={false}
  // initialValue={{ id: '2' }} // or just '2'


  direction={'up'}
  dataSet={[
    { id: '1', title: 'Andhra pradesh' },
    { id: '2', title: 'Tamil nadu' },
    { id: '3', title: 'Arunachal Pradesh' },
    { id: '4', title: 'Assam' },
    { id: '5', title: 'Bihar ' },
    { id: '6', title: 'Chhattisgarh' },
    { id: '7', title: 'Dadra and Nagar Haveli' },
    { id: '8', title: 'Delhi' },
    { id: '9', title: 'Goa' },
    { id: '10', title: 'Gujarat' },
    { id: '11', title: 'Haryana' },
    { id: '12', title: 'Himachal Pradesh' },
    { id: '13', title: 'Jammu and Kashmir' },
    { id: '14', title: 'Jharkhand' },
    { id: '15', title: 'Karnataka' },
    { id: '16', title: 'Kerala' },
  ]}
/>
</View></View>
</ScrollView>
<TouchableOpacity onPress={()=>setShowModal(!showModal)}
style={{height:50,width:100,backgroundColor:"skyblue",alignSelf:"center",flexDirection:"column-reverse",alignItems:"center",justifyContent:"center",}}>
<Text style={{fontSize:20}}>Sumit</Text></TouchableOpacity>

<Modal
        animationType='fade'
        transparent={true}
        visible={showModal}
      >
<View  style={{ backgroundColor:'white',height:250,marginLeft:20,marginTop:250,borderRadius:10,marginRight:20}}>

     <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
          <Text>Name</Text>
         <Text >{userName}</Text></View>
         <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>     
          <Text>Mobile</Text>
          <Text>{userNumber}</Text></View>
          <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
          <Text>email</Text>
          <Text>{usermail}</Text></View>
          <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
          <Text>Address</Text>
          <Text>{useraddress}</Text></View>
          <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
          <Text>Location</Text>
          <Text>{userLocation}</Text></View>
  </View>
        <View style={{flexDirection:"row",marginHorizontal:50,height:50,justifyContent:"space-between",backgroundColor:"white"}}>
          <TouchableOpacity onPress={()=>navigation.navigate("Map")} style={{height:30,backgroundColor:"green",width:100,borderWidth:1,borderColor:"black",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>ok</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setShowModal(!showModal)} style={{height:30,backgroundColor:"red",width:100,borderWidth:1,borderColor:"black",borderRadius:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:16,fontWeight:"bold",color:"white"}}>Cancel</Text>
          </TouchableOpacity>
          </View>      
  </Modal>
  
  </View>)
}


export default NewUser
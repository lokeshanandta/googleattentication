import React ,{useEffect,useState}from 'react'
import {View,TouchableOpacity,Image,TextInput,Text} from 'react-native'
import { GoogleSignin ,GoogleSigninButton,statusCodes } from '@react-native-community/google-signin'



function SigninScreen ({navigation}) {
  const [userInfo,setUserInfo] = useState()
const [isLoginScreenPresented,setIsLoginScreenPresented] = useState()
const [currentUser,setCurrentUser] = useState()
const [user,setUser] = useState()
const [mailData,setmailData]=useState()
    const [PasswordData,setpassworddata]=useState()
  GoogleSignin.configure()
useEffect(()=>{signInSilently})

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);
      console.log(userInfo,"lokeshanand")
      setmailData(userInfo.user.email)
      setpassworddata(userInfo.user.id)
    navigation.navigate("NewUser")

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    // console.log(userInfo)
  };

const signInSilently=()=>{
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo)
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

}

isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  setIsLoginScreenPresented(!isSignedIn);
};

getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
 setCurrentUser( currentUser );
};

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUser(user)// Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};

revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    console.log('deleted');
  } catch (error) {
    console.error(error);
  }
};



    return(
     
      
<View style={{flex:1,backgroundColor:"#365b85",justifyContent:"center",alignItems:"center"}}>
  <View style={{height:40,width:40,backgroundColor:"white",marginTop:70}}>
  <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2111/2111393.png'}}
  style={{height:40,width:40}}
  />
  </View>
  <View >
  <View style={{height:40,width:200,borderBottomWidth:2,backgroundColor:"#365b85",borderBottomColor:"white",marginTop:40}}>
  <TextInput
  onChangeText={(i)=>{setmailData(i)}}
  style={{height:'100%'}}
  placeholder={"Email or Phone"}
  placeholderTextColor="white"
  />
  </View>

   <View style={{height:40,borderBottomWidth:2,backgroundColor:"#365b85",borderBottomColor:"white"}}>
  <TextInput
  onChangeText ={(i)=>{setpassworddata(i)}}
  style={{height:'100%'}}
  placeholder={"Password"}
  
  placeholderTextColor="white"
  />
  </View>
<TouchableOpacity>
  <View style={{height:30,backgroundColor:"#84acd9",marginTop:40,justifyContent:"center",alignItems:"center"}}>
 <Text>Login</Text>
  </View>
  </TouchableOpacity>
  </View>
  <TouchableOpacity  onPress={()=>signIn()} style={{height:30,width:50,borderRadius:20,marginTop:100,alignSelf:"center",marginLeft:20,}}>
    <Image source={{uri:'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'}}
    style={{height:40,width:35}}/>
  </TouchableOpacity>
  </View>
  
  
)
}
// export default app
export default SigninScreen

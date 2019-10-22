 // Crear nuevo usuario con Google
export const loginGoogle = () =>{
  console.log('login con google');
// funcion de firebase que hace la autentificacion con google
  var provider = new firebase.auth.GoogleAuthProvider ();
 
  firebase.auth().signInWithPopup(provider).then(res =>{
    const user = res.user;
    console.log('RES USER',user);
    let userrd = user.uid;
    let userName = splitGoogleDisplayName (user.displayName)
    saveUserToDataBaseAfterLogin(user.userName);
  })
  .catch(err =>{
    console.log('el error es',err)
  })
}
// funcion que va a recibir displayName  y los va a separar  en primer nombre y segundo nombre 
const splitGoogleDisplayName = (displayName) =>{
 let splitDisplayNameArray = displayName.split("");
 let userName = {
   firstName = splitDisplayNameArray[0],
   lastName = splitDisplayNameArray[1]
 }  
 return userName;
}
//  esta funcion guarda al usuario en los datos después de iniciar sesión
const saveUserToDataBaseAfterLogin = (user,userName)=>{

console.log("uid:",user.uid,"email:",user.email,"firstName:",userName.firstName,"lastName:",userName.lastName);

}
















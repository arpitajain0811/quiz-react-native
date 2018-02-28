import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  login: {
    backgroundColor: 'rgb(23,34,76)',
    flex:1,
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height:"100%",
  },
  loginBox:{
    flex:1,
    width:60,
    justifyContent: 'center',
    height:60,
  },
  welcomeQuizzy:{
    backgroundColor: 'rgb(106,197,240)',
    flex:1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    width:50,
    top:50,
  },
  quizzy:{
    color:'white',
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop:5,
  }
});
export default styles;


// .Quizzy{
//     color:white,
//     font-size: 35px,
//     font-weight: bold,
//     font-family: Helvetica, sans-serif,
//     padding-top:5%,
// }
// .Welcome{
//     font-size: 25px,
//     font-weight: bold,
//     font-family:  Helvetica, sans-serif,
// }
// .LoginForm{
//     background-color: white,
//     display: flex,
//     flex-direction: column,
//     justify-content: space-between,
//     padding:5%,
//     width:40%,
//     padding-top:10%,
//     padding-bottom:10%,
// }
// .LoginHeading{
//     text-align: left,
//     font-family:  Helvetica, sans-serif,
//     font-weight: bold,
//     font-size: 18px,
// }
// .Input{
//     text-align: left,
//     text-align: left,
//     font-family:  Helvetica, sans-serif,
//     font-weight: bold,
//     font-size: 15px,
// }
// .UserInput{
//     width:100%,
//     flex-grow:1,
//     height:25px,
//     margin-top:5px,
//     border:2px solid black,
// }
// .LoginBtn{
//     border: 2px solid black,
//     border-radius: 10px,
//     width:65%,
//     margin-bottom:10%,
//     font-family:  Helvetica, sans-serif,
//     font-weight: bold,
//     font-size: 14px,
//     padding:10px,
// }
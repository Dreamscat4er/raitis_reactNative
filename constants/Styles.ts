import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
    
  },
  text: {
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  input: {
    borderRadius:5,
    borderWidth:1,
    borderColor:'black',
    height:40,
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:'yellow',
    margin:10,
  },
  separator: {
    width: 1,
    height: '100%', 
    backgroundColor: 'black', 
  },
  mapview: {
    flex: 1,
    width: '100%'
  },
  map: {
    width: '100%',
    height: '100%',
  }

})

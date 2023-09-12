import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    classLight:"light-mode",
    classDark:"dark-mode",
    user:[]
   

  },
  getters: {
   
  },
  mutations: {
   darkmode(state) {
    state.classDark =(state.classDark == "light-mode")? "dark-mode":"light-mode";
   },
  setUsers(state ){
    return state.user ;

  }
 

  },
  actions: {
   darkmode(context){
    return context.commit('darkmode')
   },
//    useraxios(context) {
//     axios
//     .get("http://localhost:8080/jsonusers/index.json")
//     .then(response => {
//       return context.commit('setUsers',response.data)

        
//     })            
// },


useraxios() {
  return new Promise((resolve, reject) => {
    
    axios.get(`${"http://localhost:8080/jsonusers/index.json"}`).then((response) => {
          //  (response.data);
          resolve(response.data);
        
      }).catch((error) => {
          reject(error);
        })
  });
}
  
  },
  modules: {
    state:{

    },

  }
})

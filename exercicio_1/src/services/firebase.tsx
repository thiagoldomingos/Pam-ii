    //Função do SDK FireBase que inicializa um aplicativo FireBase com as configurações fornecidas
import { initializeApp } from "firebase/app";
    // Função do SDK FireBase que retorna uma instância de serviço de autenticação
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBW91owYWaERbmIFg6i8D5TeB0OG4Xe8o4",
    authDomain: "cadastronome-9c3f3.firebaseapp.com",
    projectId: "cadastronome-9c3f3",
    storageBucket: "cadastronome-9c3f3.appspot.com",
    messagingSenderId: "825215626747",
    appId: "1:825215626747:web:1c6dde3f3c7e9dd7cfef5e",
    measurementId: "G-MCY4V1YKHH"
  };

    //Inicializa o aplicativo Firebase com a configuração fornecida e retorna uma instância do aplicativo Firebase
const app = initializeApp(firebaseConfig);

    //Obtém a instância do serviço de autenticação do Firebase para o aplicativo inicializado. A instância obtida é exportada como auth
export const auth =getAuth(app);
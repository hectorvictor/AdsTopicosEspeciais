import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {

  var camera = 'https://img2.gratispng.com/20180509/hxq/kisspng-computer-icons-logo-instagram-clip-art-5af396c385dd81.7999945015259132835483.jpg';
  var instagram = 'https://marcas-logos.net/wp-content/uploads/2020/01/Instagram-Logo.png';
  var igtv = 'https://i.pinimg.com/originals/7e/8f/b8/7e8fb85cc943b7cac0e29f073c47c475.png';
  var direct = 'https://static.thenounproject.com/png/3084968-200.png';

  var pessoa = 'https://media.semprefamilia.com.br/semprefamilia/2019/10/capa-mentalmente-fortes-620x349-4d44b41a.png';
  var pessoa1= 'http://www.ignicaodigital.com.br/wp-content/uploads/2014/02/facebook-pessoas.jpg';
  var pessoa2 = 'https://imagens.brasil.elpais.com/resizer/R3NtMFGecCj9y5NE_ZFYV6wcyJA=/768x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/6TE7TL7D4YWZFV2TFRSGNGN6JE.jpg';
  var pessoa3 = 'https://www.familia.com.br/wp-content/uploads/2019/12/Pessoas-felizes-n%C3%A3o-t%C3%AAm-tempo-para-criticar-a-vida-dos-outros-700x525.jpg';
  var pessoa4 = 'https://osegredo.com.br/wp-content/uploads/2018/04/pessoas-sinceras-s%C3%A3o-830x450.jpg';
  var perfil = 'https://scontent.fmgf4-2.fna.fbcdn.net/v/t1.0-9/96422170_2944422068972332_4423719871389368320_o.jpg?_nc_cat=102&ccb=3&_nc_sid=84a396&_nc_ohc=hPxqCmPsOSEAX_ksmH3&_nc_ht=scontent.fmgf4-2.fna&oh=a8759b78828ace4acd3fc56047e5847f&oe=605F2E66';
  var ponto = 'https://img.flaticon.com/icons/png/512/61/61140.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF';
  var paisagem = 'https://images.madeiramadeira.com.br/product/images/99157190-adesivo-parede-paisagem-estrada-viagem-natureza-gg567prdfs89loibybfcc-179-1-800x729.jpg';
  var casa = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAFA2tIZC5xoGm_dOUe5wL878SnKCjUNTlw&usqp=CAU';
  var pesquisa = 'https://img2.gratispng.com/20180601/sce/kisspng-magnifying-glass-computer-icons-clip-art-instagram-circle-5b1183ddc13263.5640386315278745257914.jpg';
  var coracao = 'https://e7.pngegg.com/pngimages/106/393/png-clipart-computer-icons-heart-like-button-symbol-heart-heart-black.png';
  var usuario = 'https://e7.pngegg.com/pngimages/223/244/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-rectangle.png';
  var quadrado = 'https://lh3.googleusercontent.com/proxy/0j80PtqrKd-TKAR7SjRTB97BiIZutZ9ZM5357AU0GlcZ4OC_j94Pbe7nGlLUyR66KFLRLPDhTJtx6UIOh8FPxIPfyh6thONCuVT3pgoczDJwLMc4RtSIaeIiin50puHmr_prX5ayLCS2RHD-kZNb6Bj1ycnXgflwzqUbS52tz2vJOFSBDHDKHpPzC27jR-1ubvNOeQ';
  return (
    <View style={styles.container}>
      <View style = {styles.menu}>
        <Image
        style= {{height: 35, width:35}} 
        source = {{uri: camera,}}/>

        <Image
        style= {{height: 40, width:120, left: 20}} 
        source = {{uri: instagram,}}/>

        <Image
        style= {{height: 35, width:35, left: 20, borderRadius: 15}} 
        source = {{uri: igtv,}}/>

        <Image
        style= {{height: 35, width:35}} 
        source = {{uri: direct,}}/>
      </View>
      <View style = {styles.story}>
        <View style = {styles.texto}>
          <Text style = {{fontWeight:'bold'}}>Stories</Text>
          <Text style = {{fontWeight:'bold'}}>WatchAll</Text>
        </View>
        <View style = {styles.fotos}>
            <View>
             <Image 
               style= {{height: 70, width:70,  borderRadius: 40, borderColor:'#ff4d94', borderWidth: 2}} 
                source = {{uri:pessoa,}}/>
              <Text> Your Story</Text>
            </View>

            <View>
             <Image 
               style= {{height: 70, width:70,  borderRadius: 40, borderColor:'#ff4d94', borderWidth: 2}} 
                source = {{uri:pessoa1,}}/>
              <Text>   ninanyc</Text>
            </View>

            <View>
             <Image 
               style= {{height: 70, width:70,  borderRadius: 40, borderColor:'#ff4d94', borderWidth: 2}} 
                source = {{uri:pessoa2,}}/>
              <Text>chrisrobinp</Text>
            </View>

            <View>
             <Image 
               style= {{height: 70, width:70,  borderRadius: 40, borderColor:'#ff4d94', borderWidth: 2}} 
                source = {{uri:pessoa3,}}/>
              <Text>   ashoke</Text>
            </View>

            <View>
             <Image 
               style= {{height: 70, width:70,  borderRadius: 40, borderColor:'#ff4d94', borderWidth: 2}} 
                source = {{uri:pessoa4,}}/>
              <Text>        ben</Text>
            </View>          
        </View>        
      </View>
        <View style = {styles.titulo}>
          <Image 
               style= {{height: 50, width:50,  borderRadius: 40}} 
                source = {{uri:perfil,}}/>
                <Text style = {{fontSize: 15, fontWeight:'bold', top: 15, left: 10}}>hectorvicto1</Text>

                <Image 
               style= {{height: 20, width: 10, left: 230, top: 15}} 
                source = {{uri:ponto,}}/>    
        </View>
        <View>
          <Image 
               style= {{height: 350, borderWidth: 1, borderColor: 'black'}} 
                source = {{uri:paisagem,}}/>               
        </View>
        <View style = {styles.rodape}>
            <Image 
               style= {{height: 40, width:40}} 
                source = {{uri:casa,}}/>

            <Image 
               style= {{height: 40, width:40}} 
                source = {{uri:pesquisa,}}/>
            <Image 
              style= {{height: 50, width:50}} 
                source = {{uri:quadrado,}}/>

            <Image 
               style= {{height: 50, width:50}} 
                source = {{uri:coracao,}}/>

            <Image 
               style= {{height: 40, width:40}} 
                source = {{uri:usuario,}}/>

        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'    
  },
  menu: {
    flexDirection: 'row',
    paddingTop: 30,
    margin: 20,
    justifyContent: 'space-between'   
  },
  story: {
    borderWidth: 0.5,
    borderColor: '#9c9996',    
     
  },
  texto: {
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 10    
  },  
  fotos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:5,
    bottom: 10
  },
  titulo: {
    flexDirection:'row',
    margin: 10,
    
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 10,
    margin: 2
    
  }

});

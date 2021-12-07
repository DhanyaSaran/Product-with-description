
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchPosts } from '../action/index'

let products = []

class ImageIcon extends React.Component {
    

    componentDidMount() {
        this.props.fetchPosts() 
    }


    getlist = () => {
        const txs = this.props.posts.filter(x => x.category == 'EkoStore')
        products = txs.filter(x => x.ext_icon != undefined)
    }

display=(item)=>{
    return(
   
        item.ext_icon.includes('http') ?    
                            <View >

                                <TouchableOpacity key={item.id} style={styles.button} onPress={() => this.props.navigation.navigate('ProductsScreen',{item:item})} >
                                    <Image source={{ uri: item.ext_icon }} style={styles.image} />
                                </TouchableOpacity> 

                            </View>
                                  :<View>
                                    <TouchableOpacity key={item.id} style={styles.button} onPress={() => this.props.navigation.navigate('ProductsScreen',{item:item})} >
                                            <Image source={{ uri: `https://beta.ekoconnect.in/${item.ext_icon}` }} style={styles.image} />
                                    </TouchableOpacity>
                                 </View> 
   
   
    )
  

}
  

    render() {

        return (
            <View>
                {this.getlist()}
               
                <View style={{
                   justifyContent:'space-evenly',
                    marginTop:50,
                    flexWrap:'wrap',
                    flexDirection:'row'
                    
                }}>
                   
                    

                    {
                      this.props.allItems=='yes'?
                      products.map((item, index) => (
                        this.display(item)
                      ))
                      :''
                    }

                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(ImageIcon)


const styles = StyleSheet.create({
    image: {
        resizeMode:'contain',width:75,height:75
    },
    button:{
        // borderWidth:1,
        // borderColor:'black',
        width:90,
        height:90,
        justifyContent:'space-evenly',
        
    }
})
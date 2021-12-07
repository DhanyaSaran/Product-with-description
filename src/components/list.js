
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { fetchPosts } from '../action/index'

let products = []

class List extends React.Component {
    constructor() {
        super()

    }

    componentDidMount() {
        this.props.fetchPosts()
       
    }


    getlist = () => {

        const txs = this.props.posts.filter(x => x.category == 'EkoStore')
        products = txs.filter(x => x.ext_icon != undefined)
       console.log(products)
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
                        products.map((item, index) => (
                           
                           
                             item.ext_icon.includes('http') ?
                                //  item.id == 330 ?
                                <View >

                                    <TouchableOpacity key={item.id} style={styles.button} onPress={() => this.props.navigation.navigate('ProductsScreen',{item:item,others:products})} >
                                        <Image source={{ uri: item.ext_icon }} style={styles.image} />
                                    </TouchableOpacity> 

                                </View>
                                     : <View>
                                        <TouchableOpacity key={item.id} style={styles.button} onPress={() => this.props.navigation.navigate('ProductsScreen',{item:item, others:products})} >
                                                <Image source={{ uri: `https://beta.ekoconnect.in/${item.ext_icon}` }} style={styles.image} />
                                        </TouchableOpacity>
                                     </View>       
                       ))
                    }

                </View>

            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(List)


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










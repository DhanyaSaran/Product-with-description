import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet,Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';


let checkedArrayList=[],tempArray=[],newlist=[],itemnew=''
let random = []


class ProductsScreen extends React.Component {

    constructor() {
        super()
        for (let i = 0; i < 5; i++) {
            random = [...random, Math.floor(Math.random() * 20)]
        }
       
       // checkedArrayList= this.props.route.params.item.help_url.split(',').filter(x=>x.includes('http'))
    }

    componentDidUpdate() {
        random = []
        for (let i = 0; i < 5; i++) {
            random = [...random, Math.floor(Math.random() * 20)]
        }
        checkedArrayList=[]
    }

    image = (index, item) => 
    {
        for (var i = 0; i < 5; i++)
        {
            if (index == random[i]) 
            {
                return true
            }
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View >
                {
                    item.includes('.pdf')?<View/>:
                    <Image source={{uri:item}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width,resizeMode:'contain'}}/>
                }
                
            </View>
        );
    }

    render() {
      //  console.log(this.props.route.params.item)
        this.props.route.params.item.help_media_urls==undefined?checkedArrayList=[]:
    
        tempArray=this.props.route.params.item.help_media_urls.split(','),
        newlist=tempArray.filter(x=> x.includes('://') && !x.includes('.pdf') ),
        newlist.map((item,index)=>
        {
            item.includes('http')?
            checkedArrayList=[...checkedArrayList,item]
            :
            itemnew=item.replace('brands://','brands/')
            checkedArrayList=[...checkedArrayList,`https://files.eko.co.in/docs/ekostore/${itemnew}`]
        })

        
        
        
        console.log(checkedArrayList )
        return (
            <View style={{ marginTop: 100 }}>
               
                {
                   this.props.route.params.item.help_media_urls? 
                    <Carousel      
              data={checkedArrayList}
              renderItem={this._renderItem}
              itemWidth={Dimensions.get('window').height}
              sliderWidth={Dimensions.get('window').width}
            />:<View/>}
                
                
                
                <Image source={this.props.route.params.item.ext_icon.includes('http') ? { uri: this.props.route.params.item.ext_icon } : { uri: `https://beta.ekoconnect.in/${this.props.route.params.item.ext_icon}` }} style={{ width: 70, height: 30, resizeMode: 'contain' }} />
                <Text>{this.props.route.params.item.earn}</Text>
                <Text>{this.props.route.params.item.description}</Text>
                <Text>Customers who bought {this.props.route.params.item.label} also like</Text>
                <View style={{ flexDirection: 'row', padding: 30 }}>
                    {
            this.props.route.params.others.map((item, index) => (
            this.image(index, item) ?
                item.ext_icon.includes('http') ?
                                    //  item.id == 330 ?
                    <View >

                     <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('ProductsScreen', { item: item, others: this.props.route.params.others })} >
                     <Image source={{ uri: item.ext_icon }} style={styles.image} />
                     </TouchableOpacity>

                     </View>
                    : <View>
                     <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('ProductsScreen', { item: item, others: this.props.route.params.others })} >
                        <Image source={{ uri: `https://beta.ekoconnect.in/${item.ext_icon}` }} style={styles.image} />
                    </TouchableOpacity>
                    </View>
                    : <View />
                        ))
                    }
                </View>

               
            </View>
        )
    }
}
export default ProductsScreen


const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain', width: 75, height: 75, marginRight: 15
    },

})

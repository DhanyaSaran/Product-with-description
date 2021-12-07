import React from 'react'
import {Text,View,Image, Dimensions} from 'react-native'
import Carousel from 'react-native-snap-carousel';

const help_url="https://files.eko.co.in/docs/notification/image_1522751430726_2135.jpg,https://files.eko.co.in/docs/notification/image_1520680323995_3801.jpg,https://files.eko.co.in/docs/notification/image_1524221622871_1004.jpg,https://files.eko.co.in/docs/notification/image_1520681854655_1056.jpg,DHpMjZespno,https://files.eko.co.in:8080/docs/EnglishBolo_FAQs.pdf"
let checkedArrayList=help_url.split(',').filter(x=>x.includes('http'))

export default class Test1 extends React.Component
{

    _renderItem = ({item, index}) => {
        return (
            <View >
                {
                    item.includes('.pdf')?<View/>:
                    <Image source={{uri:item}} style={{width:Dimensions.get('window').width,height:Dimensions.get('window').width}}/>
                }
                
            </View>
        );
    }

    render()
    {
       
        return(
            <View style={{marginTop:100}}>
                <Carousel
              
              data={checkedArrayList}
              renderItem={this._renderItem}
              itemWidth={Dimensions.get('window').height}
              sliderWidth={Dimensions.get('window').width}
            

              
            />
            </View>
        )
    }
}
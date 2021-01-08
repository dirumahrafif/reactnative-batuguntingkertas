import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native'

export class Depan extends Component {
    state = {
        arrayTangan:[
            {nama:'gunting',lawan:'batu',simbol:'✌️'},
            {nama:'batu',lawan:'kertas',simbol:'✊'},
            {nama:'kertas',lawan:'gunting',simbol:'✋'},
        ],
        pilihanPemain:'',
        pilihanKomputer:'',
        jumlahMenangPemain:0,
        jumlahMenangKomputer:0
    }
    aksi(index){
        var indexRandom = Math.floor(Math.random() * this.state.arrayTangan.length);

        var pilihanKomputer = this.state.arrayTangan[indexRandom];
        var pilihanPemain = this.state.arrayTangan[index];

        this.setState({pilihanPemain:pilihanPemain.simbol});
        this.setState({pilihanKomputer:pilihanKomputer.simbol});

        if(pilihanPemain.nama == pilihanKomputer.lawan){
            this.setState({jumlahMenangPemain:this.state.jumlahMenangPemain+1});
        }
        if(pilihanPemain.lawan == pilihanKomputer.nama){
            this.setState({jumlahMenangKomputer:this.state.jumlahMenangKomputer+1});
        }
        
    }
    reset(){
        this.setState({pilihanPemain:''});
        this.setState({pilihanKomputer:''});
        this.setState({jumlahMenangPemain:0});
        this.setState({jumlahMenangKomputer:0});
    }
    render() {
        return (
            <View style={style.viewWrapper}>
                <View style={style.viewArena}>
                    <Text style={style.textTangan}>{this.state.pilihanPemain?this.state.pilihanPemain:this.state.arrayTangan[1].simbol}</Text>
                    <Text style={style.textPemain}>Pemain</Text>
                    <Text style={style.textSkor}>{this.state.jumlahMenangPemain}</Text>
                    <Text style={style.textCross}> x </Text>
                    <Text style={style.textSkor}>{this.state.jumlahMenangKomputer}</Text>
                    <Text style={style.textPemain}>Komputer</Text>
                    <Text style={style.textTangan}>{this.state.pilihanKomputer?this.state.pilihanKomputer:this.state.arrayTangan[1].simbol}</Text>
                </View>
                <View style={style.viewReset}>
                    <Button 
                        title="Reset Permainan"
                        onPress={()=>this.reset()}
                    />
                </View>
                <View style={style.viewTombol}>
                    {
                        this.state.arrayTangan.map((tangan,i)=>
                            <TouchableOpacity key={i} onPress={()=>this.aksi(i)}>
                                <Text style={style.textSimbol}>{tangan.simbol}</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>
            </View>
        )
    }
}
export const style = StyleSheet.create({
    viewWrapper:{
        flex:1
    },
    viewArena:{
        flex:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3f72af'
    },
    textTangan:{
        fontSize:50
    }, 
    textPemain:{
        fontSize:20, 
        marginLeft:5, 
        marginRight:5,
        color:'#FFFFFF'
    },
    textSkor:{
        width:30,
        height:30,
        borderRadius:30/2,
        backgroundColor:'#333333',
        padding:5, 
        textAlign:'center',
        justifyContent:'center',
        color:'#FFFFFF'
    },
    textCross:{
        color:'#FFFFFF'
    },
    viewReset:{
        padding:5
    },
    viewTombol:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    textSimbol:{
        fontSize:30, 
        marginLeft:30,
        marginRight:30,
        width:60,
        height:60,
        borderRadius:60/2, 
        borderWidth:1, 
        textAlign:'center',
        padding:10,
        backgroundColor:'#dfdfdf',
        borderColor:'#CCCCCC'
    }

})
export default Depan

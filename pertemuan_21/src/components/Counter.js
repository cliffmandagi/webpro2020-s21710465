import React, { Component, useState, useEffect } from "react";

// class Counter extends Component{
//    state ={
//             number:0,
//         };
//      componentDidMount(){
//             console.log("komponen di mount");
//         }
//     componentDidUpdate(){
//         console.log("komponen telah diperbaharui");
//     }
//     tambah=()=>{
//         this.setState({number:this.state.number+1})
//     }

//     kurang =()=>{
//     this.state.number<1
//         ? this.setState({number:0})
//         : this.setState({number:this.state.number-1});
//     }
//     render() {
//         console.log("komponen di render");
//         return (
//             <div>
//             <p>{this.props.title}</p>
//             <p>komponen ini sudah diklik sebanyak {this.state.number} kali</p>
//             <button onClick={this.tambah}>
//                 Tambah</button>
//             <button onClick={this.kurang}>
//             Kurang</button>
//             </div> 
//         );
//     }
// }


const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const [title, setTitle] = useState("Counter")

    useEffect(() => {
        console.log("Komponen telah di mount")
    }, [])

    const tambah = (params) => {
        setNumber(number + params)
    }
    const kurang = (params) => {
        number < 1 ? setNumber(0) : setNumber(number - 1)
    }

    return (
        <div>
            <p>{title}</p>
            <p>Komponen ini sudah diklik sebanyak {number} kali</p>
            <button onClick={() => tambah(1)}>Tambah</button>
            <button onClick={kurang}>Kurang</button>
        </div>
    )
}
export default Counter;
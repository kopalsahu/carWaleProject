import React from 'react';
import Modal from './modal'
const data = require('./data.json')

export default class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initData: {},
            carData: [],
            show: false
        }
    }
    componentDidMount() {
        this.setState({ carData: data, initData: data[0] })
    }
     
    render() {
        const { initData, show, carData } = this.state;
        const showModal = () => {
            this.setState({ show: true });
          };
        
        const hideModal = () => {
            this.setState({ show: false });
        };
        const changeInitData = (version) => {
         let d = carData.filter((d)=> d.carType === version)
         this.setState({initData : d[0],show: false})
        }
        return (
            <>
                {Object.keys(initData).length && <div style={{
                    height: '60px',
                    width: '20%', border: '3px solid black',
                    marginLeft: '100px',
                    marginTop: '100px'
                }}>
                    <span style={{ display: 'block', height: '50%', marginLeft: '5px', marginTop: '7px', color: 'darkgrey' }}>Version</span>
                    <span style={{ display: 'inline-block', height: '50%', marginLeft: '5px', color: 'darkslategrey' }}>{initData.carType}</span>
                    <span style={{
                        display: 'inline-block', marginLeft: '15px',
                        color: 'darkgrey'
                    }} onClick={showModal}> > </span>
                </div>}
                {show && <Modal show={this.state.show} handleClose={hideModal} data={carData} changeInitData={changeInitData}/>}
            </>
        )
    }
}
import React from 'react';
import './style.css';

class Modal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           carData : []
        }
    }
    componentWillMount () {
        this.setState({carData : this.props.data})
    }
    render() {
        const { handleClose, show, customClassName, children, changeInitData, data } = this.props;
        const showHideClassName = show ? "modal display-block" : "modal display-none";
        const { carData } = this.state;
        const checkFuel = (e) => {
            console.log(e.target.value)
            if(e.target.value === 'FuelType') {
                this.setState({carData : data})
            } else {
            let d = data.filter((d) => d.actionType === e.target.value)
            this.setState({carData : d})
            }
        }
        const checkPrice = (e) => {
            console.log(e.target.value)
            if(e.target.value === 'SortBy') {
                this.setState({carData : data})
            } else if(e.target.value === 'HighToLow') {
            let d = data.sort((a,b) => b.price - a.price)
            this.setState({carData : d})
            } else {
                let d = data.sort((a,b) => a.price - b.price)
                this.setState({carData : d})
            }
        }
        //   const customClass = customClassName ? customClassName : null;
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    <span className="close-button" onClick={handleClose} value="close"> {`<   Select Version`} </span>
                    <select style ={{ marginLeft : '15px', marginTop : '13px'}}onChange={(e)=> {checkFuel(e)}}>
                        <option value="FuelType">FuelType</option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                    </select>
                    <select style ={{ marginLeft : '15px', marginTop : '13px'}}onChange={(e)=> {checkPrice(e)}}>
                        <option value="SortBy">SortBy</option>
                        <option value="HighToLow">HighToLow</option>
                        <option value="LowToHigh">LowToHigh</option>
                    </select>
                    <div style={{ marginTop: '30px' }}><br />
                        <hr /></div>
                    <div>
                        {carData.map((d,index) => {
                            return (
                                <div key={index}onClick={() => { changeInitData(d.carType) }}>
                                    <span style={{ display: 'block', height: '50%', marginLeft: '5px', color: 'grey' }}>{d.carType}</span>
                                    <br />
                                    <span style={{ display: 'inline-block', height: '50%', marginLeft: '5px', color: 'darkslategrey' }}>{d.fuelType}</span> |
                                <span style={{ display: 'inline-block', height: '50%', marginLeft: '5px', color: 'darkslategrey' }}>{d.actionType}</span> |
                                <span style={{ display: 'inline-block', height: '50%', marginLeft: '5px', color: 'darkslategrey' }}>{d.price}</span>
                                    <br />
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        );
    }
};

export default Modal;
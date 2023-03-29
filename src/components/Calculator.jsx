import React from 'react';
import '../style/calculatorStyle.scss'

const Calculator = () => {
    return (
        <div className='ContainerCalculator'>
            <section>
                <div className='divMonto'>
                    <label for="monto">Monto</label>
                    <input type="number" placeholder="Ingresa el monto" id="monto"></input>
                </div>
                <div>
                    <div className="space-between">
                        <label for="ingresoPorcentaje">Selecciona el porcentaje</label>
                        <span id="seleccionPorcentaje">0%</span>
                    </div>
                    <input type="range" value="0" id="ingresoPorcentaje" className="range"></input>
                </div>
                <div className="space-between">
                    <span>Total del porcentaje</span>
                    <span id="totalPorcentaje">0</span>
                </div>
                <hr></hr>
                <div className="space-between total">
                    <span>Total</span>
                    <span id="total" className="styleTotal"></span>
                </div>
            </section>
            <section>
                <div>
                    <div className="space-between">
                        <label for="dividir">Dividir</label>
                        <span id="divisor">1</span>
                    </div>
                    <input type="range" min="1" max="10" value="1" id="dividir" className="range"></input>
                </div>
                <div className="space-between">
                    <span>Monto dividido</span>
                    <span id="montoDiv">-</span>
                </div>
                <div className="space-between">
                    <span>Porcentaje dividido</span>
                    <span id="porcentajeDiv">-</span>
                </div>
                <div className="space-between">
                    <span>Total</span>
                    <span id="sumaTotal" className="styleTotal">-</span>
                </div>
        </section>
            
        </div>
    );
}

export default Calculator;

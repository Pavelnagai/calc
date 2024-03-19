import React, {useEffect, useState} from 'react';
import './App.css'
const PurchaseCalculator = () => {
    const [purchaseAmount, setPurchaseAmount] = useState(0);
    const [expectedProfit, setExpectedProfit] = useState(100);
    const [vatPercentage, setVatPercentage] = useState(20);
    const [commissionPercentage, setCommissionPercentage] = useState(22);
    const [additionalAmount, setAdditionalAmount] = useState(0);
    const [addedValue, setAddedValue] = useState(30);

    const calculateSellingAmount = () => {
        const commission = commissionPercentage / 100;
        const vat = vatPercentage / 100;

        const sum = (expectedProfit + purchaseAmount) / (1 - commission - vat);

        const count =Math.round(sum / 100)

        return sum + (count * addedValue )
    };

    useEffect(() => {
        setAdditionalAmount(calculateSellingAmount())
    }, [purchaseAmount, expectedProfit, vatPercentage, commissionPercentage, addedValue])

    return (
        <div className='App'>
            <div className="container">
            <label>
                Сумма закупки:
                <input
                    type="number"
                    value={purchaseAmount}
                    onChange={(e) => setPurchaseAmount(parseFloat(e.target.value))}
                />
            </label>
            </div>
            <div className="container">

            <label>
                Ожидаемая прибыль:
                <input
                    type="number"
                    value={expectedProfit}
                    onChange={(e) => setExpectedProfit(parseFloat(e.target.value))}
                />
            </label>
            </div>
            <div className="container">

            <label>
                Процент НДС:
                <input
                    type="number"
                    value={vatPercentage}
                    onChange={(e) => setVatPercentage(parseFloat(e.target.value))}
                />
            </label>
            </div>
            <div className="container">

            <label>
                Процент комиссии:
                <input
                    type="number"
                    value={commissionPercentage}
                    onChange={(e) => setCommissionPercentage(parseFloat(e.target.value))}
                />
            </label>
            </div>
            <div className="container">

            <label>
                Добавленная стоимость на каждую 100:
                <input
                    type="number"
                    value={addedValue}
                    onChange={(e) => setAddedValue(parseFloat(e.target.value))}
                />
            </label>
            </div>
            <div>Сумма для продажи: {additionalAmount}</div>
        </div>
    );
};

export default PurchaseCalculator;

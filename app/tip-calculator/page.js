"use client"

import Image from "next/image";
import dollarSign from "@/tip-calculator/icon-dollar.svg"
import personSign from "@/tip-calculator/icon-person.svg"
import { useState } from "react";

export default function Profile() {
    const [amount, setAmount] = useState("");
    const [person, setPerson] = useState("");
    const [amountPerPerson, setAmountPerPerson] = useState("0.00");
    const [tipPerPerson, setTipPerPerson] = useState("0.00");

    function calculateAmountPerPerson() {
        var tot = (parseFloat(amount) / person).toFixed(2)

        if (isNaN(tot) || tot == Infinity) {
            return "0.00"
        }

        return tot
    }

    function calculateTipPerPerson(percent) {
        var tot = ((parseFloat(amount) * percent * 0.01) / person).toFixed(2)

        if (isNaN(tot) || tot == Infinity) {
            return "0.00"
        }

        return tot
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-lightest-gray-cyan">
            <h1 className="mb-10">SPLI <br/> TTER</h1>
            <div className="w-9/12 max-w-4xl mx-auto flex bg-white px-5 py-10 rounded-lg">
                {/* Left Side */}
                <div className="w-3/4 mr-10">
                    <div>
                        <label>Bill</label>
                        <div className="flex items-center">
                            <Image src={dollarSign} alt='Dollar Sign' className="absolute ml-1" />
                            <input id='amount' placeholder="0.00" onChange={(e) => setAmount(e.target.value)} value={amount} className="py-1 px-2 w-full text-right bg-lightest-gray-cyan rounded text-primary font-semibold" />
                        </div>
                        <p id='amount-error'></p>
                    </div>

                    <div>
                        <label>Selected Tip %</label>
                        <div>
                            <div>
                                <button className="bg-primary px-4 py-2 mx-2 my-2 w-20 rounded hover:bg-light-gray-cyan hover:text-primary font-semibold text-white" onClick={() => {
                                    setAmountPerPerson(calculateAmountPerPerson())
                                    setTipPerPerson(calculateTipPerPerson(5))
                                }}>5%</button>
                                <button className="bg-primary px-4 py-2 mx-2 my-2 w-20 rounded hover:bg-light-gray-cyan hover:text-primary font-semibold text-white" onClick={() => {
                                    setAmountPerPerson(calculateAmountPerPerson())
                                    setTipPerPerson(calculateTipPerPerson(10))
                                }}>10%</button>
                                <button className="bg-primary px-4 py-2 mx-2 my-2 w-20 rounded hover:bg-light-gray-cyan hover:text-primary font-semibold text-white" onClick={() => {
                                    setAmountPerPerson(calculateAmountPerPerson())
                                    setTipPerPerson(calculateTipPerPerson(15))
                                }}>15%</button>
                            </div>
                            <div>
                                <button className="bg-primary px-4 py-2 mx-2 my-2 w-20 rounded hover:bg-light-gray-cyan hover:text-primary font-semibold text-white" onClick={() => {
                                    setAmountPerPerson(calculateAmountPerPerson())
                                    setTipPerPerson(calculateTipPerPerson(25))
                                }}>25%</button>
                                <button className="bg-primary px-4 py-2 mx-2 my-2 w-20 rounded hover:bg-light-gray-cyan hover:text-primary font-semibold text-white" onClick={() => {
                                    setAmountPerPerson(calculateAmountPerPerson())
                                    setTipPerPerson(calculateTipPerPerson(calculateTipPerPerson(50)))
                                }}>50%</button>
                                <input  className="bg-light-gray-cyan px-2.5 py-2 mx-2 my-2 bg-light-gray-cyan w-20 rounded text-primary" placeholder="Custom" disabled={true} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label>Number of People</label>
                        <div className="flex items-center">
                            <Image src={personSign} alt='Person Sign' className="absolute ml-1" />
                            <input id='person' placeholder="0" value={person} onChange={(e) => setPerson(e.target.value)} className="py-1 px-2 w-full text-right bg-lightest-gray-cyan rounded text-primary font-semibold" />
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="bg-primary w-full rounded-lg w-3/4">
                    <div className="mt-6 mb-5 flex items-center justify-between w-10/12 mx-auto text-white">
                        <div>
                            <h1>Tip Amount</h1>
                            <p>/ person</p>
                        </div>

                        <h1>{tipPerPerson}</h1>
                    </div>

                    <div className="mt-6 mb-5 flex items-center justify-between w-10/12 mx-auto text-white">
                        <div>
                            <h1>Total</h1>
                            <p>/ person</p>
                        </div>

                        <h1>{amountPerPerson}</h1>
                    </div>


                    <div className="w-10/12 mx-auto mt-10">
                        <button className="w-full bg-strong-cyan py-2 rounded" onClick={() => {
                            setAmountPerPerson("0.00");
                            setTipPerPerson("0.00");
                            setAmount("");
                            setPerson("");
                        }}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { useEffect, useRef, useState } from "react";
import InputField from "./components/InputField";
import QRCodeCanvas from "./components/QRCodeCanvas";
import Button from "./components/Button";
import QRCode from 'qrcode';

export default function Home() {

    const [value, setValue] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);

    const canvasRef = useRef(null);
    const generateRef = useRef(null);

    async function handleGenerateClick() {
        if(value.length>0){
            await QRCode.toCanvas(canvasRef.current, value);
            if (!isGenerated) {
                setIsGenerated(true);
            }
        }
    }

    function handleInputChange(value) {
        setValue(value);
    }

    function handleInputKeyDown(e){
        const key = e.key;
        if(key==='Enter'){
            if(generateRef && generateRef.current){
                generateRef.current.click();
            }
        }
    }


    return (
        <div className="pt-[3%] pb-8 flex flex-col items-center">
            <div className="text-2xl font-bold mb-2">
                QR Code Generator
            </div>
            <div className="flex flex-col items-center justify-center border-4 w-[90vmin] m-auto p-8 border-blue-600 rounded-2xl">
                <InputField value={value} onInputChange={handleInputChange} label={"Enter your text"} placeholder={"Hi there!"} onInputKeyDown={handleInputKeyDown} />
                <Button text={"Generate"} onClick={handleGenerateClick} buttonRef={generateRef} />
                <div className={`p-2 mt-4 ${isGenerated ? 'border-2 border-blue-600' : ''}`}>
                    <QRCodeCanvas canvasRef={canvasRef} />

                </div>

            </div>
        </div>
    )
}
import React, {useState} from 'react';
import * as Slider from "@radix-ui/react-slider";

const SectorPreferenceWeightComponent = ({onWeightChange, color}) => {
    const [preferenceWeight, setPreferenceWeight] = useState(0)
    return (
        <div className={"flex flex-col items-center justify-center w-full gap-4"}>
            <Slider.Root
                className="relative flex w-full touch-none select-none items-center"
                value={[preferenceWeight]}
                onValueChange={(val) => {
                    setPreferenceWeight(val[0])
                    onWeightChange(val[0])
                }}
                min={0}
                max={50}
                step={1}
            >
                <Slider.Track className="relative h-2 flex-1 rounded-full bg-gray-300">
                    <Slider.Range
                        className="absolute h-full rounded-full bg-gradient-to-r bg-pastel-cyan"/>
                </Slider.Track>
                <Slider.Thumb
                    className="block h-4 w-4 rounded-full bg-pastel-blue focus:outline-none hover:cursor-pointer"/>
            </Slider.Root>
            <div className={"flex items-center justify-center w-full text-sm gap-4"}>
                <div
                    className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${preferenceWeight === 5 ? color.text : "text-gray-600"} ${preferenceWeight === 5 ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
                    onClick={() => {
                        setPreferenceWeight(5)
                        onWeightChange(5)
                    }}
                >
                    5%
                </div>
                <div
                    className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${preferenceWeight === 10 ? color.text : "text-gray-600"} ${preferenceWeight === 10 ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
                    onClick={() => {
                        setPreferenceWeight(10)
                        onWeightChange(10)
                    }}
                >
                    10%
                </div>
                <div
                    className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${preferenceWeight === 15 ? color.text : "text-gray-600"} ${preferenceWeight === 15 ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
                    onClick={() => {
                        setPreferenceWeight(15)
                        onWeightChange(15)
                    }}
                >
                    15%
                </div>
                <div
                    className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${preferenceWeight === 25 ? color.text : "text-gray-600"} ${preferenceWeight === 25 ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
                    onClick={() => {
                        setPreferenceWeight(25)
                        onWeightChange(25)
                    }}
                >
                    25%
                </div>
                <div
                    className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${preferenceWeight === 30 ? color.text : "text-gray-600"} ${preferenceWeight === 30 ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
                    onClick={() => {
                        setPreferenceWeight(30)
                        onWeightChange(30)
                    }}
                >
                    30%
                </div>
            </div>
        </div>
    );
};

export default SectorPreferenceWeightComponent;
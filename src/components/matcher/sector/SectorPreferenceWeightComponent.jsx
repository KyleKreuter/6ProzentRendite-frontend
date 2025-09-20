import React, {useState} from 'react';
import * as Slider from "@radix-ui/react-slider";
import SectorPreferenceWeightShortcutComponent
    from "@/components/matcher/sector/SectorPreferenceWeightShortcutComponent.jsx";

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
                <SectorPreferenceWeightShortcutComponent color={color} weight={5} active={preferenceWeight === 5} onWeightChange={()=> {
                    setPreferenceWeight(5)
                    onWeightChange(5)
                }} />
                <SectorPreferenceWeightShortcutComponent color={color} weight={10} active={preferenceWeight === 10} onWeightChange={()=> {
                    setPreferenceWeight(10)
                    onWeightChange(10)
                }} />
                <SectorPreferenceWeightShortcutComponent color={color} weight={20} active={preferenceWeight === 20} onWeightChange={()=> {
                    setPreferenceWeight(20)
                    onWeightChange(20)
                }} />
                <SectorPreferenceWeightShortcutComponent color={color} weight={25} active={preferenceWeight === 25} onWeightChange={()=> {
                    setPreferenceWeight(25)
                    onWeightChange(25)
                }} />
                <SectorPreferenceWeightShortcutComponent color={color} weight={30} active={preferenceWeight === 30} onWeightChange={()=> {
                    setPreferenceWeight(30)
                    onWeightChange(30)
                }} />
            </div>
        </div>
    );
};

export default SectorPreferenceWeightComponent;
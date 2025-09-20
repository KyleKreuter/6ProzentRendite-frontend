import React, {useState} from 'react';
import SectorPreferenceSliderComponent from "@/components/matcher/sector/SectorPreferenceSliderComponent.jsx";

const SectorPreferenceComponent = ({icon, headline, color, onWeightChange}) => {
    const [weight, setWeight] = useState(0)
    return (
        <div
            className={`w-full rounded-lg border-pastel-blue border-2 p-4 flex items-center justify-center flex-col gap-4 ${weight > 0 && "shadow-lg"}`}>
            <div className={"flex items-start justify-between w-full"}>
                <div className={"flex items-center justify-center gap-4"}>
                    {icon}
                    <p className={`font-semibold ${weight > 0 && color.text}`}>{headline}</p>
                </div>
                <div className={`flex items-center justify-center rounded-full ${weight > 0 && color.text} ${weight > 0 ? color.bg : "bg-gray-300"} py-1 px-3 text-sm`}>
                    {weight} %
                </div>
            </div>
            <div className={"flex items-center justify-between w-full text-sm"}>
                <p>0%</p>
                <p>Gewichtung</p>
                <p>50%</p>
            </div>
            <div className={"flex items-center justify-center w-full"}>
                <SectorPreferenceSliderComponent onWeightChange={(weight) => {
                    setWeight(weight)
                    onWeightChange(weight)
                }}/>
            </div>
        </div>
    );
};

export default SectorPreferenceComponent;
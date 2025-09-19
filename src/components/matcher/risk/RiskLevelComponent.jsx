import React, {useState} from 'react';
import * as Slider from "@radix-ui/react-slider";
import RiskLevelPill from "@/components/matcher/risk/RiskLevelPill.jsx";

const RiskLevelComponent = ({onRiskValueChange}) => {
    const [risk, setRisk] = useState(0)

    const getRiskLevelFromRiskValue = (riskValue) => {
        if (riskValue > 3){
            onRiskValueChange("HIGH")
            return "HIGH";
        }
        if (riskValue > 2){
            onRiskValueChange("HIGH_AVE")
            return "HIGH_AVE";
        }
        if (riskValue > 1){
            onRiskValueChange("MEDIUM")
            return "MEDIUM";
        }
        if (riskValue > 0){
            onRiskValueChange("LOW_AVE")
            return "LOW_AVE";
        }
        onRiskValueChange("LOW")
        return "LOW";
    }

    return (
        <div className={"flex items-center justify-center w-full flex-col gap-4"}>
            <div className={"w-full flex items-center justify-between"}>
                <p className={"font-semibold"}>Risiko</p>
                <RiskLevelPill riskLevel={getRiskLevelFromRiskValue(risk)}/>
            </div>
            <Slider.Root
                className="relative flex w-full touch-none select-none items-center"
                value={[risk]}
                onValueChange={(val) => setRisk(val[0])}
                min={0}
                max={4}
                step={1}
            >
                <Slider.Track className="relative h-2 flex-1 rounded-full bg-gray-300">
                    <Slider.Range
                        className="absolute h-full rounded-full bg-gradient-to-r bg-pastel-cyan"/>
                </Slider.Track>
                <Slider.Thumb
                    className="block h-4 w-4 rounded-full bg-pastel-blue focus:outline-none hover:cursor-pointer"/>
            </Slider.Root>
        </div>
    );
};

export default RiskLevelComponent;
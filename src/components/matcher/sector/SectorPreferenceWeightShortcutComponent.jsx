import React from 'react';

const SectorPreferenceWeightShortcutComponent = ({color, active, weight, onWeightChange}) => {
    return (
        <div
            className={`flex items-center justify-center rounded-full px-2 py-1 text-sm ${active ? color.text : "text-gray-600"} ${active ? color.bg : "bg-gray-300"} hover:cursor-pointer`}
            onClick={() => {
                onWeightChange(weight)
            }}
        >
            {weight}%
        </div>
    );
};

export default SectorPreferenceWeightShortcutComponent;
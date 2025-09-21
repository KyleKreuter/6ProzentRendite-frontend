import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline/index.js";

const DefaultModal = ({ children, title,subtitle, onExit }) => {
    return (
        <div
            className={
                "text-md relative mx-5 mt-10 flex w-full max-w-[900px] flex-col rounded-2xl bg-white"
            }
        >
            <div className={"absolute top-4 right-4"}>
                <XMarkIcon
                    className={"size-6 text-gray-400 hover:cursor-pointer hover:text-red-500"}
                    onClick={() => onExit && onExit()}
                />
            </div>
            <div className={"flex flex-col gap-4 rounded-2xl border border-gray-300 p-4 shadow"}>
                <div>
                    <p className={"text-xl"}>{title}</p>
                    <p className={"text-sm"}>{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
};

export default DefaultModal;

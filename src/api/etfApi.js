import {api} from "@/api/api.js";

export const getETFs = async (data) => {
    const response = await api.post("/composition/etf", {
        foci: data.foci,
        compositionRisk: data.compositionRisk
    });
    return response.data;
}
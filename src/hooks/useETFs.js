import {useQuery} from "@tanstack/react-query";
import {getETFs} from "@/api/etfApi.js";

export const useETFs = (foci, compositionRisk) => {
    return useQuery({
        queryKey: ["etfs"],
        queryFn: () => {
            return getETFs({foci, compositionRisk});
        }
    })
}
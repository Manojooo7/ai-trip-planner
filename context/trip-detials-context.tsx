import { TripContext } from "@/types/trip";
import { createContext } from "react";

export const TripDetailsContext = createContext<TripContext | undefined>(undefined);

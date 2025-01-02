import { useState } from "react";
import { SelectChangeEvent, EventHandlers } from "@mui/material";
import { opticalFiber } from "./inventory/fiber";

export const useCalculation = () => {
    const [span, setSpan] = useState('');
    const [att, setAtt] = useState<number | undefined>();
    const [fiber, setFiber] = useState('');
    const result = span && att ? parseFloat(span) * parseFloat(att) : '';

    const handleFiberChange = (e: SelectChangeEvent) => {
        let typeAmplifier = e.target.value;
        setFiber(typeAmplifier);
        let amp = opticalFiber.find(p => p.title === typeAmplifier);
        setAtt(amp?.attenuation);
    };

    const handleSpanLength = (e) => {
        setSpan(e.target.value)
    }

    return (
        {
            fiber,
            span,
            result,
            handleFiberChange,
            handleSpanLength
        }
    )
}
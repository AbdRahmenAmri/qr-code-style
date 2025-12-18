import React from 'react'
import { Slider } from '../ui/slider'
import { InputGroup, InputGroupAddon, InputGroupButton } from '../ui/input-group';
import { RotateCcw } from 'lucide-react';
import { Label } from '../ui/label';
import { Path, UseFormReturn, useWatch } from 'react-hook-form';
import { QrFormData } from '@/src/schema/qr.schema';

type Props = {
    label: string;
    name: Path<QrFormData>;
    defaultValue: number[];
    min?: number;
    max: number;
    step?: number;
    methods: UseFormReturn<QrFormData> ;
}

const SliderInput = ({
    defaultValue,
    min = 0,
    max,
    step,
    label,
    name,
    methods
}: Props) => {
    const value = useWatch({
        control: methods.control,
        name: name
    });
    const handleChange = (value: number[]) => {
        methods.setValue(name, value[0]);
    }

    const handleReset = () => {
        methods.setValue(name, defaultValue[0]);
    }
    return (
        <div className='py-4'>
            <div className="flex justify-between items-center mb-2">
                <Label className='font-semibold'>{label}</Label>
                <span className="text-xs text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">{value}</span>
            </div>
            <InputGroup>
                <Slider className='px-2' defaultValue={defaultValue} value={[value]} min={min} max={max} step={step} onValueChange={handleChange}/>
                <InputGroupAddon align="inline-end">
                    <InputGroupButton onClick={handleReset}><RotateCcw size={14} /></InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>

    )
}

export default SliderInput
import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'

type Props = {
    value: string
    onChange: (value: string) => void
}

const ColorPicker = ({ value, onChange }: Props) => {
    const [localValue, setLocalValue] = useState(value);

    // Update local value if prop changes (e.g. from form reset)
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (localValue !== value) {
                onChange(localValue);
            }
        }, 200); // 200ms debounce

        return () => clearTimeout(timeoutId);
    }, [localValue, onChange, value]);

    return (
        <div className="flex gap-2">
            <Input 
                type="color" 
                value={localValue} 
                onChange={(e) => setLocalValue(e.target.value)}
                className="w-12 p-1 h-10 cursor-pointer" 
            />
            <Input 
                type="text" 
                value={localValue} 
                onChange={(e) => setLocalValue(e.target.value)}
                placeholder="#000000" 
            />
        </div>
    )
}

export default ColorPicker


import React from 'react'
import { UseFormReturn, useWatch } from 'react-hook-form'
import { Badge } from '../ui/badge'
import { Link, Mail } from 'lucide-react'
import { QRCodeMode } from '@/src/type/enum'
import ControlledDataInput from '../input/controlled-data.input'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrMode = ({ methods }: Props) => {
    const qrMode = useWatch({
        control: methods.control,
        name: 'mode'
    });

    const onModeChange = (mode: QRCodeMode) => {
        methods.setValue('mode', mode);
    }

    return (
        <div>
            <div className='flex items-center justify-between mb-6 gap-2'>
                <Badge 
                    variant={qrMode == QRCodeMode.URL ? "default" : "outline"} 
                    className='flex items-center justify-center space-x-1 h-9 cursor-pointer flex-1 px-2' 
                    onClick={() => onModeChange(QRCodeMode.URL)}
                >
                    <Link size={14} />
                    <span className="text-[10px] sm:text-xs">URL</span>
                </Badge>
                <Badge 
                    variant={qrMode == QRCodeMode.EMAIL ? "default" : "outline"} 
                    className='flex items-center justify-center space-x-1 h-9 cursor-pointer flex-1 px-2' 
                    onClick={() => onModeChange(QRCodeMode.EMAIL)}
                >
                    <Mail size={14} />
                    <span className="text-[10px] sm:text-xs">Email</span>
                </Badge>
            </div>
            <ControlledDataInput methods={methods} name="data" mode={qrMode} />
        </div>
    )
}

export default QrMode
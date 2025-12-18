import React from 'react'
import { QRCodeMode } from '@/src/type/enum'
import { Path, UseFormReturn } from 'react-hook-form'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
import { Link, Mail, Phone } from 'lucide-react'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>,
    name: Path<QrFormData>,
    mode: QRCodeMode,
}

const ControlledDataInput = ({
    methods,
    name,
    mode
}: Props) => {

    switch (mode) {
        case QRCodeMode.URL:
            return (
                <InputGroup>
                    <InputGroup>

                        <InputGroupInput type='url' placeholder='https://example.com' {...methods.register(name)} />

                        <InputGroupAddon>
                            <Link />
                        </InputGroupAddon>
                    </InputGroup>
                </InputGroup>
            )
        case QRCodeMode.TEL:
            return (
                <InputGroup>
                    <InputGroup>
                        <InputGroupInput type='number' placeholder='+123456789' {...methods.register(name)} />

                        <InputGroupAddon>
                            <Phone />
                        </InputGroupAddon>
                    </InputGroup>
                </InputGroup>
            )
        case QRCodeMode.EMAIL:
            return (
                <InputGroup>
                    <InputGroup>
                        <InputGroupInput type='email' placeholder='john@example.com' {...methods.register(name)} />

                        <InputGroupAddon>
                            <Mail />
                        </InputGroupAddon>
                    </InputGroup>
                </InputGroup>
            )
        default:
            break;
    }
}

export default ControlledDataInput
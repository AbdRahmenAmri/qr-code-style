import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronsUpDown } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import SliderInput from '../input/slider.input'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrGlobal = ({ methods }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
        >
            <div className="flex items-center justify-between gap-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-sm font-semibold">
                    Global Options
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-4 px-2">
                <div className="grid grid-cols-2 gap-4">
                    <SliderInput name='width' label='Width' defaultValue={[300]} min={100} max={1000} step={10} methods={methods} />
                    <SliderInput name='height' label='Height' defaultValue={[300]} min={100} max={1000} step={10} methods={methods} />
                </div>
                <SliderInput name='margin' label='Margin' defaultValue={[10]} min={0} max={100} step={1} methods={methods} />
                
                <FormField
                    control={methods.control}
                    name="errorCorrectionLevel"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Error Correction Level</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="L">Low (L)</SelectItem>
                                    <SelectItem value="M">Medium (M)</SelectItem>
                                    <SelectItem value="Q">Quartile (Q)</SelectItem>
                                    <SelectItem value="H">High (H)</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default QrGlobal


import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronsUpDown, Square, Circle, Minus, Star } from 'lucide-react'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import ColorPicker from './color-picker'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrDots = ({ methods }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const dotTypes = [
        { value: 'square', label: 'Square', icon: Square },
        { value: 'dots', label: 'Dots', icon: Circle },
        { value: 'rounded', label: 'Rounded', icon: Minus },
        { value: 'extra-rounded', label: 'Extra Rounded', icon: Minus },
        { value: 'classy', label: 'Classy', icon: Star },
        { value: 'classy-rounded', label: 'Classy Rounded', icon: Star },
    ];
    
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
        >
            <div className="flex items-center justify-between gap-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-sm font-semibold">
                    Dots Options
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-4 px-2">
                <FormField
                    control={methods.control}
                    name="dotsOptions.type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dots Type</FormLabel>
                            <div className="flex flex-wrap gap-2">
                                {dotTypes.map(({ value, label, icon: Icon }) => (
                                    <Button
                                        key={value}
                                        type="button"
                                        variant={field.value === value ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => field.onChange(value)}
                                        className="flex items-center gap-2"
                                    >
                                        <Icon size={16} />
                                        {label}
                                    </Button>
                                ))}
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={methods.control}
                    name="dotsOptions.color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Dots Color</FormLabel>
                            <FormControl>
                                <ColorPicker value={field?.value || "000000" } onChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default QrDots


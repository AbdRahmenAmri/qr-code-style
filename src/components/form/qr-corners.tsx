import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronsUpDown, Square, Circle, Minus } from 'lucide-react'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import ColorPicker from './color-picker'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrCorners = ({ methods }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    const cornerSquareTypes = [
        { value: 'square', label: 'Square', icon: Square },
        { value: 'dot', label: 'Dot', icon: Circle },
        { value: 'extra-rounded', label: 'Extra Rounded', icon: Minus },
    ];
    
    const cornerDotTypes = [
        { value: 'square', label: 'Square', icon: Square },
        { value: 'dot', label: 'Dot', icon: Circle },
    ];
    
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
        >
            <div className="flex items-center justify-between gap-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-sm font-semibold">
                    Corners Options
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-6 px-2">
                <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase text-muted-foreground">Corner Square</h5>
                    <FormField
                        control={methods.control}
                        name="cornersSquareOptions.type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <div className="flex flex-wrap gap-2">
                                    {cornerSquareTypes.map(({ value, label, icon: Icon }) => (
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
                        name="cornersSquareOptions.color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Color</FormLabel>
                                <FormControl>
                                    <ColorPicker value={field?.value || "000000" } onChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="space-y-4">
                    <h5 className="text-xs font-bold uppercase text-muted-foreground">Corner Dot</h5>
                    <FormField
                        control={methods.control}
                        name="cornersDotOptions.type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <div className="flex flex-wrap gap-2">
                                    {cornerDotTypes.map(({ value, label, icon: Icon }) => (
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
                        name="cornersDotOptions.color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Color</FormLabel>
                                <FormControl>
                                    <ColorPicker value={field?.value || "000000" } onChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default QrCorners


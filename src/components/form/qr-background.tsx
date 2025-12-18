import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronsUpDown } from 'lucide-react'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import ColorPicker from './color-picker'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrBackground = ({ methods }: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
        >
            <div className="flex items-center justify-between gap-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-sm font-semibold">
                    Background Options
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
                    name="backgroundOptions.color"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Background Color</FormLabel>
                            <FormControl>
                                <ColorPicker value={field?.value || "ffffff"} onChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default QrBackground


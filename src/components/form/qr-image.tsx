import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible'
import { Button } from '../ui/button'
import { ChevronsUpDown } from 'lucide-react'
import SliderInput from '../input/slider.input'
import ControlledFileInput from '../input/file-input'
import { FormField, FormItem, FormLabel, FormControl } from '../ui/form'
import { Checkbox } from '../ui/checkbox'
import { QrFormData } from '@/src/schema/qr.schema'

type Props = {
    methods: UseFormReturn<QrFormData>
}

const QrImage = ({
    methods,
}: Props) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex w-full flex-col gap-2"
        >
            <div className="flex items-center justify-between gap-4" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-sm font-semibold">
                    QR Code Image Options
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2 px-2">
                <ControlledFileInput methods={methods} name='image' />
                
                <FormField
                    control={methods.control}
                    name="hideBackgroundDots"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Hide background dots
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />

                <SliderInput name='imageSize' label='Image Size' defaultValue={[0.4]} max={1} step={0.1} methods={methods} />
                <SliderInput name='imageMargin' label='Image Margin' defaultValue={[0]} max={100} step={1} methods={methods} />
            </CollapsibleContent>
        </Collapsible>
    )
}

export default QrImage
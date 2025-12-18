import { useForm, UseFormReturn, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../components/ui/form";
import { Button } from "../components/ui/button";
import { QrFormData, qrFormSchema } from "../schema/qr.schema";
import { useEffect } from "react";
import QrMode from "../components/form/qr-mode";
import { QRCodeMode } from "../type/enum";
import QrImage from "../components/form/qr-image";
import QrDots from "../components/form/qr-dots";
import QrCorners from "../components/form/qr-corners";
import QrBackground from "../components/form/qr-background";
import QrGlobal from "../components/form/qr-global";
import { Download, FileImage, FileText } from "lucide-react";
import { FileExtension } from "qr-code-styling";

type Props = {
  onSubmit: (data: QrFormData) => void;
  onDownload: (format: FileExtension) => void;
};

export default function QRForm({ onSubmit, onDownload }: Props) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const form = useForm({
    resolver: zodResolver(qrFormSchema),
    mode: "onChange",
    defaultValues: {
      mode: QRCodeMode.URL,
      margin: 10,
      imageMargin: 0,
      imageSize: 0.4,
      hideBackgroundDots: true,
      width: 300,
      height: 300,
      data: url,
      errorCorrectionLevel: "M",
      dotsOptions: {
        type: "square",
        color: "#000000",
      },
      cornersSquareOptions: {
        type: "square",
        color: "#000000",
      },
      cornersDotOptions: {
        type: "square",
        color: "#000000",
      },
      backgroundOptions: {
        color: "#ffffff",
      },
    },
  });

  const formData = useWatch({ control: form.control });

  useEffect(() => {
    onSubmit(formData as QrFormData);
  }, [formData, onSubmit]);

  const formats = [
    { value: 'png', label: 'PNG', icon: FileImage },
    { value: 'jpeg', label: 'JPEG', icon: FileImage },
    { value: 'webp', label: 'WEBP', icon: FileImage },
    { value: 'svg', label: 'SVG', icon: FileText },
  ];

  return (
    <Form {...form}>
      <form className="space-y-4 p-4 pb-10">
        <QrMode methods={form as UseFormReturn<QrFormData>} />
        <QrGlobal methods={form as UseFormReturn<QrFormData>} />
        <QrImage methods={form as UseFormReturn<QrFormData>} />
        <QrDots methods={form as UseFormReturn<QrFormData>} />
        <QrCorners methods={form as UseFormReturn<QrFormData>} />
        <QrBackground methods={form as UseFormReturn<QrFormData>} />

        <div className="flex flex-wrap gap-2 pt-4">
          {formats.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              type="button"
              variant="default"
              size="sm"
              onClick={() => onDownload(value as FileExtension)}
              className="flex items-center gap-2"
            >
              <Icon size={16} />
              <Download size={16} />
              {label}
            </Button>
          ))}
        </div>
      </form>
    </Form>
  );
}

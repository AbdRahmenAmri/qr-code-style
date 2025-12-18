'use client';

import Image from 'next/image';
import { useFileUpload } from '../../hooks/use-file-upload';
import { Button } from '../ui/button';
import { ImageIcon, Upload, XIcon } from 'lucide-react';
import { Path, UseFormReturn } from 'react-hook-form';
import { QrFormData } from '@/src/schema/qr.schema';

type Props = {
  methods: UseFormReturn<QrFormData>;
  name: Path<QrFormData>;
}

export default function ControlledFileInput({ methods, name }: Props) {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] = useFileUpload({
    accept: 'image/*',
    multiple: false,
    maxFiles: 1,
    onFilesChange: (files) => {
      methods.setValue(name, files?.[0] || null);
    },
  });

  const handleFileRemove = () => {
    methods.setValue(name, null);
    removeFile(files[0].id);
  }


  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  return (
    <div className="flex flex-col items-start gap-2 ">
      <div className="flex items-center gap-2 align-top w-full">
        <div
          className="relative inline-flex size-9 shrink-0 items-center overflow-hidden rounded-md"
          aria-label={previewUrl ? 'Preview of uploaded image' : 'Default user avatar'}
          onClick={openFileDialog}
        >
          {previewUrl ? (
            <Image
              className="size-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={32}
              height={32}
            />
          ) : (
            <div aria-hidden="true">
              <ImageIcon className="opacity-60" size={24} />
            </div>
          )}
        </div>
        <div className="relative flex w-full">
          <Button variant="outline" onClick={openFileDialog} aria-haspopup="dialog" className='w-full'>
            <Upload />
            {fileName ? 'Change image' : 'Upload image'}
          </Button>
          <input {...getInputProps()} className="sr-only" aria-label="Upload image file" tabIndex={-1} />

        </div>
        {fileName && (<Button
          variant="destructive"
          onClick={handleFileRemove}
          aria-label={`Remove ${fileName}`}
        >
          <XIcon />
        </Button>)}
      </div>
    </div>
  );
}

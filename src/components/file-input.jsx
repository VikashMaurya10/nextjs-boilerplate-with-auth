'use client';

import { useId, useState } from 'react';

import { Upload } from 'lucide-react';

import {
  Button,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from '@/components';

export const FileInput = ({ form, name = 'file', ...props }) => {
  const [dragActive, setDragActive] = useState(false);
  const file = form.watch(name);
  const inputId = useId();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    form.setValue(name, selectedFile);
    form.trigger(name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFile = e.dataTransfer.files?.[0];
    form.setValue(name, droppedFile);
    form.trigger(name);
  };

  const {
    formState: { isSubmitting },
  } = form;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({}) => {
        return (
          <FormItem>
            <FormControl>
              <div
                className={`mt-4 border-2 border-dashed rounded-lg p-4 text-center ${
                  dragActive ? 'border-blue-500 bg-background' : ''
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Hidden Input */}
                <Input
                  accept=".pdf"
                  disabled={isSubmitting}
                  {...props}
                  type="file"
                  id={inputId}
                  className="hidden"
                  onChange={handleFileChange}
                />

                {/* Label triggers input */}
                <Button className="w-full" disabled={isSubmitting} asChild>
                  <label htmlFor={inputId} className="w-full cursor-pointer">
                    <Upload className="size-4 mr-2" />
                    Click To Upload A File Or Drag & Drop
                  </label>
                </Button>

                {file && <p className="mt-2 text-sm">File selected: {file.name}</p>}
                <FormDescription className={'mt-2'}>File Type: PDF only</FormDescription>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

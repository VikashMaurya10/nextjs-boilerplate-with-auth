'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import {
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
} from '@/components';
import { cn, oklchToHex } from '@/lib';

// Utility function to check if the value is a color (either hex or oklch)
const isColor = (value) => {
  return /^#([0-9A-Fa-f]{3}){1,2}$/.test(value.trim()) || value.startsWith('oklch(');
};

// Convert OKLCH to HEX for use in input value
const getColorValue = (value) => {
  if (value.startsWith('oklch(')) {
    return oklchToHex(value); // Convert OKLCH to HEX
  }
  return value; // Return HEX if it's already in HEX format
};

export const ThemeGeneratorForm = ({ themeVariables }) => {
  // Dynamically create the Zod schema
  const FormSchema = z.object(
    Object.fromEntries(
      themeVariables.map((v) => [
        v.name,
        z.string().min(1, `${v.name} color is required.`), // Each variable should be a non-empty string
      ])
    )
  );

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: Object.fromEntries(themeVariables.map((v) => [v.name, v.value])),
  });

  const onSubmit = (data) => {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    // Apply the CSS variable changes
    Object.entries(data).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--${name}`, value);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))]"
      >
        {themeVariables.map((variable) => {
          const isText = isColor(variable.value);

          return (
            <FormField
              key={variable.name}
              control={form.control}
              name={variable.name}
              render={({ field }) => {
                const colorValue = isText ? field.value : getColorValue(field.value); // Convert to HEX if OKLCH

                return (
                  <FormItem>
                    <FormLabel className={'capitalize'}>{variable.name}</FormLabel>
                    <FormControl>
                      <Input
                        type={isText ? 'color' : 'text'}
                        {...field}
                        value={colorValue} // Set color value (either HEX or OKLCH)
                        onChange={(e) => {
                          const newValue = e.target.value;
                          field.onChange(newValue);
                          document.documentElement.style.setProperty(`--${field.name}`, newValue);
                        }}
                        className={cn('rounded', !isText ? '' : 'h-10 w-20')}
                      />
                    </FormControl>
                    <FormDescription>Adjust the color for {variable.name}.</FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          );
        })}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

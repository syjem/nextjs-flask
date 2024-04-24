'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string().min(2).max(30),
  email: z.string().max(30).email(),
  phone: z.string().min(11).max(12),
  favorite: z.boolean().default(false).optional(),
});

const NewContactForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.push('/contacts');
    console.log(data);
    form.reset();
    router.refresh();
    toast.success('New contact added', {});
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-md w-full p-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input autoFocus placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+639129820435" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-1/3">
            {form.formState.isSubmitting ? 'Adding' : 'Add Contact'}
            {form.formState.isSubmitting && (
              <Loader2 className="animate-spin h-5 w-5 ml-2" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewContactForm;

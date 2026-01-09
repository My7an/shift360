import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Le nom est requis').max(100, 'Le nom est trop long'),
  email: z.string().trim().email('Email invalide').max(255, 'Email trop long'),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, 'Le message est requis').max(1000, 'Le message est trop long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const subject = encodeURIComponent(`Contact de ${data.name}`);
    const body = encodeURIComponent(
      `Nom: ${data.name}\nEmail: ${data.email}\nTéléphone: ${data.phone || 'Non renseigné'}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:servicebellinepro@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success('Redirection vers votre client email...');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Votre nom"
          {...register('name')}
          className="bg-white/10 border-white/20 placeholder:text-foreground/40"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Votre email"
          {...register('email')}
          className="bg-white/10 border-white/20 placeholder:text-foreground/40"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          type="tel"
          placeholder="Votre téléphone (optionnel)"
          {...register('phone')}
          className="bg-white/10 border-white/20 placeholder:text-foreground/40"
        />
      </div>

      <div>
        <Textarea
          placeholder="Votre message"
          rows={4}
          {...register('message')}
          className="bg-white/10 border-white/20 placeholder:text-foreground/40 resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-liquid-primary w-full flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;

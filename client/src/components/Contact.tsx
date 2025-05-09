import { useState } from 'react';
import { motion } from 'framer-motion';
import { MaterialIcon } from '@/lib/icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters long' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
        duration: 5000,
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: ContactFormData) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: "location_on",
      title: "Location",
      content: "Mahendranagar, Kanchanpur, Nepal"
    },
    {
      icon: "email",
      title: "Email",
      content: "manish.phy.math@gmail.com"
    },
    {
      icon: "phone",
      title: "Phone",
      content: "(+977) 9742400662"
    }
  ];

  const socialLinks = [
    { icon: "school", href: "#" },
    { icon: "link", href: "#" },
    { icon: "code", href: "#" }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-title-bar"></div>
          <p className="section-description">
            Have questions about my research or interested in collaboration? Let's connect.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-neutral-50 rounded-2xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-primary to-secondary p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <MaterialIcon name={item.icon} className="mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Connect</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href} 
                        className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                      >
                        <MaterialIcon name={link.icon} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${errors.name ? 'border-red-500' : 'border-neutral-300'}`}
                        placeholder="John Doe"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${errors.email ? 'border-red-500' : 'border-neutral-300'}`}
                        placeholder="john@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${errors.subject ? 'border-red-500' : 'border-neutral-300'}`}
                      placeholder="Research Collaboration"
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-neutral-300'}`}
                      rows={4}
                      placeholder="I'd like to discuss..."
                      {...register("message")}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light text-white rounded-md px-6 py-3 font-medium transition-colors disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

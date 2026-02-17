import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find((img) => img.id === 'contact-map');

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We'd love to hear from you! Whether you have a question about our
            flavors, catering, or just want to say hello.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
              </div>
              <Input type="text" placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Our Parlour</h3>
                  <p className="text-muted-foreground">
                    76 Lower Main Rd, Observatory, Cape Town, 7925
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">info@tapitapi.co.za</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">(+27) 21 447 7565</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {mapImage && (
              <Card className="h-full overflow-hidden rounded-lg shadow-xl">
                <div className="relative h-full w-full min-h-[400px] md:min-h-0">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={mapImage.imageHint}
                  />
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

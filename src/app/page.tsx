import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Utensils, Globe, Leaf } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');
  const flavor1 = PlaceHolderImages.find((img) => img.id === 'flavor-1');
  const flavor2 = PlaceHolderImages.find((img) => img.id === 'flavor-2');
  const flavor3 = PlaceHolderImages.find((img) => img.id === 'flavor-3');

  const features = [
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: 'Authentic Recipes',
      description:
        'We draw inspiration from traditional African desserts, drinks, and snacks to create our unique ice cream flavors.',
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: 'A Taste of Africa',
      description:
        'Our mission is to celebrate the diversity of African food culture and share it with the world, one scoop at a time.',
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: 'Natural Ingredients',
      description:
        'We use high-quality, locally sourced ingredients to ensure every spoonful is packed with natural, vibrant flavor.',
    },
  ];

  const flavors = [
    {
      image: flavor1,
      name: 'Rooibos & Honeycomb',
      description:
        'Earthy rooibos tea infused ice cream with sweet, crunchy honeycomb pieces.',
    },
    {
      image: flavor2,
      name: 'Baobab & Ginger',
      description:
        'A zesty and citrusy flavor from the fruit of the iconic African baobab tree, with a warm ginger kick.',
    },
    {
      image: flavor3,
      name: 'Hibiscus & Vanilla',
      description:
        'Floral and tart hibiscus flowers balanced with the classic sweetness of creamy vanilla bean.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative flex h-[60vh] w-full items-center justify-center text-center text-white md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-3xl p-4">
          <h1 className="mb-4 font-headline text-4xl font-extrabold tracking-tight drop-shadow-lg md:text-6xl">
            Handcrafted Ice Cream Inspired by Africa
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg drop-shadow-md md:text-xl">
            Welcome to Tapi Tapi, where we churn authentic African flavors into
            delicious, artisanal ice cream.
          </p>
          <Button asChild size="lg" className="font-bold">
            <Link href="/about">Learn Our Story</Link>
          </Button>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 text-center md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                {feature.icon}
                <h3 className="mb-2 mt-4 font-headline text-2xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
            Our Signature Flavors
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
            Discover a unique world of taste. Here are a few of our favorites.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {flavors.map((flavor, index) => (
              <Card
                key={index}
                className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  {flavor.image && (
                    <div className="relative aspect-square">
                      <Image
                        src={flavor.image.imageUrl}
                        alt={flavor.image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={flavor.image.imageHint}
                      />
                    </div>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 font-headline text-xl font-bold">
                    {flavor.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {flavor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
            Ready to try?
          </h2>
          <p className="mx-auto mb-8 max-w-xl">
            Visit us in Cape Town or get in touch to learn more about our
            catering and events services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-image');

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Story
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            More than just ice cream, we're a celebration of African culture,
            ingredients, and stories.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-5 lg:gap-16">
          <div className="md:col-span-2">
            {aboutImage && (
              <Card className="overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </Card>
            )}
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Tapiwa Guzha, Founder of Tapi Tapi
            </p>
          </div>
          <div className="space-y-8 text-lg md:col-span-3">
            <div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-primary">
                Our History
              </h2>
              <p className="leading-relaxed text-foreground/90">
                Founded by Tapiwa Guzha, a passionate food scientist, Tapi Tapi
                began as a project to challenge the colonial narratives that
                often dominate our food systems. It's a journey to decolonize
                the palate, one scoop at a time. What started in a small kitchen
                in Cape Town has grown into a movement, bringing people together
                through the shared joy of unique, African-inspired ice cream.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-primary">
                Our Mission & Values
              </h2>
              <p className="mb-4 leading-relaxed text-foreground/90">
                Our mission is to create a food experience that is both
                educational and delicious. We aim to represent the diverse
                flavors of the continent, from the sweet fruits of the tropics
                to the savory spices of the north. We value:
              </p>
              <ul className="list-inside list-disc space-y-2 text-foreground/80">
                <li>
                  <span className="font-semibold">Authenticity:</span> Staying
                  true to the ingredients and culinary traditions of Africa.
                </li>
                <li>
                  <span className="font-semibold">Community:</span> Building
                  connections and sharing stories through food.
                </li>
                <li>
                  <span className="font-semibold">Innovation:</span> Constantly
                  exploring new flavors and pushing the boundaries of what ice
                  cream can be.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-headline text-3xl font-bold text-primary">
                What Sets Us Apart
              </h2>
              <p className="leading-relaxed text-foreground/90">
                At Tapi Tapi, we don't just sell ice cream; we offer an
                experience. Each flavor tells a story, and each scoop is a
                conversation starter. We're proud to be a black-owned business
                that centers African identity and celebrates its richness in a
                world where it is often marginalized. Our shop is a space for
                learning, sharing, and enjoying the incredible tastes of home.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container size="narrow" className="py-32 text-center">
      <p className="text-xs uppercase tracking-wider2 text-glow">404</p>
      <h1 className="mt-4 font-serif text-4xl text-moon sm:text-5xl">
        That page didn’t come back from the dream.
      </h1>
      <p className="mt-5 text-base leading-relaxed text-moondim">
        The page you’re looking for isn’t here, or never was. Try one of the
        signposts below — they all go somewhere quiet.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="md">
          Back home
        </Button>
        <Button href="/download" variant="secondary" size="md">
          Download the app
        </Button>
      </div>
    </Container>
  );
}

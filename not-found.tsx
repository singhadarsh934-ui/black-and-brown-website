import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="heading-lg">Page Not Found</h1>
      <p className="mt-4 max-w-sm text-espresso-600">
        The page you're looking for doesn't exist. Let's get you back to shopping.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </section>
  );
}

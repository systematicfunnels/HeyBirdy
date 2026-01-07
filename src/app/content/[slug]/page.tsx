import { PublicContentPage } from "@/components/pages/public/public-content-page"

export default function Content({ params }: { params: { slug: string } }) {
  return <PublicContentPage slug={params.slug} />
}

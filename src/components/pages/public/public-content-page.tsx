export function PublicContentPage({ slug }: { slug: string }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Content Page</h1>
      <p>Slug: {slug}</p>
    </div>
  )
}

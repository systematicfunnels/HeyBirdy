export function PublicChannelPage({ creator }: { creator: string }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Channel Page</h1>
      <p>Creator: {creator}</p>
    </div>
  )
}

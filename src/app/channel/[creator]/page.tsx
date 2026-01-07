import { PublicChannelPage } from "@/components/pages/public/public-channel-page"

export default function Channel({ params }: { params: { creator: string } }) {
  return <PublicChannelPage creator={params.creator} />
}

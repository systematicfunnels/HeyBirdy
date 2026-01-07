import { ProfilePage } from "@/components/pages/profile/profile-page"

export default function Profile({ params }: { params: { username: string } }) {
  return <ProfilePage username={params.username} />
}

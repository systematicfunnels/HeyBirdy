import { Switch } from "@/components/ui/switch"

interface AffiliateSettingSwitchProps {
  label: string
  desc: string
  defaultChecked?: boolean
}

export function AffiliateSettingSwitch({ label, desc, defaultChecked = false }: AffiliateSettingSwitchProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="space-y-1">
        <p className="text-sm font-black text-slate-900">{label}</p>
        <p className="text-[10px] font-medium text-slate-400">{desc}</p>
      </div>
      <Switch defaultChecked={defaultChecked} className="data-[state=checked]:bg-primary" />
    </div>
  )
}
